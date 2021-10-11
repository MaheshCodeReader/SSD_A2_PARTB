import React from "react";


import {
    
    Text,
    Textarea
  } from '@chakra-ui/react';



export default function Example() {
    let [value, setValue] = React.useState("")
  
    let handleInputChange = (e) => {
      let inputValue = e.target.value
      setValue(inputValue)
    }
    return (
      <>
        <Text mb="8px">Your Comments: {value}</Text>
        <Textarea
          value={value}
          onChange={handleInputChange}
          placeholder="Type your feedback here"
          size="sm"
        />
      </>
    )
  }