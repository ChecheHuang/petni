import { create } from 'zustand'

interface useDeleteModalStore {
  isOpen: boolean
  petId: string
  onOpen: (petId: string) => void
  onClose: () => void
}

export const useDeleteModal = create<useDeleteModalStore>((set) => ({
  isOpen: false,
  petId: '',
  onOpen: (petId: string) => set({ isOpen: true, petId }),
  onClose: () => set({ isOpen: false, petId: '' }),
}))
