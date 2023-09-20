import { ReactNode, useState } from 'react'
import { createContext } from 'use-context-selector'

interface ModalProviderProps {
  children: ReactNode
}

interface ModalContextType {
  modalIsOpen: boolean
  changeModalVisibility: () => void
}

export const ModalContext = createContext({} as ModalContextType)

export function ModalProvider({ children }: ModalProviderProps) {
  const [modalIsOpen, setModalIsOpen] = useState(false)

  function changeModalVisibility() {
    setModalIsOpen(!modalIsOpen)
  }

  return (
    <ModalContext.Provider value={{ modalIsOpen, changeModalVisibility }}>
      {children}
    </ModalContext.Provider>
  )
}
