import type { StoryObj, Meta } from '@storybook/react'
import { Toast, ToastProps, Button } from '@ceduardogodoi-ignite-ui2/react'
import { useState } from 'react'

export default {
  title: 'Surfaces/Toast',
  component: Toast,

  decorators: [
    (Story) => {
      const [isShowing, setIsShowing] = useState(true)

      function handleClickShow() {
        setIsShowing(true)
      }

      function handleClickClose() {
        setIsShowing(false)
      }

      return (
        <div
          style={{
            width: '100vw',
            height: '100vh',
            padding: '2rem',
            backgroundColor: '#121214',
          }}
        >
          <Button disabled={isShowing} onClick={handleClickShow}>
            Show Toast
          </Button>

          {isShowing && (
            <Story
              args={{
                title: 'Agendamento realizado',
                message: 'Quarta-feira, 23 de Outubro às 16h',
                handleClickClose,
              }}
            />
          )}
        </div>
      )
    },
  ],
} as Meta<ToastProps>

export const Primary: StoryObj<ToastProps> = {}
