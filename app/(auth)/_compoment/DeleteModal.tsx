'use client'

import { useDeleteModal } from '../_hooks/useDeleteModal'
import Loading from '@/components/loading'
import { Modal } from '@/components/modals/modal'
import trpcClient from '@/lib/trpc/trpcClient'
import { useRouter } from 'next/navigation'
import { toast } from 'sonner'

export default function DeleteModal() {
  const { isOpen, onClose, petId } = useDeleteModal()
  const router = useRouter()

  const { mutate, isLoading } = trpcClient.pet.deletePet.useMutation({
    onSuccess: () => {
      toast.success('刪除成功')
      router.refresh()
      onClose()
    },
  })

  const onConfirm = () => {
    if (petId === '') return
    // onClose()
    mutate(petId)
  }

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      isLoading={isLoading}
      description="確定要刪除我嗎 ？ಥ_ಥ"
      footer={
        <>
          <button
            onClick={onClose}
            className="flex h-[42px] w-[117px] cursor-pointer items-center justify-center rounded hover:bg-info/10"
          >
            取消
          </button>
          <button
            disabled={isLoading}
            onClick={onConfirm}
            className="flex h-[42px] w-[117px] cursor-pointer items-center justify-center rounded text-info hover:bg-info/10"
          >
            確定
          </button>
        </>
      }
    />
  )
}
