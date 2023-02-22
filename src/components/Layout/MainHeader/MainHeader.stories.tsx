import type { Meta, StoryObj } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../../common/styles/theme';

import MainHeader from './MainHeader';


const meta = {
  title: 'MainHeader',
  component: MainHeader,
  decorators: [
    (Story) => (
        <ThemeProvider theme={theme}>
            <BrowserRouter>
                <Story />
            </BrowserRouter>
        </ThemeProvider>
    ),
  ],
} satisfies Meta<typeof MainHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
  },
  render: () => <MainHeader />,
};
