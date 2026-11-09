import assert from 'node:assert/strict'
import { describe, it } from 'node:test'
import { SITE_URL } from '../constants'
import {
  getPulseAppPath,
  getPulseImageDir,
  getPulseLanguageAlternates,
  isPulseLocale,
  isPulseRetiredLocale,
  negotiatePulseLocale,
  normalizePulseLocale,
  PULSE_LOCALES,
  PULSE_LOCALE_CONFIG,
  PULSE_RETIRED_LOCALES,
  PULSE_RTL_LOCALES,
} from './locales'
import { assertPulseMessagesComplete, getPulseMessages } from './messages'

const PAGES = ['', 'support', 'privacy'] as const

const SUPPORT_SECTIONS = [
  'gettingStarted',
  'accounts',
  'cloudSync',
  'migration',
  'notifications',
  'pomodoroPro',
  'purchases',
  'focusProtection',
  'accountPrivacy',
] as const

const EXPECTED_LOCALE_COUNT = 7
const EXPECTED_ROUTE_COUNT = EXPECTED_LOCALE_COUNT * PAGES.length

describe('Pulse locales', () => {
  it(`supports exactly ${EXPECTED_LOCALE_COUNT} locales matching iOS 1.13`, () => {
    assert.deepEqual([...PULSE_LOCALES], ['en', 'tr', 'de', 'ja', 'ko', 'zh-Hans', 'zh-Hant'])
    assert.equal(PULSE_LOCALES.length, EXPECTED_LOCALE_COUNT)
  })

  it('keeps no RTL locales in the supported set', () => {
    assert.equal(PULSE_RTL_LOCALES.size, 0)
    assert.equal(PULSE_LOCALE_CONFIG.en.dir, 'ltr')
  })

  it('keeps English unprefixed and other locales prefixed', () => {
    assert.equal(getPulseAppPath('en'), '/pomodoro-work-study-timer')
    assert.equal(getPulseAppPath('tr', 'support'), '/tr/pomodoro-work-study-timer/support')
    assert.equal(getPulseAppPath('de', 'privacy'), '/de/pomodoro-work-study-timer/privacy')
    assert.equal(getPulseAppPath('ja', 'support'), '/ja/pomodoro-work-study-timer/support')
    assert.equal(getPulseAppPath('ko'), '/ko/pomodoro-work-study-timer')
    assert.equal(getPulseAppPath('zh-Hans'), '/zh-Hans/pomodoro-work-study-timer')
    assert.equal(getPulseAppPath('zh-Hant', 'privacy'), '/zh-Hant/pomodoro-work-study-timer/privacy')
  })

  it(`resolves all ${EXPECTED_ROUTE_COUNT} page/locale route combinations`, () => {
    const paths = new Set<string>()

    for (const locale of PULSE_LOCALES) {
      for (const suffix of PAGES) {
        const path = getPulseAppPath(locale, suffix)
        assert.ok(path.includes('pomodoro-work-study-timer'))
        assert.equal(paths.has(path), false, `duplicate path: ${path}`)
        paths.add(path)
      }
    }

    assert.equal(paths.size, EXPECTED_ROUTE_COUNT)
  })

  it('builds hreflang alternates for every locale plus x-default', () => {
    for (const suffix of PAGES) {
      const alternates = getPulseLanguageAlternates(suffix)
      assert.equal(alternates['x-default'], `${SITE_URL}${getPulseAppPath('en', suffix)}`)
      assert.equal(alternates['en-GB'], `${SITE_URL}${getPulseAppPath('en', suffix)}`)

      for (const locale of PULSE_LOCALES) {
        const tag = PULSE_LOCALE_CONFIG[locale].languageTag
        assert.equal(alternates[tag], `${SITE_URL}${getPulseAppPath(locale, suffix)}`)
      }

      assert.equal(Object.keys(alternates).includes('fr-FR'), false)
      assert.equal(Object.keys(alternates).includes('ar'), false)
    }
  })

  it('falls back screenshot assets to English when locale-specific images are missing', () => {
    assert.equal(getPulseImageDir('en'), '/images/pulse-pomodoro')
    assert.equal(getPulseImageDir('tr'), '/images/pulse-pomodoro/tr')
    assert.equal(getPulseImageDir('ja'), '/images/pulse-pomodoro')
    assert.equal(getPulseImageDir('de'), '/images/pulse-pomodoro')
    assert.equal(getPulseImageDir('ko'), '/images/pulse-pomodoro')
  })

  it('normalizes and negotiates locales with graceful English fallback', () => {
    assert.equal(isPulseLocale('ja'), true)
    assert.equal(isPulseLocale('zh-Hant'), true)
    assert.equal(isPulseLocale('fr'), false)
    assert.equal(isPulseLocale('ar'), false)
    assert.equal(isPulseRetiredLocale('fr'), true)
    assert.equal(isPulseRetiredLocale('tr'), false)
    assert.ok(PULSE_RETIRED_LOCALES.includes('fr'))
    assert.equal(normalizePulseLocale('en-GB'), 'en')
    assert.equal(normalizePulseLocale('en-US'), 'en')
    assert.equal(normalizePulseLocale('zh-CN'), 'zh-Hans')
    assert.equal(normalizePulseLocale('zh-TW'), 'zh-Hant')
    assert.equal(normalizePulseLocale('zh-HK'), 'zh-Hant')
    assert.equal(normalizePulseLocale('de-DE'), 'de')
    assert.equal(normalizePulseLocale('tr-TR'), 'tr')
    assert.equal(normalizePulseLocale('ja-JP'), 'ja')
    assert.equal(normalizePulseLocale('ko-KR'), 'ko')
    assert.equal(normalizePulseLocale('fr'), null)
    assert.equal(normalizePulseLocale('pt-BR'), null)
    assert.equal(normalizePulseLocale('xx'), null)
    assert.equal(negotiatePulseLocale('de-DE,de;q=0.9,en;q=0.8'), 'de')
    assert.equal(negotiatePulseLocale('fr-FR,fr;q=0.9,en;q=0.8'), 'en')
    assert.equal(negotiatePulseLocale('ja-JP,ja;q=0.9'), 'ja')
    assert.equal(negotiatePulseLocale('xx-YY'), 'en')
    assert.equal(negotiatePulseLocale(null), 'en')
  })
})

describe('Pulse message catalogs', () => {
  it(`provides complete catalogs for all ${EXPECTED_LOCALE_COUNT} locales and three pages`, () => {
    for (const locale of PULSE_LOCALES) {
      assertPulseMessagesComplete(locale)
      const messages = getPulseMessages(locale)

      assert.ok(messages.languageLabel.length > 0)
      assert.ok(messages.landing.metaTitle.length > 0)
      assert.ok(messages.landing.availabilityLine.length > 0)
      assert.ok(messages.support.metaTitle.length > 0)
      assert.ok(messages.privacy.metaTitle.length > 0)
      assert.equal(messages.landing.featureShowcases.length, 3)
      assert.equal(messages.landing.native.features.length, 4)
      assert.equal(messages.landing.history.items.length, 5)
      assert.match(messages.landing.stats.languagesValue, /7/)
      assert.ok(messages.privacy.lastUpdated.length > 0)
      assert.ok(messages.privacy.summary.body.length > 0)
      assert.ok(messages.privacy.localData.migrationSafety.length > 0)
      assert.ok(messages.privacy.accountAndSync.items.length >= 3)
      assert.ok(messages.privacy.retention.items.length >= 5)
      assert.ok(messages.privacy.analytics.introBeforeLink.length > 0)
      assert.ok(messages.privacy.analytics.introAfterLink.length > 0)
      assert.equal(messages.privacy.whatWeDoNotDo.items.length, 4)
      assert.ok(messages.privacy.processors.bodyBeforeSupabase.length > 0)
      assert.ok(messages.privacy.processors.bodyAfterSupabase.length > 0)
      assert.ok(messages.privacy.processors.orWord.length > 0)
      assert.ok(messages.privacy.processors.bodyAfterProviders.length > 0)
      assert.ok(messages.privacy.processors.bodyAfterRevenueCat.length > 0)
      assert.ok(messages.privacy.purchases.title.length > 0)
      assert.ok(messages.privacy.purchases.bodyBeforeRevenueCat.length > 0)
      assert.ok(messages.privacy.purchases.bodyAfterRevenueCat.length > 0)
      assert.ok(messages.privacy.focusProtection.title.length > 0)
      assert.ok(messages.privacy.focusProtection.body.length > 0)
      assert.ok(messages.privacy.privacyRights.title.length > 0)
      assert.ok(messages.privacy.privacyRights.intro.length > 0)
      assert.ok(messages.privacy.privacyRights.items.length >= 5)
      assert.ok(messages.privacy.privacyRights.closing.length > 0)

      for (const sectionKey of SUPPORT_SECTIONS) {
        const section = messages.support[sectionKey]
        assert.ok(section.title.length > 0, `${locale} support.${sectionKey}.title`)
        assert.ok(section.items.length >= 3, `${locale} support.${sectionKey}.items`)
        for (const item of section.items) {
          assert.ok(item.question.length > 0)
          assert.ok(item.answer.length > 0)
        }
      }

      assert.equal(messages.support.gettingStarted.items.length, 6)
      assert.equal(messages.support.notifications.items.length, 3)
      assert.equal(messages.support.pomodoroPro.items.length, 6)
      assert.ok(messages.support.privacyPolicyLink.length > 0)
    }
  })

  it('keeps account, sync, TelemetryDeck, Pro purchase, Limited Annual, trial, and deletion disclosures', () => {
    for (const locale of PULSE_LOCALES) {
      const privacy = getPulseMessages(locale).privacy
      const support = getPulseMessages(locale).support
      assert.match(privacy.analytics.identifier, /TelemetryDeck/)
      assert.match(privacy.summary.body, /Apple|Google|Supabase|TelemetryDeck|RevenueCat/i)
      assert.match(privacy.summary.body, /RevenueCat|Focus Protection|Pomodoro Pro/i)
      assert.match(privacy.summary.body, /Limited Annual|Limited-Annual|期間限定|한정|限时|限時/i)
      assert.match(privacy.purchases.bodyBeforeRevenueCat, /Limited Annual|Limited-Annual|期間限定|한정|限时|限時|trial|deneme|Testversion|トライアル|체험|试用|試用/i)
      assert.ok(privacy.contact.body.length > 0)
      assert.ok(privacy.children.body.length > 0)
      assert.ok(privacy.export.body.length > 0)
      assert.match(privacy.privacyRights.title, /GDPR|KVKK|DSGVO|개인정보|隐私|隱私|プライバシー|Gizlilik|Datenschutz/i)
      assert.match(privacy.focusProtection.body, /Screen Time|Bildschirmzeit|スクリーンタイム|스크린 타임|屏幕使用时间|螢幕使用時間|Ekran Süresi/i)
      assert.ok(support.pomodoroPro.items.length >= 5, `missing Pomodoro Pro FAQ in ${locale}`)
      assert.ok(support.purchases.items.length >= 3, `missing purchases FAQ in ${locale}`)
      assert.ok(support.focusProtection.items.length >= 3, `missing Focus Protection FAQ in ${locale}`)
      assert.ok(
        support.pomodoroPro.items.some((item) =>
          /Limited Annual|Limited-Annual|期間限定年間|한정 연간|限时年|限時年|Sınırlı Yıllık/i.test(
            `${item.question} ${item.answer}`
          )
        ),
        `missing Limited Annual guidance in ${locale}`
      )
      assert.ok(
        support.pomodoroPro.items.some((item) =>
          /free trial|ücretsiz deneme|kostenlose Testphase|kostenlose Testversion|無料トライアル|무료 체험|免费试用|免費試用/i.test(
            `${item.question} ${item.answer}`
          )
        ),
        `missing free trial guidance in ${locale}`
      )
      assert.ok(
        support.accountPrivacy.items.some((item) => {
          const text = `${item.question} ${item.answer}`
          return /Delete account|Hesabı sil|Konto löschen|アカウントを削除|계정 삭제|删除账户|删除帐户|刪除帳戶|刪除帳號/i.test(
            text
          )
        }),
        `missing deletion guidance in ${locale}`
      )
    }
  })

  it('does not leave obvious untranslated English placeholders in non-English catalogs', () => {
    const englishLandingTitle = getPulseMessages('en').landing.metaTitle
    const englishPrivacySummary = getPulseMessages('en').privacy.summary.body

    for (const locale of PULSE_LOCALES) {
      if (locale === 'en') {
        continue
      }

      const title = getPulseMessages(locale).landing.metaTitle
      assert.notEqual(title, englishLandingTitle, `landing title still English for ${locale}`)
      assert.notEqual(
        getPulseMessages(locale).privacy.summary.body,
        englishPrivacySummary,
        `privacy summary still English for ${locale}`
      )
    }
  })

  it('avoids outdated local-only and 48-language claims', () => {
    for (const locale of PULSE_LOCALES) {
      const landing = getPulseMessages(locale).landing
      const privacy = getPulseMessages(locale).privacy
      const support = getPulseMessages(locale).support
      const banned =
        /No sign-in|No cloud sync|No accounts(?![\s\S]*sync)|Keine Anmeldung|Pas de synchronisation cloud|无云同步|クラウド同期なし|サインイン不要|48 languages|48 dil|48 Sprachen|48言語|48개 언어|48 种语言|48 種語言/i

      for (const item of landing.privacy.items) {
        assert.equal(banned.test(item), false, `outdated landing privacy claim in ${locale}: ${item}`)
      }
      assert.equal(banned.test(landing.privacy.description), false, `outdated landing privacy copy in ${locale}`)
      assert.equal(banned.test(landing.stats.languagesValue), false, `outdated language count in ${locale}`)
      assert.equal(banned.test(landing.demo.caption), false, `outdated demo caption in ${locale}`)
      assert.equal(
        /No account or sign-in|does not require an account|Kein Konto oder|Aucun compte/i.test(privacy.summary.body),
        false,
        `outdated privacy summary in ${locale}`
      )
      assert.ok(
        privacy.whatWeDoNotDo.items.every((item) => !/No account or sign-in|Kein Konto oder|Aucun compte/i.test(item))
      )
      assert.equal(
        /Motivation reminders|Motivasyon hatırlat|Motivationserinnerungen|モチベーション通知|동기 부여 알림|激励提醒|激勵提醒/i.test(
          JSON.stringify(support.notifications)
        ),
        false,
        `outdated motivation reminder copy in ${locale}`
      )
    }
  })
})
