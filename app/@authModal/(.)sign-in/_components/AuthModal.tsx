import AuthForm from '@/app/(root)/sign-in/_components/AuthForm'
import { Dialog, DialogContent } from '@/components/ui/dialog'

export default function AuthModal() {
  return (
    <Dialog open={true}>
      <DialogContent className="flex h-[240px] flex-col justify-center sm:max-w-[466px]">
        <AuthForm />
      </DialogContent>
    </Dialog>
  )
}
