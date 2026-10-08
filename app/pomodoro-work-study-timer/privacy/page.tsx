import { PulsePrivacyPage } from '../../../components/pulse/PulsePrivacyPage'
import { createPulsePrivacyMetadata } from '../../../lib/pulse/metadata'

export const metadata = createPulsePrivacyMetadata('en')

export default function PulsePomodoroPrivacyPage() {
  return <PulsePrivacyPage locale='en' />
}
