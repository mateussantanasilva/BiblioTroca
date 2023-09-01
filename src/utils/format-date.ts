import { format } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

export function formatDate(date: Date) {
  return format(date, 'dd/MM/yyyy', {
    locale: ptBR,
  })
}
