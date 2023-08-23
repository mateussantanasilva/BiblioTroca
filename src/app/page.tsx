import { Popover } from '@/components/Popover'

export default function Home() {
  return (
    <main className="flex flex-col gap-5 items-center justify-center h-screen w-screen">
      <h1 className="font-secondary text-title-xl">Hello, BiblioTroca!</h1>
      <Popover />
    </main>
  )
}
