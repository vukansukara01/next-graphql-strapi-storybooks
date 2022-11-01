import Card from './Card';
import { ComponentStory } from '@storybook/react';

export default {
    title: 'Card',
    component: Card,
};

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const CardTest = Template.bind({});

CardTest.args = {
    title: 'Title od the card',
    body: 'Body of the card',
    userName: 'User name',
};
