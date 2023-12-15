import type { Meta, StoryObj } from '@storybook/react';

import { Button } from 'choas-react';
// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export

const meta = {
  title: 'Button',
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    btnTxt: {
      control: 'string',
      table:{
        defaultValue: {
          summary: '',
        },
        type: { summary: 'タイトル(title)' },
        subcategory: 'basic'
      }
    },
    type: {
      control: 'select',
      options: ['primary', 'danger', 'ghost', 'link'],
      table:{
        defaultValue: {
          summary: 'primary',
        },
        type: { summary: 'タイプ(type)' },
        subcategory: 'basic'
      }
    }
  },
  args: {
    btnTxt: 'button',
    type: 'primary',
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Type: Story = {
  args: {
    btnTxt: 'button1',
    type: 'primary',
  },
};

// export const className: Story = {
//   args: {
//     type: 'primary',
//     btnTxt: 'button',
//   },
// };

// export const onClick: Story = {
//   args: {
//     type: 'primary',
//     btnTxt: 'button',
//   },
// };

// export const render: Story = {
//   args: {
//     type: 'primary',
//     btnTxt: 'button',
//   },
// };