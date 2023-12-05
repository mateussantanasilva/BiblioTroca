import { useState } from 'react'
import axios from 'axios'
import { ViaCEPData } from '@/@types/viaCepData'

export function useAddress() {
  const [bairro, setBairro] = useState<string | undefined>('')
  const [cidade, setCidade] = useState<string | undefined>('')

  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)

  function checkCep(cep: string) {
    setIsLoading(true)
    axios
      .get<ViaCEPData>(`https://viacep.com.br/ws/${cep}/json`)
      .then(({ data: { bairro, localidade } }) => {
        setBairro(bairro)
        setCidade(localidade)
        setIsError(false)
      })
      .catch(
        (error) => error && (setIsError(true), setBairro(''), setCidade('')),
      )
      .finally(() => setIsLoading(false))
  }

  return { checkCep, bairro, cidade, isLoading, isError }
}
