import { useState } from 'react'
import { X } from 'phosphor-react'
import { ToastContainer, ToastTitle } from './styles'
import { Text } from '../Text'

export interface ToastProps {
  title: string
  message: string
}

export function Toast({ title, message }: ToastProps) {
  const [isShowing, setIsShowing] = useState(true)

  return (
    isShowing && (
      <ToastContainer>
        <X size={20} onClick={() => setIsShowing(false)} />

        <ToastTitle size="xl">{title}</ToastTitle>
        <Text>{message}</Text>
      </ToastContainer>
    )
  )
}

Toast.displayName = 'Toast'
