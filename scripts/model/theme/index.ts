import prismadb from '@/lib/prismadb'

export const seedTheme = async () => {
  const themes = [
    {
      category: '經典',
      furColor: '',
      imgUrl: '',
      description: '經典的貓咪造型，讓你的貓咪看起來更可愛！',
    },
  ]

  for (const theme of themes) {
    await prismadb.theme.create({
      data: theme,
    })
  }
}
