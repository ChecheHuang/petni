'use client'

import { Button } from '@/components/ui/button'
import { signOut } from 'next-auth/react'

function DeliverPage() {
  return <Button onClick={() => signOut()}>DeliverPage</Button>
}

export default DeliverPage
