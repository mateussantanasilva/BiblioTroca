import { Card } from '@/components/Card'
import { PublicHeader } from '@/components/PublicHeader'

export default function Books() {
  return (
    <div className="flex flex-col mx-auto max-w-[375px]">
      <PublicHeader />

      <Card type="content" className="text-gray-500">
        <h2 className="text-title-lg font-secondary mb-3">
          Explore Livros Disponíveis
        </h2>
        <p className="text-lg-140 mb-10">
          Encontre e inicie uma jornada de trocas para expandir sua biblioteca e
          compartilhar conhecimento.
        </p>
      </Card>
    </div>
  )
}
