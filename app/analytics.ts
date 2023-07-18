import ReactGA from 'react-ga'

export const initGA = () => {
  const trackingCode = process.env.GA_TRACKING_ID
  if (trackingCode) {
    ReactGA.initialize(trackingCode)
  }
}

export const logPageView = () => {
  ReactGA.set({ page: window.location.pathname })
  ReactGA.pageview(window.location.pathname)
}
