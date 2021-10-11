
import React from "react";
import FeedbackFrom from "./SecondaryTemaplates/FeedbackForm"

import {
  Avatar,
  Box,
  chakra,
  Container,
  Flex,
  Grid,
  Button,
  GridItem,
  Icon,
  Image,
  SimpleGrid,
  useColorModeValue,
} from '@chakra-ui/react';

import { MdEdit } from "react-icons/md";
import MDEditor from '@uiw/react-md-editor';

const mapouterStyles = {
  position: "relative",
  textAlign: "right",
  height: "500px",
  width: "600px",
};

const gmap_canvas_styles = {
  overflow: "hidden",
  background: "none!important",
  height: "500px",
  width: "600px",
};

// function my_func(){

    

//   var contactHomeContentWrapper = document.getElementById("contactHomeContentWrapper");
//   var editButtonContactHomeContent = document.getElementById("editButtonContactHomeContent");
  
//   var preTagClass;
//   if(localStorage.getItem("preTagClass")){
//     console.log("class  exists")
//   }
//   else{
//     preTagClass = document.getElementById("preTagContactHomeContent").getAttribute("class");
//     localStorage.setItem("preTagClass", preTagClass)
//   }

//   var adminMode = localStorage.getItem("adminMode");
//   if(adminMode == 0){

//     var pass = localStorage.getItem("password");
//     let entered = prompt("Please enter your password:");

//     if(pass != entered){
//       return;
//     }

//     localStorage.setItem("adminMode", 1);
//     editButtonContactHomeContent.innerText = "Done Editing";

    
    

//     var ta = document.createElement("textarea");
//     ta.innerHTML = localStorage.getItem("contactHomeContent");
//     ta.setAttribute("id", "taTagContactHomeContent");
    
//     ta.setAttribute("style", "background-color: #fff;color:black;width:100%;height:40px;white-space: pre-wrap;")
    
    
//     var preTagContactHomeContent = document.getElementById("preTagContactHomeContent");
//     console.log(preTagContactHomeContent.innerText);
//     var oldtext = preTagContactHomeContent.innerText;
//     ta.innerText = localStorage.getItem("contactHomeContent");
//     preTagContactHomeContent  .remove();
//     contactHomeContentWrapper.appendChild(ta);
//   }
//   else{
//     localStorage.setItem("adminMode", 0);
//     editButtonContactHomeContent.innerText = "Edit Content";

    
    

//     var pre = document.createElement("pre");
//     pre.innerHTML = localStorage.getItem("contactHomeContent");
//     pre.setAttribute("id", "preTagContactHomeContent");
//     // pre.setAttribute("class", localStorage.getItem("preTagClass"));
//     pre.setAttribute("style", "white-space: pre-wrap;");
    
//     var taTagContactHomeContent = document.getElementById("taTagContactHomeContent");
//     console.log(taTagContactHomeContent.value);
//     var newtext = taTagContactHomeContent.value;
//     localStorage.setItem("contactHomeContent", newtext);
//     pre.innerHTML = localStorage.getItem("contactHomeContent")
//     taTagContactHomeContent.remove();
//     contactHomeContentWrapper.appendChild(pre);
//   }

  
// }

export default function Contact() {


  const [value, setValue] = React.useState(localStorage.getItem("contactHomeContent"));

  

  const ff = (event) => {
    let editor = document.querySelector(".w-md-editor.w-md-editor-show-live");
    if (editor === null){
      editor = document.querySelector(".w-md-editor.w-md-editor-show-edit")
      
      if(editor === null){
        editor = document.querySelector(".w-md-editor.w-md-editor-show-preview");
      }
    } 
    let style = window.getComputedStyle(editor);
    console.log(style.display);
    console.log(event.target.innerText);
    var adminMode = localStorage.getItem("adminMode");
    if(adminMode == 0 || style.display == "none"){

      var pass = localStorage.getItem("password");
      let entered = prompt("Please enter your password:");
  
      if(pass != entered){
        return;
      }
  
      localStorage.setItem("adminMode", 1);
      
    }
    else{
      localStorage.setItem("adminMode", 0);
  
    }

    
    if(style.display != "none"){ // user was editing currently
      event.target.innerText = "Edit Info!";
      if(document.querySelector(".w-md-editor-text") != null){
        localStorage.setItem("contactHomeContent", document.querySelector(".w-md-editor-text").innerText);

      }
      // console.log();
      editor.style.display = "none";
    }
    else{
      
      event.target.innerText = "Done Editing!";
      editor.style.display = "block";
    }
    
  }


  return (
    <>
      <Container>
      <Grid
          templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(1, 1fr)", lg: "repeat(1, 1fr)" }}
          //   bg={useColorModeValue("#F9FAFB", "gray.600")}
          p={50}
          w="full"
          alignItems="center"
          justifyContent="center"
        >
          <GridItem
            centerContent
            // style={{ color: "black", }}
          >

            
            <MDEditor
              value={value}
              onChange={setValue}

              style={{ display: "none", }}
            />
            <MDEditor.Markdown source={value} />
            <Button
              onClick={ff}
              leftIcon={<MdEdit />}
              colorScheme="red"
              style={{ marginBottom: "10px", }}
            >Edit !</Button>
          </GridItem>

        </Grid>
      </Container>
      <FeedbackFrom />
      <Container className="py-5">
        <div className="mapouter" style={mapouterStyles}>
          <div className="gmap_canvas" style={gmap_canvas_styles}>
            <iframe width="100%" height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=iiit%20hyderabad&t=k&z=15&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginHeight="0" marginWidth="0">

            </iframe>
            

          </div>
        </div>
      </Container>
      
    </>

  );
}

