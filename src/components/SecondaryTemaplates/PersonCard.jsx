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

import { Link as ReactLink } from "react-router-dom";



export default function Ma(props){
    console.log(localStorage.getItem("mahesh"));
    return (


        <Box
            w="xs"
            bg={useColorModeValue("white", "gray.800")}
            shadow="lg"
            rounded="lg"
            overflow="hidden"
            mx="auto"
        >
            <Image
                w="full"
                h={56}
                fit="cover"
                src={props.imageurl}
                alt="avatar"
            />

            <Box py={5} textAlign="center">
                <Link
                    to={"/people/" + props.name.toLowerCase().split(" ").join("")}
                    as={ReactLink}
                    display="block"
                    fontSize="2xl"
                    color={useColorModeValue("gray.800", "white")}
                    fontWeight="bold"
                >
                    {props.name}
                </Link>
                <chakra.strong
                    fontSize="sm"
                    color={useColorModeValue("gray.700", "gray.200")}
                >
                    {props.job}
                </chakra.strong>
                <chakra.h3>
                    Research Interests
                </chakra.h3>
                <chakra.ul
                    fontSize="sm"
                    color={useColorModeValue("gray.700", "gray.200")}
                >

                    {props.areas.map((x) => (
                        <chakra.li>{x}</chakra.li>
                    ))}
                </chakra.ul>
            </Box>
        </Box>


    );
};

