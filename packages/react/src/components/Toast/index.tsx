import { X } from 'phosphor-react'
import { ToastContainer, ToastTitle } from './styles'
import { Text } from '../Text'

export interface ToastProps {
  title: string
  message: string
  handleClickClose(): void
}

export function Toast({ title, message, handleClickClose }: ToastProps) {
  return (
    <ToastContainer>
      <X size={20} onClick={handleClickClose} />

      <ToastTitle size="xl">{title}</ToastTitle>
      <Text>{message}</Text>
    </ToastContainer>
  )
}

Toast.displayName = 'Toast'
