import React from 'react';
import Help from '../../components/Help';

export default {title:"Help", component: Help, argType:{}};

const Template = (args)=><Help {...args}/>;

export const Normal = Template.bind({});
Normal.args = {
};


export const MultipleOpen = Template.bind({});
MultipleOpen.args = {
};