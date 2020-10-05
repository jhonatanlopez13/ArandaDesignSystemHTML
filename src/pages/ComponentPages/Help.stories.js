import { template } from '@babel/core';
import React from 'react';
import Help from '../../components/Help';

export default {title:"Help", component:"Help", argType:{}};

const tempate = (arg)=><Help { ...args}/>;

export const Normal =Template.bind({});
Normal.args ={
};

export const MultipleOpen = Template.bind({});
MultipleOpen.args = {
};