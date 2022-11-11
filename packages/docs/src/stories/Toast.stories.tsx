import type { StoryObj, Meta } from '@storybook/react'
import { Toast, ToastProps } from '@ceduardogodoi-ignite-ui2/react'

export default {
  title: 'Surfaces/Toast',
  component: Toast,

  args: {
    title: 'Agendamento realizado',
    message: 'Quarta-feira, 23 de Outubro às 16h',
  },

  decorators: [
    (Story) => {
      return (
        <div
          style={{
            width: '100vw',
            height: '100vh',
            backgroundColor: '#121214',
          }}
        >
          <Story />
        </div>
      )
    },
  ],
} as Meta<ToastProps>

export const Primary: StoryObj<ToastProps> = {}
