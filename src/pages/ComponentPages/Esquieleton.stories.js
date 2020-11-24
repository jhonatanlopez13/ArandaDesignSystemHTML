import React from 'react';
import Esqueleton from '../../components/Esqueleton';

export default {title:"Esqueleton", component: Esqueleton, argTypes:{
    percent: {control:"text", type:{ name: "number", reqired: true}}

}};

const Template = (args)=><Esqueleton {...args}/>;

export const Normal = Template.bind({});
Normal.args = {
    percent: 1,

};


export const MultipleOpen = Template.bind({});
MultipleOpen.args = {
};