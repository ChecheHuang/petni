import { create } from 'zustand'

interface useNavigateModalStore {
  isOpen: boolean
  petId: string
  onOpen: (petId: string) => void
  onClose: () => void
}

export const useNavigateModal = create<useNavigateModalStore>((set) => ({
  isOpen: false,
  petId: '',
  onOpen: (petId: string) => set({ isOpen: true, petId }),
  onClose: () => set({ isOpen: false, petId: '' }),
}))
