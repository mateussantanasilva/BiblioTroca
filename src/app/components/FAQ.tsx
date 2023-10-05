import Link from 'next/link'
import * as Accordion from '@radix-ui/react-accordion'
import { Card } from '@/components/Card'
import { Button } from '@/components/Button'
import { CaretDown } from '@phosphor-icons/react'
import { questionsAndAnswers } from '@/constants/questionsAndAnswers'

export function FAQ() {
  return (
    <section className="mx-auto flex max-w-[73rem] flex-col px-6 py-9 text-gray-500 md:flex-row md:justify-between md:gap-5">
      <div className="dark:text-white">
        <h2 className="mx-auto mb-3 text-center font-secondary text-title-lg md:mx-0 md:text-left">
          Temos Respostas para Suas Perguntas
        </h2>
        <p className="mx-auto mb-10 max-w-[30rem] text-center text-base-160 md:mx-0 md:text-left">
          Dê uma olhada nas questões mais frequentes sobre a Bibliotroca. Se não
          encontrar o que procura, não hesite em nos enviar sua dúvida.
        </p>

        <Button
          componentType={Link}
          size="md"
          href="https://wa.me/11912345678"
          target="_blank"
          className="mx-auto mb-10 md:mx-0"
        >
          Envie sua pergunta
        </Button>
      </div>

      <Card type="content" className="border p-0 dark:bg-black md:w-[40rem]">
        <Accordion.Root type="single" collapsible>
          {questionsAndAnswers.map((item) => {
            return (
              <Accordion.Item
                key={item.id}
                value={item.id}
                className="px-4 py-5 [&:has(+div)]:border-b-[1px] [&:has(+div)]:border-gray-300"
              >
                <Accordion.Trigger className="flex w-full justify-between gap-3 text-start font-secondary text-gray-500 dark:text-white">
                  <span className="text-title-xs">{item.title}</span>

                  <CaretDown weight="bold" className="flex-shrink-0" />
                </Accordion.Trigger>

                <Accordion.Content className="mt-3 text-base-160 text-gray-500 data-[state=closed]:animate-shrinkUpAndFade data-[state=open]:animate-growDownAndFade dark:text-white">
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
