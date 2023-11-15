'use client'

import DeliverCard from './DeliverCard'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Progress } from '@/components/ui/progress'
import { useUploadThing } from '@/lib/uploadthing'
import { Cloud, File, Loader2 } from 'lucide-react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import Dropzone from 'react-dropzone'
import { toast } from 'sonner'

function DeliverPage() {
  const router = useRouter()

  const [isUploading, setIsUploading] = useState<boolean>(false)
  const [uploadProgress, setUploadProgress] = useState<number>(0)
  const { startUpload } = useUploadThing('image')
  const startSimulatedProgress = () => {
    setUploadProgress(0)
    const interval = setInterval(() => {
      setUploadProgress((prevProgress) => {
        if (prevProgress >= 95) {
          clearInterval(interval)
          return prevProgress
        }
        return prevProgress + 5
      })
    }, 500)
    return interval
  }

  const onDrop = async (acceptedFile: File[]) => {
    // setIsUploading(true)

    // const progressInterval = startSimulatedProgress()

    const res = await startUpload(acceptedFile)
    console.log(res)
    if (!res) return toast.error('上傳失敗')
    const [fileResponse] = res
    const imageUrl = fileResponse.url
    // clearInterval(progressInterval)
    // setUploadProgress(100)
  }

  return (
    <div className="px-[87px] pt-[30px]  ">
      <Dialog>
        <DialogTrigger>
          <DeliverCard className="cursor-pointer gap-2.5">
            <Image
              src={'/images/deliver/Vector.png'}
              alt="deliver"
              width={56}
              height={56}
            />
            <div className="text-sm text-info">上傳寵物照片</div>
          </DeliverCard>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>上傳寵物照片</DialogTitle>
            <DialogDescription>
              <Dropzone multiple={false} onDrop={onDrop}>
                {({ getRootProps, getInputProps, acceptedFiles }) => (
                  <section>
                    <div
                      {...getRootProps()}
                      className="m-4 h-64 rounded-lg border border-dashed border-gray-300"
                    >
                      <div className="flex h-full w-full items-center justify-center">
                        <label
                          // htmlFor="dropzone-file"
                          className="flex h-full w-full cursor-pointer flex-col items-center justify-center rounded-lg bg-gray-50 hover:bg-gray-100"
                        >
                          <div className="flex flex-col items-center justify-center pb-6 pt-5">
                            <Cloud className="mb-2 h-6 w-6 text-zinc-500" />
                          </div>
                          {acceptedFiles && acceptedFiles[0] ? (
                            <div className="flex max-w-xs items-center divide-x divide-zinc-200 overflow-hidden rounded-md bg-white outline outline-[1px] outline-zinc-200">
                              <div className="grid h-full place-items-center px-3 py-2">
                                <File className="h-4 w-4 text-blue-500" />
                              </div>
                              <div className="h-full truncate px-3 py-2 text-sm">
                                {acceptedFiles[0].name}
                              </div>
                            </div>
                          ) : null}
                          {isUploading ? (
                            <div className="mx-auto mt-4 w-full max-w-xs">
                              <Progress
                                indicatorColor={
                                  uploadProgress === 100 ? 'bg-green-500' : ''
                                }
                                value={uploadProgress}
                                className="h-1 w-full bg-zinc-200"
                              />
                              {uploadProgress === 100 ? (
                                <div className="flex items-center justify-center gap-1 pt-2 text-center text-sm text-zinc-700">
                                  <Loader2 className="h-3 w-3 animate-spin" />
                                  Redirecting...
                                </div>
                              ) : null}
                            </div>
                          ) : null}
                        </label>
                        <input
                          {...getInputProps()}
                          type="file"
                          id="dropzone-file"
                          className="hidden"
                        />
                      </div>
                    </div>
                  </section>
                )}
              </Dropzone>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default DeliverPage
