'use client'

import Loading from '../loading'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
} from '@/components/ui/dialog'
import { useEffect, useState } from 'react'

interface ModalProps {
  isOpen: boolean
  description: string
  footer: React.ReactNode
  onClose?: () => void
  isLoading?: boolean
}

export const Modal: React.FC<ModalProps> = ({
  description,
  isOpen,
  footer,
  onClose,
  isLoading,
}) => {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return null
  }
  const onChange = (open: boolean) => {
    if (!open && onClose) {
      onClose()
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={onChange}>
      <DialogContent className=" flex h-[156px] w-[472px] flex-col items-center  ">
        {isLoading && <Loading className="absolute w-full" />}
        <DialogDescription className="mt-[39px]">
          {description}
        </DialogDescription>
        <DialogFooter className="mt-[18px]">{footer}</DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
