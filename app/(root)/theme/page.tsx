import ClientThemePage from './_components/ClientThemePage'
import { getThemes } from '@/actions/theme'

async function ThemePage() {
  const themes = await getThemes()

  return <ClientThemePage {...themes} />
}

export default ThemePage
