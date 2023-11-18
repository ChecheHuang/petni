'use client'

import { useUpload } from '../../_hooks/useUpload'
import { FillImage } from '@/components/fill-image'
import Loading from '@/components/loading'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'
import trpcClient from '@/lib/trpc/trpcClient'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import Dropzone from 'react-dropzone'
import { toast } from 'sonner'

export default function ImageCard({
  petId,
  imageUrl: initValue,
  onSubmit,
}: {
  petId: string
  imageUrl: string
  onSubmit?: () => void
}) {
  const [imageUrl, setImageUrl] = useState<string>(initValue)
  const [uploadFile, setUploadFile] = useState<File[]>()
  const router = useRouter()
  const { onUploading, isUploading, uploadProgress } = useUpload()

  const onDrop = async (acceptedFile: File[]) => {
    const [file] = acceptedFile
    const reader = new FileReader()
    reader.onload = function () {
      setImageUrl(reader.result as string)
      setUploadFile(acceptedFile)
    }
    const blob = new Blob([file], { type: file.type })
    reader.readAsDataURL(blob)
    return
  }
  const { mutateAsync: updatePet, isLoading: isUpdatePet } =
    trpcClient.pet.updatePet.useMutation({
      onSuccess: () => {
        toast.success('更新成功')
        router.refresh()
        onSubmit && onSubmit()
      },
    })

  const handleUploadFile = async () => {
    if (uploadFile) {
      try {
        const imageUrl = await onUploading(uploadFile)
        await updatePet({ petId, imageUrl })
      } catch (error: unknown) {
        toast.error(JSON.stringify(error))
      }
    }
  }
  return (
    <Card className="flex h-[356.47px] w-[237.7px] flex-col gap-2.5 rounded-[28px] p-4 ">
      <Dropzone multiple={false} onDrop={onDrop}>
        {({ getRootProps, getInputProps, acceptedFiles }) => (
          <section>
            <label
              {...getRootProps()}
              className="relative flex h-[264.47px] w-[205.19px] cursor-pointer items-center justify-center "
            >
              <FillImage className="rounded-[28px] " src={imageUrl} />
              <Loading
                isLoading={isUpdatePet || isUploading}
                className="absolute  h-full w-full "
              />
              {isUploading && (
                <Progress
                  indicatorColor={
                    uploadProgress === 100 ? 'bg-green-500' : 'bg-info'
                  }
                  value={uploadProgress}
                  className="absolute bottom-1 h-1 w-full bg-zinc-200"
                />
              )}
            </label>
            <input {...getInputProps()} className="hidden" type="file" />
          </section>
        )}
      </Dropzone>

      <Button
        disabled={isUpdatePet || isUploading || !uploadFile}
        onClick={handleUploadFile}
        variant="info"
      >
        替換照片
      </Button>
    </Card>
  )
}
