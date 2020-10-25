import React from 'react';
import Tooltips from '../../components/Tooltips';

export default {title:"Tooltips",component:Tooltips, argType:{}};

const Template = (args)=><Tooltips {...args}/>;

export const Normal = Template.bind({});
Normal.args = {
};


export const MultipleOpen = Template.bind({});
MultipleOpen.args = {
};