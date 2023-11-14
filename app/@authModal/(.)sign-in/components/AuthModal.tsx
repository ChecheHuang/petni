import AuthForm from '@/app/(root)/sign-in/components/AuthForm'
import { Dialog, DialogContent } from '@/components/ui/dialog'

export default function AuthModal() {
  return (
    <Dialog open={true}>
      <DialogContent isXShow={false} className="sm:max-w-[425px]">
        <AuthForm />
      </DialogContent>
    </Dialog>
  )
}
