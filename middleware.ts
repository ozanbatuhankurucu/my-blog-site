import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { PULSE_APP_PATH } from './lib/constants'
import {
  getPulseAppPath,
  isPulseLocale,
  negotiatePulseLocale,
  normalizePulseLocale,
  PULSE_LOCALE_COOKIE,
  type PulseLocale,
} from './lib/pulse/locales'

const BOT_RE =
  /bot|crawl|slurp|spider|facebookexternalhit|linkedinbot|twitterbot|whatsapp|telegram|preview|bingpreview|yandex|baidu|duckduck|semrush|ahrefs|mj12|dotbot|applebot/i

function withLocaleCookie(response: NextResponse, locale: PulseLocale) {
  response.cookies.set(PULSE_LOCALE_COOKIE, locale, {
    path: '/',
    maxAge: 60 * 60 * 24 * 365,
    sameSite: 'lax',
  })
  return response
}

function isLikelyBot(request: NextRequest): boolean {
  const userAgent = request.headers.get('user-agent') ?? ''
  return BOT_RE.test(userAgent)
}

function parsePulsePath(pathname: string): { locale: PulseLocale; pathSuffix: '' | 'support' | 'privacy' } | null {
  if (pathname === PULSE_APP_PATH || pathname === `${PULSE_APP_PATH}/`) {
    return { locale: 'en', pathSuffix: '' }
  }

  if (pathname === `${PULSE_APP_PATH}/support` || pathname === `${PULSE_APP_PATH}/support/`) {
    return { locale: 'en', pathSuffix: 'support' }
  }

  if (pathname === `${PULSE_APP_PATH}/privacy` || pathname === `${PULSE_APP_PATH}/privacy/`) {
    return { locale: 'en', pathSuffix: 'privacy' }
  }

  const localized = pathname.match(
    /^\/([^/]+)\/pomodoro-work-study-timer(?:\/(support|privacy))?\/?$/
  )

  if (!localized) {
    return null
  }

  const localeCandidate = decodeURIComponent(localized[1])
  if (!isPulseLocale(localeCandidate) || localeCandidate === 'en') {
    return null
  }

  return {
    locale: localeCandidate,
    pathSuffix: (localized[2] ?? '') as '' | 'support' | 'privacy',
  }
}

export function middleware(request: NextRequest) {
  const parsed = parsePulsePath(request.nextUrl.pathname)
  if (!parsed) {
    return NextResponse.next()
  }

  // Visiting a localized URL explicitly should persist that preference.
  if (parsed.locale !== 'en') {
    if (isLikelyBot(request)) {
      return NextResponse.next()
    }
    return withLocaleCookie(NextResponse.next(), parsed.locale)
  }

  // English unprefixed URLs: optional redirect for returning visitors / first-time negotiation.
  if (isLikelyBot(request)) {
    return NextResponse.next()
  }

  const cookieLocale = normalizePulseLocale(request.cookies.get(PULSE_LOCALE_COOKIE)?.value)

  if (cookieLocale === 'en') {
    return NextResponse.next()
  }

  if (cookieLocale) {
    const url = request.nextUrl.clone()
    url.pathname = getPulseAppPath(cookieLocale, parsed.pathSuffix)
    return NextResponse.redirect(url)
  }

  const preferredLocale = negotiatePulseLocale(request.headers.get('accept-language'))
  if (preferredLocale === 'en') {
    return withLocaleCookie(NextResponse.next(), 'en')
  }

  const url = request.nextUrl.clone()
  url.pathname = getPulseAppPath(preferredLocale, parsed.pathSuffix)
  return withLocaleCookie(NextResponse.redirect(url), preferredLocale)
}

export const config = {
  matcher: [
    '/pomodoro-work-study-timer',
    '/pomodoro-work-study-timer/:path*',
    '/:locale/pomodoro-work-study-timer',
    '/:locale/pomodoro-work-study-timer/:path*',
  ],
}
