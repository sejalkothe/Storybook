import React from "react";
import Input from "./Input";
import Button from "../Button/Button.stories";


export default {
    title: 'Input',
    component: Input,
    argTypes: {
      title: { control: 'text'},
      smallTitle: { control: 'text' },
      para: { control: 'text' },
      cardColor:{ control: 'color'},
      likeBtn:{control:'text'},
      shareBtn:{control:'text'},
      backgroundColor:{control:'color'},
      paraColor:{ control:'color'},
      headColor:{control:'color'},
      subTitleColor:{control:'color'},
      cardWidth:{control:''},
      
    },
  };
  
  const Template = (args) => <Input {...args}>
    <Button {...Button.args}/>
  </Input>;
  
  export const Default = Template.bind({});
  Default.args = {
     title: 'Default',
     likeBtn:'Like',
     shareBtn:'Share',
  };

  export const shruti = Template.bind({});
  shruti.args={
    likeBtn:  <Button {...Button.args}/>,
  };
  
  