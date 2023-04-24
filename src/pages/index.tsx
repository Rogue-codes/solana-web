import Adoption from '@/components/landing/Adoption'
import Build from '@/components/landing/Build'
import Community from '@/components/landing/Community'
import Join from '@/components/landing/Join'
import Welcome from '@/components/landing/Welcome'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between mt-24 px-5 lg:p-24">
      <Welcome/>
      <Join/>
      <Adoption/>
      <Build/>
      <Community/>
    </main>
  )
}
