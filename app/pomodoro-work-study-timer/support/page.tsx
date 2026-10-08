import { PulseSupportPage } from '../../../components/pulse/PulseSupportPage'
import { createPulseSupportMetadata } from '../../../lib/pulse/metadata'

export const metadata = createPulseSupportMetadata('en')

export default function PulsePomodoroSupportPage() {
  return <PulseSupportPage locale='en' />
}
