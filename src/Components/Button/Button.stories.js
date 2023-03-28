import React from "react";
import Button from './Button'

export default {
    title: 'Button',
    component: Button,
    argsType:{
     backgroundColor:{control:'color'},
    },
}


const Template =(args)=> <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    
    children: 'Button',
    backgroundColor:'blue',
}

