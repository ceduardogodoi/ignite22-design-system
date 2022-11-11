import { X } from 'phosphor-react'
import { ToastContainer, ToastTitle } from './styles'
import { Text } from '../Text'

export interface ToastProps {
  title: string
  message: string
  onClose(): void
}

export function Toast({ title, message, onClose }: ToastProps) {
  return (
    <ToastContainer>
      <X size={20} onClick={onClose} />

      <ToastTitle size="xl">{title}</ToastTitle>
      <Text>{message}</Text>
    </ToastContainer>
  )
}

Toast.displayName = 'Toast'
