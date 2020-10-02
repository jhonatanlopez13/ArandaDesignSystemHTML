import React from 'react';
import DateTime from '../../components/DateTime';

export default {title:"Date", component:"DateTime", argType:{}};

const Template = (args)=><DateTime {...args}/>;

export const Normal = Template.bind({});
Normal.args = {
};


export const MultipleOpen = Template.bind({});
MultipleOpen.args = {
};