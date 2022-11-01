import { ComponentStory } from '@storybook/react';
import { Posts } from './index';

export default {
    title: 'Login/Login Form Test',
    component: Posts,
};

const Template: ComponentStory<typeof Posts> = (args) => <Posts {...args} />;

export const PostsTest = Template.bind({});

PostsTest.args = { };
