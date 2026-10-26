import assert from 'node:assert/strict'
import { describe, it } from 'node:test'
import { SITE_URL } from '../constants'
import {
  getPulseAppPath,
  getPulseImageDir,
  getPulseLanguageAlternates,
  isPulseLocale,
  negotiatePulseLocale,
  normalizePulseLocale,
  PULSE_LOCALES,
  PULSE_LOCALE_CONFIG,
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

describe('Pulse locales', () => {
  it('supports exactly 12 locales', () => {
    assert.equal(PULSE_LOCALES.length, 12)
  })

  it('keeps English unprefixed and other locales prefixed', () => {
    assert.equal(getPulseAppPath('en'), '/pomodoro-work-study-timer')
    assert.equal(getPulseAppPath('tr', 'support'), '/tr/pomodoro-work-study-timer/support')
    assert.equal(getPulseAppPath('pt-BR', 'privacy'), '/pt-BR/pomodoro-work-study-timer/privacy')
    assert.equal(getPulseAppPath('zh-Hans'), '/zh-Hans/pomodoro-work-study-timer')
  })

  it('resolves all 36 page/locale route combinations', () => {
    const paths = new Set<string>()

    for (const locale of PULSE_LOCALES) {
      for (const suffix of PAGES) {
        const path = getPulseAppPath(locale, suffix)
        assert.ok(path.includes('pomodoro-work-study-timer'))
        assert.equal(paths.has(path), false, `duplicate path: ${path}`)
        paths.add(path)
      }
    }

    assert.equal(paths.size, 36)
  })

  it('builds hreflang alternates for every locale plus x-default', () => {
    for (const suffix of PAGES) {
      const alternates = getPulseLanguageAlternates(suffix)
      assert.equal(alternates['x-default'], `${SITE_URL}${getPulseAppPath('en', suffix)}`)

      for (const locale of PULSE_LOCALES) {
        const tag = PULSE_LOCALE_CONFIG[locale].languageTag
        assert.equal(alternates[tag], `${SITE_URL}${getPulseAppPath(locale, suffix)}`)
      }
    }
  })

  it('falls back screenshot assets to English when locale-specific images are missing', () => {
    assert.equal(getPulseImageDir('en'), '/images/pulse-pomodoro')
    assert.equal(getPulseImageDir('tr'), '/images/pulse-pomodoro/tr')
    assert.equal(getPulseImageDir('ja'), '/images/pulse-pomodoro')
    assert.equal(getPulseImageDir('de'), '/images/pulse-pomodoro')
  })

  it('normalizes and negotiates locales with graceful fallbacks', () => {
    assert.equal(isPulseLocale('ja'), true)
    assert.equal(isPulseLocale('nope'), false)
    assert.equal(normalizePulseLocale('zh-CN'), 'zh-Hans')
    assert.equal(normalizePulseLocale('pt'), 'pt-BR')
    assert.equal(normalizePulseLocale('es-MX'), 'es')
    assert.equal(normalizePulseLocale('xx'), null)
    assert.equal(negotiatePulseLocale('fr-FR,fr;q=0.9,en;q=0.8'), 'fr')
    assert.equal(negotiatePulseLocale('xx-YY'), 'en')
    assert.equal(negotiatePulseLocale(null), 'en')
  })
})

describe('Pulse message catalogs', () => {
  it('provides complete catalogs for all 12 locales and three pages', () => {
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
      assert.ok(messages.privacy.lastUpdated.length > 0)
      assert.ok(messages.privacy.summary.body.length > 0)
      assert.ok(messages.privacy.localData.migrationSafety.length > 0)
      assert.ok(messages.privacy.accountAndSync.items.length >= 3)
      assert.ok(messages.privacy.retention.items.length >= 4)
      assert.ok(messages.privacy.analytics.introBeforeLink.length > 0)
      assert.ok(messages.privacy.analytics.introAfterLink.length > 0)
      assert.equal(messages.privacy.whatWeDoNotDo.items.length, 3)
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
      assert.ok(messages.privacy.retention.items.length >= 5)

      for (const sectionKey of SUPPORT_SECTIONS) {
        const section = messages.support[sectionKey]
        assert.ok(section.title.length > 0, `${locale} support.${sectionKey}.title`)
        assert.ok(section.items.length >= 3, `${locale} support.${sectionKey}.items`)
        for (const item of section.items) {
          assert.ok(item.question.length > 0)
          assert.ok(item.answer.length > 0)
        }
      }

      assert.ok(messages.support.privacyPolicyLink.length > 0)
    }
  })

  it('keeps account, sync, TelemetryDeck, Pro purchase, and deletion disclosures in every locale', () => {
    for (const locale of PULSE_LOCALES) {
      const privacy = getPulseMessages(locale).privacy
      const support = getPulseMessages(locale).support
      assert.match(privacy.analytics.identifier, /TelemetryDeck/)
      assert.match(privacy.summary.body, /Apple|Google|Supabase|TelemetryDeck|RevenueCat|Apple|Google/i)
      assert.match(privacy.summary.body, /RevenueCat|Focus Protection|Focus Protection|Pomodoro Pro/i)
      assert.ok(privacy.contact.body.length > 0)
      assert.ok(privacy.children.body.length > 0)
      assert.ok(privacy.export.body.length > 0)
      assert.match(privacy.purchases.bodyAfterRevenueCat, /RevenueCat|Pro/)
      assert.ok(
        support.pomodoroPro.items.length >= 3,
        `missing Pomodoro Pro FAQ in ${locale}`
      )
      assert.ok(
        support.purchases.items.length >= 3,
        `missing purchases FAQ in ${locale}`
      )
      assert.ok(
        support.focusProtection.items.length >= 3,
        `missing Focus Protection FAQ in ${locale}`
      )
      assert.ok(
        support.accountPrivacy.items.some((item) => {
          const text = `${item.question} ${item.answer}`
          return (
            /Delete account|Hesabı sil|Konto löschen|Eliminar cuenta|Excluir conta|Supprimer le compte|アカウントを削除|계정 삭제|删除账户|删除帐户|Xóa tài khoản|खाता हटा/i.test(
              text
            ) || /удал/i.test(text)
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

  it('avoids outdated local-only claims on landing and privacy pages', () => {
    for (const locale of PULSE_LOCALES) {
      const landing = getPulseMessages(locale).landing
      const privacy = getPulseMessages(locale).privacy
      const banned =
        /No sign-in|No cloud sync|No accounts(?![\s\S]*sync)|Keine Anmeldung|Pas de synchronisation cloud|无云同步|クラウド同期なし|サインイン不要/i

      for (const item of landing.privacy.items) {
        assert.equal(banned.test(item), false, `outdated landing privacy claim in ${locale}: ${item}`)
      }
      assert.equal(banned.test(landing.privacy.description), false, `outdated landing privacy copy in ${locale}`)
      assert.equal(
        /No account or sign-in|does not require an account|Kein Konto oder|Aucun compte/i.test(privacy.summary.body),
        false,
        `outdated privacy summary in ${locale}`
      )
      assert.ok(
        privacy.whatWeDoNotDo.items.every((item) => !/No account or sign-in|Kein Konto oder|Aucun compte/i.test(item))
      )
    }
  })
})
