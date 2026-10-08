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
      assert.ok(messages.landing.metaTitle.includes('Pomodoro') || messages.landing.metaTitle.length > 0)
      assert.ok(messages.support.metaTitle.length > 0)
      assert.ok(messages.privacy.metaTitle.length > 0)
      assert.equal(messages.landing.featureShowcases.length, 3)
      assert.equal(messages.landing.native.features.length, 4)
      assert.equal(messages.landing.history.items.length, 4)
      assert.equal(messages.support.gettingStarted.steps.length, 3)
      assert.ok(messages.privacy.lastUpdated.length > 0)
      assert.ok(messages.privacy.summary.body.length > 0)
      assert.ok(messages.privacy.analytics.introBeforeLink.length > 0)
      assert.ok(messages.privacy.analytics.introAfterLink.length > 0)
      assert.equal(messages.privacy.whatWeDoNotDo.items.length, 4)
    }
  })

  it('keeps privacy contact and TelemetryDeck disclosures present in every locale', () => {
    for (const locale of PULSE_LOCALES) {
      const privacy = getPulseMessages(locale).privacy
      assert.match(privacy.analytics.identifier, /TelemetryDeck/)
      assert.ok(privacy.contact.body.length > 0)
      assert.ok(privacy.children.body.length > 0)
    }
  })

  it('does not leave obvious untranslated English placeholders in non-English catalogs', () => {
    const englishLandingTitle = getPulseMessages('en').landing.metaTitle

    for (const locale of PULSE_LOCALES) {
      if (locale === 'en') {
        continue
      }

      const title = getPulseMessages(locale).landing.metaTitle
      assert.notEqual(title, englishLandingTitle, `landing title still English for ${locale}`)
    }
  })
})
