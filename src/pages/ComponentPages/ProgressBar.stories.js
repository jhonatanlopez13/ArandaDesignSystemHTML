import React from 'react';
import Progress from '../../components/ProgressBar';

export default {title:"Progress", component: Progress, argType:{}};

const Template = (args)=><Progress {...args}/>;

export const Normal = Template.bind({});
Normal.args = {
};


export const MultipleOpen = Template.bind({});
MultipleOpen.args = {
};