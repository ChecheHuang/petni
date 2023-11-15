import { getUserAuth } from '@/app/api/auth/[...nextauth]/authOptions'
import prismadb from '@/lib/prismadb'
import { createUploadthing, type FileRouter } from 'uploadthing/next'

const f = createUploadthing()

const middleware = async () => {
  const session = await getUserAuth()

  if (!session || !session.user.id) throw new Error('Unauthorized')
  return { userId: session.user.id }
}

const onUploadComplete = async ({
  metadata,
  file,
}: {
  metadata: Awaited<ReturnType<typeof middleware>>
  file: {
    key: string
    name: string
    url: string
  }
}) => {
  await prismadb.animal.create({
    data: {
      userId: metadata.userId,
      name: file.name,
      imageUrl: file.url,
    },
  })
}

export const ourFileRouter = {
  image: f({ image: { maxFileSize: '4MB', maxFileCount: 1 } })
    .middleware(middleware)
    .onUploadComplete(onUploadComplete),
} satisfies FileRouter

export type OurFileRouter = typeof ourFileRouter
