import React, { Component } from "react";
import { MdAssignment } from "react-icons/md";
import {
    Container,
    chakra,
    Box,
    Image,
    Flex,
    useColorModeValue,
    ListItem,
    ListIcon,
    Link,
    Input,
    Grid,
    GridItem,
    List,
    Button,
} from "@chakra-ui/react";
import ReactDOM from "react-dom";
import { MdEdit } from "react-icons/md";
import MDEditor from '@uiw/react-md-editor';


import $ from "jquery";

import { uuid } from 'uuidv4';

const headerStyle = {
    fontSize: "80px",
}

const headerStyleSmall = {
    fontSize: "40px",
    paddingTop: "40px",
}

class SinglePerson extends Component {

    constructor() {
        super();

        this.state = {
            filter: "",
            value: "",
        };
    }

    setFilter = (v) => {
        this.setState({
            filter: v,
            value: this.state.value,
        });
    };

    setValue = (v) => {

        this.setState({
            filter: this.state.filter,
            value: v,
        });
    }

    ff = (event) => {
        let editor = document.querySelector(".w-md-editor.w-md-editor-show-live");
        if (editor === null) {
            editor = document.querySelector(".w-md-editor.w-md-editor-show-edit")

            if (editor === null) {
                editor = document.querySelector(".w-md-editor.w-md-editor-show-preview");
            }
        }
        let style = window.getComputedStyle(editor);
        console.log(style.display);
        console.log(event.target.innerText);
        var adminMode = localStorage.getItem("adminMode");
        if (adminMode == 0 || style.display == "none") {

            var pass = localStorage.getItem("password");
            let entered = prompt("Please enter your password:");

            if (pass != entered) {
                return;
            }

            localStorage.setItem("adminMode", 1);

        }
        else {
            localStorage.setItem("adminMode", 0);

        }

        if (style.display != "none") { // user was editing currently
            event.target.innerText = "Edit Info!";
            if (document.querySelector(".w-md-editor-text") != null) {

                localStorage.setItem("demosResourcesContent", document.querySelector(".w-md-editor-text").innerText);
            }
            // console.log();
            editor.style.display = "none";
        }
        else {

            event.target.innerText = "Done Editing!";
            editor.style.display = "block";
        }
    }

    componentDidMount() {
        this.setValue(this.props.person.abt);
        fetch(this.props.person.dblpurl)
            .then(res => res.text())
            .then((xmlString) => {
                var xmlDoc = $.parseXML(xmlString);
                var $xml = $(xmlDoc);

                var $person = $xml.find("r");

                var facultyname = this.props.person.name + " Publications";
                localStorage.setItem(facultyname, JSON.stringify([]));
                $person.each(function () {
                    var name = $(this).find("title").text();
                    var people = $(this).find("author").text();
                    var link = $(this).find("ee").text();

                    var arr = JSON.parse(localStorage.getItem(facultyname));

                    arr.push({ "name": name, "people": people, "link": link });
                    localStorage.setItem(facultyname, JSON.stringify(arr));
                });
            });
    }

    render() {


        return (
            <Grid
                templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(1, 1fr)", lg: "repeat(3, 1fr)" }}

                p={50}
                w="full"
                alignItems="center"
                justifyContent="center"
            >
                <GridItem
                    colSpan={{ base: "1", md: "1", lg: "3" }}
                    style={headerStyleSmall}>
                    {this.props.person.name}
                </GridItem>
                <GridItem
                    colSpan={{ base: "1", md: "1", lg: "1" }}>

                    <Image
                        h={56}
                        src={this.props.person.imageurl}
                        alt="avatar"
                    />
                </GridItem>
                <GridItem
                    colSpan={{ base: "1", md: "1", lg: "2" }}>

                    {/* <div>{this.props.person.about.map((x) => (
                        <p>{x}</p>
                    ))}</div> */}

                    <Container
                        centerContent
                        style={{ color: "black", }}
                    >

                        
                        <MDEditor
                            value={this.state.value}
                            onChange={this.setValue}

                            style={{ display: "none", }}
                        />
                        <MDEditor.Markdown source={this.state.value} />
                        <Button
                            onClick={this.ff}
                            leftIcon={<MdEdit />}
                            colorScheme="red"
                            style={{ marginBottom: "10px", }}
                        >Edit !</Button>
                    </Container>
                </GridItem>

                <GridItem
                    colSpan={{ base: "1", md: "1", lg: "3" }}>

                    <h1 style={headerStyleSmall}>Research Interests</h1>
                    {this.props.person.areas.map((x) => (
                        <chakra.li>{x}</chakra.li>
                    ))}
                </GridItem>
                <GridItem
                    colSpan={{ base: "1", md: "1", lg: "3" }}
                >

                    <chakra.h1 style={headerStyleSmall}>Publications</chakra.h1>
                    <Container>
                        <chakra.p>
                            Type to filter the list:
                            <Input id="filter"
                                name="filter"
                                type="text"
                                value={this.state.filter}
                                onChange={event => this.setFilter(event.target.value)}
                            />
                        </chakra.p>
                        <List spacing={3}>
                            {
                                JSON.parse(localStorage.getItem(this.props.person.name + " Publications")).filter(f => f.name.includes(this.state.filter)
                                    || f.people.includes(this.state.filter) || this.state.filter === '')
                                    .map(f => <ListItem key={uuid()}><ListIcon as={MdAssignment} color="green.500" />{f.name + " " + f.people}</ListItem>)
                            }

                        </List>
                        <ul id="publications"></ul>
                    </Container>
                </GridItem>

            </Grid>
        );
    }
}

export default SinglePerson;