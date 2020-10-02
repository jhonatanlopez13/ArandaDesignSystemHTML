import React from 'react';
import HelpBox from '../../components/HelpBox';

export default {title:"HelpBox", component:"HelpBox", argType:{}};

const Template = (args) => <HelpBox {...args}/>;

export const Normal = Template.bind({});
Normal.args = {
};


export const MultipleOpen = Template.bind({});
MultipleOpen.args = {
};