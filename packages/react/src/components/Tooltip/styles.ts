import { styled } from '../../styles'
import { Box } from '../Box'
import { Text } from '../Text'

export const TooltipContainer = styled(Box, {
  width: '220px',
  height: '44px',
  position: 'absolute',
  backgroundColor: '$gray900',
  borderRadius: '$sm',
  padding: 'unset',
  border: 'unset',
  zIndex: 1,
  bottom: '150%',
  left: '50%',
  marginLeft: '-110px',

  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  '&::after': {
    content: '',
    position: 'absolute',
    top: '100%',
    left: '50%',
    marginLeft: '-5px',
    borderWidth: '8px',
    borderStyle: 'solid',
    borderColor: '$gray900 transparent transparent transparent',
  },
})

export const TooltipText = styled(Text, {
  display: 'block',
  textAlign: 'center',
  fontWeight: '$medium',
})
