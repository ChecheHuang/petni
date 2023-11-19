'use client'

import { useNavigateModal } from '../_hooks/useNavigateModal'
import { Modal } from '@/components/modals/modal'
import { Button } from '@/components/ui/button'
import { usePathname, useRouter } from 'next/navigation'

export default function NavigateModal() {
  const { isOpen, onClose, petId } = useNavigateModal()
  const pathname = usePathname()
  const router = useRouter()

  const lookAllPath = '/deliver'
  const editPath = `/deliver/${petId}`
  const detailsPath = `/deliver/${petId}/details`

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      description="接下來去哪裡呢 ？♥◡♥"
      footer={
        <div className="flex gap-2">
          {pathname !== lookAllPath && (
            <Button
              onClick={() => {
                router.push(lookAllPath)
                onClose()
              }}
              variant="ghost"
            >
              查看全部
            </Button>
          )}
          {pathname !== editPath && (
            <Button
              onClick={() => {
                router.push(editPath)
                onClose()
              }}
            >
              編輯
            </Button>
          )}
          {pathname !== detailsPath && (
            <Button
              onClick={() => {
                router.push(detailsPath)
                onClose()
              }}
              variant="info"
            >
              查看詳情
            </Button>
          )}
        </div>
      }
    />
  )
}
