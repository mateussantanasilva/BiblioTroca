import Link from 'next/link'
import * as Accordion from '@radix-ui/react-accordion'
import { Card } from '@/components/Card'
import { Button } from '@/components/Button'
import { CaretDown } from '@phosphor-icons/react'
import { questionsAndAnswers } from '@/constants/questionsAndAnswers'

export function FAQ() {
  return (
    <section className="max-w-[73rem] mx-auto px-6 py-9 text-gray-500 flex flex-col md:flex-row md:gap-5 md:justify-between">
      <div className="dark:text-white">
        <h2 className="text-title-lg font-secondary mb-3 text-center mx-auto md:text-left md:mx-0">
          Temos Respostas para Suas Perguntas
        </h2>
        <p className="text-base-160 mb-10 max-w-[30rem] text-center mx-auto md:text-left md:mx-0">
          Dê uma olhada nas questões mais frequentes sobre a Bibliotroca. Se não
          encontrar o que procura, não hesite em nos enviar sua dúvida.
        </p>

        <Button
          componentType={Link}
          size="md"
          href="https://wa.me/11912345678"
          target="_blank"
          className="mb-10 mx-auto md:mx-0"
        >
          Envie sua pergunta
        </Button>
      </div>

      <Card type="content" className="p-0 md:w-[40rem] dark:bg-black border">
        <Accordion.Root type="single" collapsible>
          {questionsAndAnswers.map((item) => {
            return (
              <Accordion.Item
                key={item.id}
                value={item.id}
                className="py-5 px-4 [&:has(+div)]:border-b-[1px] [&:has(+div)]:border-gray-300"
              >
                <Accordion.Trigger className="flex justify-between gap-3 text-start text-gray-500 font-secondary w-full dark:text-white">
                  <span className="text-title-xs">{item.title}</span>

                  <CaretDown weight="bold" className="flex-shrink-0" />
                </Accordion.Trigger>

                <Accordion.Content className="mt-3 text-base-160 text-gray-500 dark:text-white data-[state=open]:animate-growDownAndFade data-[state=closed]:animate-shrinkUpAndFade">
                  <p>{item.content}</p>
                </Accordion.Content>
              </Accordion.Item>
            )
          })}
        </Accordion.Root>
      </Card>
    </section>
  )
}
