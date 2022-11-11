import { styled } from '../../styles'
import { Text } from '../Text'

export const ToastContainer = styled('div', {
  position: 'absolute',
  bottom: '$8',
  right: '$8',
  padding: '$3 $5',
  borderRadius: '$md',
  backgroundColor: '$gray800',
  border: '1px solid $gray600',
  minWidth: '22.5rem',

  svg: {
    position: 'absolute',
    top: '$3',
    right: '$5',
    color: '$gray200',
    cursor: 'pointer',
  },
})

export const ToastTitle = styled(Text, {
  color: '$white',
  fontWeight: '$bold',
})
