import type { Metadata } from 'next'
import { IBM_Plex_Mono} from 'next/font/google'
import './globals.css'
import Sidebar from '@/components/Sidebar'


const ibm = IBM_Plex_Mono({ subsets: ['latin'], weight:['100','200','300'] })

export const metadata: Metadata = {
  title: 'Journall',
  description: 'Online Journal for you!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">

      <body className={`${ibm.className} flex`}>
        
      <main className='w-[128px]'>
  <Sidebar />
</main>

<div className='w-[calc(100vw-128px)]'>
  {children}
</div>
        
        </body>
    </html>
  )
}
