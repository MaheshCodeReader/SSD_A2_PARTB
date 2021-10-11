import React from "react";
import ReactDOM from "react-dom";
import { MdEdit } from "react-icons/md";
import MDEditor from '@uiw/react-md-editor';
import {

  chakra,
  Container,
  Box,
  Button,
  Image,
  Flex,
  useColorModeValue,
  Link,
  Grid,
} from "@chakra-ui/react";
import { nodeName } from "jquery";


// export default function App() {
//   const [value, setValue] = React.useState("**Hello world!!!**");
//   return (
//     <div className="container">
//       <MDEditor
//         value={value}
//         onChange={setValue}
//       />
//       <MDEditor.Markdown source={value} />
//     </div>
//   );
// }



function Teaching() {

  const [value, setValue] = React.useState(localStorage.getItem("teachingResourcesContent"));

  

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
        localStorage.setItem("teachingResourcesContent", document.querySelector(".w-md-editor-text").innerText);
      }// console.log();
      editor.style.display = "none";
    }
    else{
      
      event.target.innerText = "Done Editing!";
      editor.style.display = "block";
    }
    
  }

  return (
    
    <Container
    centerContent
    style={{color:"black",}}
    >
      
      <Button 
        onClick={ff}
        leftIcon={<MdEdit />} 
        colorScheme="red"
        style={{marginBottom:"10px",}}
        >Edit !</Button>
      <MDEditor
        value={value}
        onChange={setValue}
        
        style={{display:"none",}}
      />
      <MDEditor.Markdown source={value} />
      
    </Container>
  );



  // return (
  //   <div className="about">
  //     <div class="container">
  //       <div class="row align-items-center my-5">
  //         <div class="col-lg-7">
  //           <img
  //             class="img-fluid rounded mb-4 mb-lg-0"
  //             src="http://placehold.it/900x400"
  //             alt=""
  //           />
  //         </div>
  //         <div class="col-lg-5">
  //           <h1 class="font-weight-light">Projects</h1>
  //           <p>
  //             Lorem Ipsum is simply dummy text of the printing and typesetting
  //             industry. Lorem Ipsum has been the industry's standard dummy text
  //             ever since the 1500s, when an unknown printer took a galley of
  //             type and scrambled it to make a type specimen book.
  //           </p>
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  // );
}

export default Teaching;