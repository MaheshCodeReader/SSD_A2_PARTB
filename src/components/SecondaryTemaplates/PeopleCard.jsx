import React from "react";
import {
  chakra,
  Box,
  Image,
  Flex,
  useColorModeValue,
  Link,
  Grid,
} from "@chakra-ui/react";

import PersonCard from "./PersonCard";

export default function Ma(props) {
  return (
    // fontSize={{ base: "24px", md: "40px", lg: "56px" }}
    
    <Grid
      templateColumns={{base:"repeat(1, 1fr)", md:"repeat(2, 1fr)", lg:"repeat(3, 1fr)"}}
      bg={useColorModeValue("#F9FAFB", "gray.600")}
      p={50}
      w="full"
      alignItems="center"
      justifyContent="center"
      gridGap="4"
    >
      {
        props.people.map((x) => (
          <PersonCard name={x.name} imageurl={x.imageurl} job={x.job} areas={x.areas} />
        ))
      }
      </Grid>
  );
};

