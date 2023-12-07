import { Button } from '../Button'

interface DeleteBookModalProps {
  onClick?: () => void
}

export function DeleteBookModal({ onClick }: DeleteBookModalProps) {
  return (
    <Button variant="delete" onClick={onClick}>
      Sim, excluir
    </Button>
  )
}
