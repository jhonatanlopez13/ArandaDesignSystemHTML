import React from 'react';
import Convenciones from '../../components/Convenciones';

export default {title:"Convenciones",component:Convenciones, argType:{}};

const Template = (args)=><Convenciones {...args}/>;

export const Normal = Template.bind({});
Normal.args = {
};


export const MultipleOpen = Template.bind({});
MultipleOpen.args = {
};