import { TooltipContainer, TooltipText } from './styles'

export interface TooltipProps {
  message: string
}

export function Tooltip({ message }: TooltipProps) {
  return (
    <TooltipContainer>
      <TooltipText as="span">{message}</TooltipText>
    </TooltipContainer>
  )
}
