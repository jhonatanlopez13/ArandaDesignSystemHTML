import React from 'react';
import Progress from '../../components/ProgressBar';

export default {title:"Progress", component: Progress, argTypes:{
    percent: {control:"text", type:{ name: "number", reqired: true}}

}};

const Template = (args)=><Progress {...args}/>;

export const Normal = Template.bind({});
Normal.args = {
    percent: 1,

};


export const MultipleOpen = Template.bind({});
MultipleOpen.args = {
};