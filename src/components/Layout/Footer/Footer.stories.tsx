import type { Meta, StoryObj } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../../common/styles/theme';

import Footer from './Footer';


const meta = {
  title: 'Footer',
  component: Footer,
  decorators: [
    (Story) => (
        <ThemeProvider theme={theme}>
                <Story />
        </ThemeProvider>
    ),
  ],
} satisfies Meta<typeof Footer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
  },
  render: () => <Footer />,
};
