import prismadb from '@/lib/prismadb'

export const getThemes = async () => {
  const theme = await prismadb.theme.findMany()

  const map = {} as any
  const result = theme.reduce((acc, pet) => {
    if (!map[pet.category]) {
    }
    return acc
  }, {} as any)

  console.log(result)
  return theme
}

export type GetThemesReturnType = GetAsyncFnReturnType<typeof getThemes>
