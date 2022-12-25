import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Project } from '../components/Project/Project';
import { RepoName } from '../features/projects.types';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/Project',
  component: Project,
} as ComponentMeta<typeof Project>;

const Template: ComponentStory<typeof Project> = (args) => <Project {...args} ></Project>;

export const Default = Template.bind({});
Default.args = {
    project: {
        image: {
            src: '/images/projects/11ty-starter.png',
            alt: '',
        },
        link: 'https://google.com',
        title: 'My project',
        description: 'this is my project description',
        repo: {
            name: RepoName.GITHUB,
            link: 'https://github.com',
        },
        id: 1,
        techList: [{name: 'javascript'}],
        forks: 0,
        stars: 2,
    }
};