import RequestExchangeImage from '../assets/variantsModal/requestExchange.png'
import DeleteAccountImage from '../assets/variantsModal/deleteAccount.svg'
import RefuseExchangeImage from '../assets/variantsModal/refuseExchange.svg'
import EvaluateImage from '../assets/variantsModal/evaluate.svg'
import DeleteBookImage from '../assets/variantsModal/deleteBook.svg'

export const contentVariants = {
  requestExchange: {
    imageUrl: RequestExchangeImage,
    alt: 'Aperto de mão',
    title: 'Confirme a Solicitação',
    description:
      'Ao confirmar, você estará solicitando a troca pelo livro Clean code. Deseja continuar?',
  },
  deleteAccount: {
    imageUrl: DeleteAccountImage,
    alt: 'Usuário triste que porque será apagado',
    title: 'Confirmar Exclusão',
    description:
      'Excluindo sua conta, todos os seus dados e pontos serão permanentemente perdidos.',
  },
  refuseExchange: {
    imageUrl: RefuseExchangeImage,
    alt: 'Aperto de mão com um X vermelho',
    title: 'Desfazer Acordo',
    description:
      'Você está prestes a interromper o processo de troca. Tem certeza de que quer continuar?',
  },
  evaluate: {
    imageUrl: EvaluateImage,
    alt: 'Estrelas acima de um perfil',
    title: 'Avalie Pedro',
    description:
      'Como foi sua experiência com Pedro durante esta troca? Seu feedback é essencial para nossa comunidade.',
  },
  deleteBook: {
    imageUrl: DeleteBookImage,
    alt: 'Livro com um X vermelho',
    title: 'Confirmar Exclusão',
    description:
      'Você está prestes a excluir este livro do seu perfil. Tem certeza de que deseja continuar?',
  },
}
