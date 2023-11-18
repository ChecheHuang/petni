import AuthForm from '@/app/(root)/sign-in/_components/AuthForm'
import { Dialog, DialogContent } from '@/components/ui/dialog'

export default function AuthModal() {
  return (
    <Dialog open={true}>
      <DialogContent className="sm:max-w-[425px]">
        <AuthForm />
      </DialogContent>
    </Dialog>
  )
}
