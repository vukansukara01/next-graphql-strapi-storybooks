import { ComponentStory } from '@storybook/react';
import Post from './Post';

export default {
    title: 'Post body',
    component: Post,
};

const Template: ComponentStory<typeof Post> = (args) => <Post {...args} />;

export const PostBodyBasic = Template.bind({});

PostBodyBasic.args = {};
