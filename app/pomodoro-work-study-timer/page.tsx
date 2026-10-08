import { PulseLandingPage } from '../../components/pulse/PulseLandingPage'
import { createPulseLandingMetadata } from '../../lib/pulse/metadata'

export const metadata = createPulseLandingMetadata('en')

export default function PulsePomodoroPage() {
  return <PulseLandingPage locale='en' />
}
