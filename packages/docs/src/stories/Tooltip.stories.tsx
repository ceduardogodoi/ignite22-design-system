import type { Meta, StoryObj } from '@storybook/react'
import { Text, Tooltip, TooltipProps } from '@ceduardogodoi-ignite-ui2/react'

export default {
  title: 'Surfaces/Tooltip',
  component: Tooltip,

  args: {
    message: '21 de Outubro - Indisponível',
  },

  argTypes: {
    message: {
      control: 'text',
    },
  },

  decorators: [
    (Story) => {
      return (
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100vw',
            height: '100vh',
            padding: '2rem',
            backgroundColor: '#323238',
          }}
        >
          <div style={{ position: 'relative' }}>
            <Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit,
              accusamus.
            </Text>

            <Story />
          </div>
        </div>
      )
    },
  ],
} as Meta<TooltipProps>

export const Primary: StoryObj<TooltipProps> = {}
