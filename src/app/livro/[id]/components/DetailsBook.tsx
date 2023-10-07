import { BookCompleteData } from '@/@types/bookCompleteData'
import { motion } from 'framer-motion'
import { Card } from '@/components/Card'

interface DetailsBookProps {
  book: BookCompleteData
}

export function DetailsBook({ book }: DetailsBookProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ type: 'spring', stiffness: 50 }}
    >
      <Card
        componentType="section"
        type="content"
        className="text-gray-500 dark:bg-black dark:text-white dark:shadow-solid-white"
      >
        <header className="mb-3">
          <h2 className="font-secondary text-title-lg">{book?.name}</h2>
          <p className="text-base-140 text-gray-400 dark:text-white">
            por {book?.author}
          </p>
        </header>

        <ul className="flex flex-col gap-5">
          <li className="flex flex-col gap-1">
            <strong className="text-base-140">Categoria</strong>
            <span
              aria-label="categoria"
              className="w-fit rounded-xl border-[1px] border-primary-500 px-3 py-1 text-xs-140 text-primary-500 dark:border-white dark:text-white"
            >
              {book?.category}
            </span>
          </li>

          <li className="flex gap-20">
            <div className="flex flex-col gap-1">
              <strong className="text-base-140">Idioma</strong>
              <p className="text-base-140">{book?.language}</p>
            </div>

            <div className="flex flex-col gap-1">
              <strong className="text-base-140">Ano</strong>
              <p className="text-base-140">{book?.year}</p>
            </div>
          </li>

          <li className="flex flex-col gap-1">
            <strong className="text-base-140">Editora</strong>
            <p className="text-base-140">{book?.publishingCompany}</p>
          </li>

          <li className="flex flex-col gap-1">
            <strong className="text-base-140">Condição do livro</strong>
            <p className="text-base-160">{book?.state}</p>
          </li>

          <li className="flex flex-col gap-1">
            <strong className="text-base-140">Descrição</strong>
            <p className="text-base-160">{book?.description}</p>
          </li>
        </ul>
      </Card>
    </motion.div>
  )
}
