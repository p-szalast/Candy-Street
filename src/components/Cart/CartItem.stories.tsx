import type { ComponentStory, Meta } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../common/styles/theme';

import CartItem from './CartItem';
import { BrowserRouter } from 'react-router-dom';


const meta = {
  title: 'CartItem',
  component: CartItem,
  decorators: [
    (Story) => (
        <ThemeProvider theme={theme}>
            <BrowserRouter>
                    <Story />
            </BrowserRouter>
        </ThemeProvider>
    ),
  ],
} satisfies Meta<typeof CartItem>;

export default meta;

const testImage = "https://images.nintendolife.com/896426b3ad170/candy.original.jpg"

const Template: ComponentStory<typeof CartItem> = (args) => <CartItem {...args} />;

export const BasicState = Template.bind({});
BasicState.args = {
    name: "StoryBook Candies (50 pieces)",
    image: testImage,
    price: 19,
    amount: 5,
};
