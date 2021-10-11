import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import { Component } from "react";
import $ from "jquery";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import { Footer, Home, T1 } from "./components";
import Dataset from "./components/DatasetHome";
import Demos from "./components/DemosHome";
import Events from "./components/EventsHome";
import Faculty from "./components/FacultyHome";
import Links from "./components/LinksHome";
import Projects from "./components/ProjectsHome";
import Publications from "./components/PublicationsHome";
import Research from "./components/ResearchHome";
import Showcase from "./components/ShowcaseHome";
import Teaching from "./components/TeachingHome";
import Contact from "./components/ContactHome";

import SinglePerson from "./components/SecondaryTemaplates/SinglePerson"


const paddingStyle = {
    paddingTop: "80px",
};



class App extends Component {

    constructor() {
        super();

        localStorage.setItem("mahesh", "dudhanale");
        localStorage.setItem("adminMode", 0);
        localStorage.setItem("password", "password");
        localStorage.setItem("people", JSON.stringify(PEOPLE));
        localStorage.setItem("news", JSON.stringify(NEWS));
        if (!localStorage.getItem("contactHomeContent")) {
            localStorage.setItem("contactHomeContent", `**Email**: serc@iiit.ac.in.in\n\n**Address**: Hyderabad.\n`);
        }

        if (!localStorage.getItem("homeAboutContent")) {
            localStorage.setItem("homeAboutContent", `> Software Engineering Research Center ***SERC***) has a eminent faculty with vast teaching  and **research** experience in and  outside  ***India***.\n\n1. Empirical Research and Process Improvement\n2. Formal Methods in Software Engineering\n3.  Requirements Engineering and Quality Attributes\n4. Complex System Development\n5.  Cloud Computing\n6. IoT\n\nSERC has close collaboration with industry providing software to large organizations, R&D labs of various organizations and other academic institutes (India and abroad). \nOrganizations that SERC is working are        diverse, stratified across banking and finance, government, equipment manufacture,  `);
        }

        if (!localStorage.getItem("projectsResourcesContent")) {
            localStorage.setItem("projectsResourcesContent", `###### [**Student Projects**](https://serc.iiit.ac.in/resources/projects/student-project/) ######\n###### [**Current Funded Projects**](https://serc.iiit.ac.in/resources/projects/funded-project/) ######\n###### [**Past Funded Projects**](https://serc.iiit.ac.in/resources/projects/current-project/) ######\n###### [**Other Projects**](https://serc.iiit.ac.in/resources/other-projects/) ######`);
        }
        if (!localStorage.getItem("teachingResourcesContent")) {
            localStorage.setItem("teachingResourcesContent", `| Course| Brief Description|\n|-----------|---------|\n| Software Engineering | To develop in-depth understanding of software engineering principles, practices and ability to apply them in developing large scale software systems. |\n| Software Systems Analsis and Design | Provides an introduction to software engineering concepts and techniques to undergraduate students. Enables the students to work in smaller teams and deliver software systems. |\n| Software Foundations | Provides mathematical foundations of programs and software systems so as to be able to prove properties about their behaviour. |\n| Software Quality Engineering | Imparts quality analyses of software systems. Topics include verification, software quality assurance, standards, etc. Concepts and skills necessary to design and and validation, metrics and measurements are also part of the curriculum. |\n| Internals of Application Servers | Understand essence of middleware and distributed object technology. J2EE Technology and Architecture overview. J2EE App Server architecture. Life cycle of a J2EE application-deployment through running and deployment. |\n| Principles of Programming Languages | This course is an introduction to the principles behind the design of programming languages, including object-oriented programming, and the use of formal methods in reasoning with programs. During the course, students build a series of interpreters, each a mini abstract or virtual machine for a specific language. |`);
        }
        if (!localStorage.getItem("linksResourcesContent")) {
            localStorage.setItem("linksResourcesContent", `| Content | Link |\n|----------------------------------------------------------------------|---|\n| List of ACM Turing Award Lectures|  [Visit](http://dblp.uni-trier.de/db/journals/cacm/turing.html)  |\n| ICSE's Most Influential Papers | [Visit](http://www.sigsoft.org/awards/mostInfPapAwd.htm)  |\n| Software Engineering Readings | [Visit](http://people.engr.ncsu.edu/txie/sereading.htm)  |\n| PhD Dissertations in the Area of Software Engineering (SIGSOFT) | [Visit](http://www.sigsoft.org/phdDissertations/)  |\n| Good conferences and journals listed by Tao Xie | [Visit](http://www.cs.illinois.edu/homes/taoxie/sereading.htm)  |\n| Other Software Engineering Research Centers | [Visit](http://www.cs.wm.edu/semeru/index.html) |\n| Microstack (Openstack) Ussuri Configuration Document | [Visit](https://github.com/SIREN-DST/Crawling-Engines/blob/master/Microstack(Openstack)_Configuration.pdf) |`);
        }
        if (!localStorage.getItem("demosResourcesContent")) {
            localStorage.setItem("demosResourcesContent", `* [UMETRIX - Usability Evaluation Framework for Mobile Apps based on Static Code Analysis](https://serc.iiit.ac.in/resources/demos/umetrix)\n* [Gamily - Gamification Platform For All](https://serc.iiit.ac.in/resources/demos/gamily/)`);
        }
        if (!localStorage.getItem("showcaseResourcesContent")) {
            localStorage.setItem("showcaseResourcesContent", `* Dynamic Path Generation System for Continuous Walking in Finite Space using VR]()\n* Scalable and Extensible Crawlers\n* VREye: Towards building a Customized Head Mount Display for Virtual Reality Applications​\n* Identifying the cyberattacks from the Text\n* Impact of Covid on Virtual Lab\n* Methodology to Develop Domain Specific Modeling Languages\n* Virtual Labs Outreach\n* Virtual Labs Experiment Pedagogy\n* Smart Contracts for Opensource Software License Management\n* Understanding Software Quality Metrics for VR Products - A Mapping Study\n* A Fine Grained Approach to Develop Domain Specific Search Engine\n* Type safe tensor combinators`);
        }



        this.state = {
            PEOPLE: [{
                name: "Raghu Reddy",
                imageurl: "images/people/6.jpg",
                job: "Associate Professor & Head",
                areas: ['Model Driven Development',
                    'Software Requirements and Architecture',
                    'Verification & Validation',
                    'Usability and Software engineering education'
                ],
                about: [
                    "Dr. Y. Raghu Reddy works as an Associate Professor at International Institute of Information Technology, Hyderabad, India. His specialization is in Software Engineering. His primary research interests are in design and construction of complex software systems. He has published number of peer reviewed publications in these areas. He has also published a book titled: Aspect oriented software development: An approach to composing UML design models in 2009. He is a part of several national and international conference committees.",
                    "He is Currently the Head of the Software Engineering Research Center (SERC) at IIIT-Hyderabad and the CA Technologies Endowed Faculty Chair at IIIT Hyderabad. He was previously the IIIT lead for CA Technologies - IIIT Hyderabad Innovation Center established at CA Technologies, Gachibowli, Hyderabad.      ",
                    "In his previous life, Dr. Reddy worked as an Assistant professor with the Department of Software Engineering at Rochester Institute of Technology (RIT), USA. He played a major role in building the Software Engineering Master’s program at RIT. He developed and taught courses at the undergraduate and graduate level. Earlier, he worked as an Instructor at Colorado State University. He obtained his Ph.D. in Computer Science from Colorado State University, Fort Collins, USA.      ",
                    "During his tenure as a researcher he has worked on projects with MHRD, CA Technologies, Nokia Inc., Alstom Signaling Inc., TCN Telecom Consulting Group, QWest Communications, etc."
                ],
                abt: `Dr. Y. Raghu Reddy works as an Associate Professor at International Institute of Information Technology, Hyderabad, India. His specialization is in Software Engineering. His primary research interests are in design and construction of complex software systems. He has published number of peer reviewed publications in these areas. He has also published a book titled: Aspect oriented software development: An approach to composing UML design models in 2009. He is a part of several national and international conference committees.\nHe is Currently the Head of the Software Engineering Research Center (SERC) at IIIT-Hyderabad and the CA Technologies Endowed Faculty Chair at IIIT Hyderabad. He was previously the IIIT lead for CA Technologies - IIIT Hyderabad Innovation Center established at CA Technologies, Gachibowli, Hyderabad.\nIn his previous life, Dr. Reddy worked as an Assistant professor with the Department of Software Engineering at Rochester Institute of Technology (RIT), USA. He played a major role in building the Software Engineering Master’s program at RIT. He developed and taught courses at the undergraduate and graduate level. Earlier, he worked as an Instructor at Colorado State University. He obtained his Ph.D. in Computer Science from Colorado State University, Fort Collins, USA.\nDuring his tenure as a researcher he has worked on projects with MHRD, CA Technologies, Nokia Inc., Alstom Signaling Inc., TCN Telecom Consulting Group, QWest Communications, etc.`,
                dblpurl: "https://dblp.org/pid/r/RaghuReddy.xml"
            },
            {
                name: 'Venkatesh Choppella',
                imageurl: "images/people/Venkatesh_Choppella.jpg",
                job: "Associate Professor",
                areas: ['Programming Languages',
                    'S/W Architectures',
                    'Formal Methods',
                    'CS Education'
                ],
                about: [
                    "Venkatesh Choppella is Associate Professor at the International Institute of Information Technology Hyderabad, India. He was also associated with Indian Institute of Information Technology and Management – Kerala, Trivandrum, and is currently adjunct faculty at IIIT Bangalore.      ",
                    "He has held research and engineering positions in Hewlett Packard, Xerox Palo Alto Research Centre, Oak Ridge National Laboratory, and the Ohio State University in the United States. He holds a PhD. degree in Computer Science from Indiana University, Bloomington, USA, and Bachelors and Masters degrees from the Indian Institutes of Technology, Kanpur and Madras, respectively.      ",
                    "Venkatesh's current research interests are in formal methods and software architectures. In addition, he has an interest in computer science education and FOSS-based educational technology. He has published over 40 research papers and technical reports in the area of automated deduction, type systems, formal methods, and compilers for high performance computing. He holds one US patent.      "
                ],
                abt: `Venkatesh Choppella is Associate Professor at the International Institute of Information Technology Hyderabad, India. He was also associated with Indian Institute of Information Technology and Management – Kerala, Trivandrum, and is currently adjunct faculty at IIIT Bangalore.\nHe has held research and engineering positions in Hewlett Packard, Xerox Palo Alto Research Centre, Oak Ridge National Laboratory, and the Ohio State University in the United States. He holds a PhD. degree in Computer Science from Indiana University, Bloomington, USA, and Bachelors and Masters degrees from the Indian Institutes of Technology, Kanpur and Madras, respectively.\nVenkatesh's current research interests are in formal methods and software architectures. In addition, he has an interest in computer science education and FOSS-based educational technology. He has published over 40 research papers and technical reports in the area of automated deduction, type systems, formal methods, and compilers for high performance computing. He holds one US patent.`,
                dblpurl: "https://dblp.org/pid/44/7025.xml"
            },
            {
                name: 'Vasudeva Varma',
                imageurl: "images/people/DSC_0320.jpg",
                job: "Professor & Dean (Research)",
                areas: ['Information Retrieval',
                    'Social Media Analysis',
                    'Semantic Search',
                    'Cloud Computing and Software Engineering'
                ],
                about: [
                    "Vasudeva Varma is a Professor and the Dean (Research) at IIIT Hyderabad. His research interests include search (information retrieval), information extraction, information access, cloud computing and software engineering. He heads the Search and Information Extraction Lab at IIIT Hyderabad. He is the CEO of IIIT Hyderabad Foundation, which runs one of the largest technology incubators in India. The Foundation manages IIIT-H’s IP and technology transfers.      ",
                    "He published a book on Software Architecture (Pearson Education) and close to two hundred technical papers in journals and conferences. In 2004, he obtained young scientist award and grant from Department of Science and Technology, Government of India, for his proposal on personalized search engines. In 2007, he was given Research Faculty Award by AOL Labs.      ",
                    "He co-founded SETU Software Systems Pvt Ltd, a technology start-up along with Dr. Prasad Pingali (Vasu’s first PhD student) which is focused on solving information access problems using unstructured data analytics.      ",
                    "He was visiting professor at UPV, Valencia, Spain (Summer 2007), UBO, Bretagne, France (Summer 2009) and Language Technologies Institute, CMU, Pittsburgh, USA (Summer 2010)"
                ],
                abt: `Vasudeva Varma is a Professor and the Dean (Research) at IIIT Hyderabad. His research interests include search (information retrieval), information extraction, information access, cloud computing and software engineering. He heads the Search and Information Extraction Lab at IIIT Hyderabad. He is the CEO of IIIT Hyderabad Foundation, which runs one of the largest technology incubators in India. The Foundation manages IIIT-H’s IP and technology transfers.\nHe published a book on Software Architecture (Pearson Education) and close to two hundred technical papers in journals and conferences. In 2004, he obtained young scientist award and grant from Department of Science and Technology, Government of India, for his proposal on personalized search engines. In 2007, he was given Research Faculty Award by AOL Labs.\nHe co-founded SETU Software Systems Pvt Ltd, a technology start-up along with Dr. Prasad Pingali (Vasu’s first PhD student) which is focused on solving information access problems using unstructured data analytics.\nHe was visiting professor at UPV, Valencia, Spain (Summer 2007), UBO, Bretagne, France (Summer 2009) and Language Technologies Institute, CMU, Pittsburgh, USA (Summer 2010)`,
                dblpurl: "https://dblp.org/pid/03/4045.xml"
            },
            {
                name: 'Ramesh Loganathan',
                imageurl: "images/people/Ramesh.jpg",
                job: "PROFESSOR CO-INNOVATION",
                areas: ['Innovation and Processes for Applied Research'],
                about: [
                    "After 25 years in the product R&D space, on Dec 2015, moved full-time into academics. As Professor Co-Innovation, heading the Research/Innovation outreach at IIIT Hyderabad. helping start and grow the Technology Transfer Office, Co-Innovation (corp) labs, Entrepreneur On Residence program and the Centre for Innovation & Entrepreneurship. Have been adjunct faculty (middleware systems) at IIIT-H since 2002, visiting faculty at IIT Hyderabad (Innovation), member of governing board of incubators at IIIT-H, IIT and BITS.      ",
                    "Until recently, Center Head (& Vice President- Products), Progress Software's Hyderabad labs, responsible for leading the product development at the Hyderabad Development centre. As Center Head, Built a formidable product engineering group that now owns half of the engineering in the company. And is widely seen as a very Innovation centred engineering group (won national awards). Prior to taking the above position, was VP of Middleware Technologies at Pramati, heading Product Engineering.      ",
                    "An accomplished Technologist, with over 20 years of product engineering and R&D leadership experience. Regularly speak at tech workshops and seminars in India. Recently co-authored a book on ‘SOA approach to Integration’, published by Packt Publishers. Member of several Standards Expert groups including J2EE 1.3. Active in Product/Startup circles."
                ],
                abt: `After 25 years in the product R&D space, on Dec 2015, moved full-time into academics. As Professor Co-Innovation, heading the Research/Innovation outreach at IIIT Hyderabad. helping start and grow the Technology Transfer Office, Co-Innovation (corp) labs, Entrepreneur On Residence program and the Centre for Innovation & Entrepreneurship. Have been adjunct faculty (middleware systems) at IIIT-H since 2002, visiting faculty at IIT Hyderabad (Innovation), member of governing board of incubators at IIIT-H, IIT and BITS.\nUntil recently, Center Head (& Vice President- Products), Progress Software's Hyderabad labs, responsible for leading the product development at the Hyderabad Development centre. As Center Head, Built a formidable product engineering group that now owns half of the engineering in the company. And is widely seen as a very Innovation centred engineering group (won national awards). Prior to taking the above position, was VP of Middleware Technologies at Pramati, heading Product Engineering.\nAn accomplished Technologist, with over 20 years of product engineering and R&D leadership experience. Regularly speak at tech workshops and seminars in India. Recently co-authored a book on ‘SOA approach to Integration’, published by Packt Publishers. Member of several Standards Expert groups including J2EE 1.3. Active in Product/Startup circles.`,
                dblpurl: "https://dblp.org/pid/136/4557.xml"
            },
            {
                name: 'Kesav V. Nori',
                imageurl: "images/people/nori.jpg",
                job: "Distinguished Professor",
                areas: ['Computer Science Education',
                    'Software Archtiecture',
                    'Compilers',
                    'Technology for Education'
                ],
                about: [
                    "Professor Kesav Vithal Nori is executive Director and executive Vice President of Tata Consultancy Services (TCS) and is one of the pioneers of TCS's computer-based adult literacy programme which has been successful all over India and in South Africa. Nori has a distinguished career that has alternated between academics and industrial research within TCS. Previously, Nori was with the Tata Research Development and Design Centre (TRDDC), the R&D wing of TCS. Nori received his MTech from IIT Kanpur where he continued to work as a senior research associate from 1968 to 1970. Nori then became a research scientist at the Computer Group in the Tata Institute of Fundamental Research (TIFR). He then returned to teach at IIT Kanpur. In addition, Nori was Visiting Faculty at Carnegie Mellon University (CMU) in Pittsburgh, USA and finally returned to TRDDC and TCS.",
                ],
                abt: `Professor Kesav Vithal Nori is executive Director and executive Vice President of Tata Consultancy Services (TCS) and is one of the pioneers of TCS's computer-based adult literacy programme which has been successful all over India and in South Africa. Nori has a distinguished career that has alternated between academics and industrial research within TCS. Previously, Nori was with the Tata Research Development and Design Centre (TRDDC), the R&D wing of TCS. Nori received his MTech from IIT Kanpur where he continued to work as a senior research associate from 1968 to 1970. Nori then became a research scientist at the Computer Group in the Tata Institute of Fundamental Research (TIFR). He then returned to teach at IIT Kanpur. In addition, Nori was Visiting Faculty at Carnegie Mellon University (CMU) in Pittsburgh, USA and finally returned to TRDDC and TCS.`,
                dblpurl: "https://dblp.org/pid/08/11295.xml"
            },
            {
                name: 'Viswanath Kasturi',
                imageurl: "images/people/Viswanath_Kasturi_bGLSrXt.jpg",
                job: "Research Professor of Eminence",
                areas: ['Mathematical Computer Science', 'Pedagogical issues'],
                about: [""],
                abt: `Type something`,
                dblpurl: "https://dblp.org/pid/39/7116.xml"
            },
            ],
        };
    }



    componentDidMount() {

        // console.log(localStorage.getItem("mahesh"));
        // console.log(localStorage.getItem("manoj"));
        var PPP = JSON.parse(localStorage.getItem("people"));
        for (var i = 0; i < PPP.length; i++) {
            fetch(PPP[i].dblpurl)
                .then(res => res.text())
                .then((xmlString) => {
                    var xmlDoc = $.parseXML(xmlString);
                    var $xml = $(xmlDoc);

                    var $1 = $($xml).find("person");
                    var $2 = $($1).find("author").last().text();
                    console.log($2);


                    var $person = $xml.find("r");

                    console.log(this.state.PEOPLE);
                    var facultyname = $2 + " Publications";
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
    }

    render() {
        return (
            <ChakraProvider >
                <div className="App" style={paddingStyle} >
                    <Router basename="/" >
                        { /* <Navigation /> */}
                        <T1 />
                        <Switch >
                            <Route path="/" exact component={() => < Home />} />
                            <Route path="/faculty" exact component={() => < Faculty />} />
                            <Route path="/phdstudents" exact component={() => < Faculty />} />
                            <Route path="/msstudents" exact component={() => < Faculty />} />
                            <Route path="/btstudents" exact component={() => < Faculty />} />
                            <Route path="/interns" exact component={() => < Faculty />} />
                            <Route path="/publications" exact component={() => < Publications />} />
                            <Route path="/research" exact component={() => < Research />} />
                            <Route path="/events" exact component={() => < Events />} />
                            <Route path="/projects" exact component={() => < Projects />} />
                            <Route path="/teaching" exact component={() => < Teaching />} />
                            <Route path="/links" exact component={() => < Links />} />
                            <Route path="/demos" exact component={() => < Demos />} />
                            <Route path="/dataset" exact component={() => < Dataset />} />
                            <Route path="/showcase" exact component={() => < Showcase />} />
                            <Route path="/contact" exact component={() => < Contact />} />

                            <Route path="/people/raghureddy" exact component={() => < SinglePerson person={this.state.PEOPLE[0]} />} />
                            <Route path="/people/venkateshchoppella" exact component={() => < SinglePerson person={this.state.PEOPLE[1]} />} />
                            <Route path="/people/vasudevavarma" exact component={() => < SinglePerson person={this.state.PEOPLE[2]} />} />
                            <Route path="/people/rameshloganathan" exact component={() => < SinglePerson person={this.state.PEOPLE[3]} />} />
                            <Route path="/people/kesavv.nori" exact component={() => < SinglePerson person={this.state.PEOPLE[4]} />} />
                            <Route path="/people/viswanathkasturi" exact component={() => < SinglePerson person={this.state.PEOPLE[5]} />} />

                        </Switch>
                        <Footer />
                    </Router>
                </div>
            </ChakraProvider>
        );
    }
}

export default App;

const NEWS = [
    "Software Engineering Research Center(SERC) has a eminent faculty with vast teaching and research experience in and outside India. ",
    "SERC has close collaboration with industry providing software services to large organizations, R&D labs of various organizations and other academic institutes (India and abroad). Organizations that SERC is working are diverse, stratified across banking and finance, government, equipment manufacture, ISVs building products for software industry, etc.  ",
    "During his tenure as a researcher he has worked on projects with MHRD, CA Technologies, Nokia Inc., Alstom Signaling Inc., TCN Telecom Consulting Group, QWest Communications, etc.  ",
    "He is Currently the Head of the Software Engineering Research Center (SERC) at IIIT-Hyderabad and the CA Technologies Endowed Faculty Chair at IIIT Hyderabad. He was previously the IIIT lead for CA Technologies - IIIT Hyderabad Innovation Center established at CA Technologies, Gachibowli, Hyderabad.  ",
    "During his tenure as a researcher he has worked on projects with MHRD, CA Technologies, Nokia Inc., Alstom Signaling Inc., TCN Telecom Consulting Group, QWest Communications, etc.  ",
    "Venkatesh Choppella is Associate Professor at the International Institute of Information Technology Hyderabad, India. He was also associated with Indian Institute of Information Technology and Management – Kerala, Trivandrum, and is currently adjunct faculty at IIIT Bangalore.  ",
    "He has held research and engineering positions in Hewlett Packard, Xerox Palo Alto Research Centre, Oak Ridge National Laboratory, and the Ohio State University in the United States. He holds a PhD. degree in Computer Science from Indiana University, Bloomington, USA, and Bachelors and Masters degrees from the Indian Institutes of Technology, Kanpur and Madras, respectively.  "
];

const PEOPLE = [
    {
        name: "Raghu Reddy",
        imageurl: "images/people/6.jpg",
        job: "Associate Professor & Head",
        areas: ['Model Driven Development',
            'Software Requirements and Architecture',
            'Verification & Validation',
            'Usability and Software engineering education'
        ],
        abt: `Dr. Y. Raghu Reddy works as an Associate Professor at International Institute of Information Technology, Hyderabad, India. His specialization is in Software Engineering. His primary research interests are in design and construction of complex software systems. He has published number of peer reviewed publications in these areas. He has also published a book titled: Aspect oriented software development: An approach to composing UML design models in 2009. He is a part of several national and international conference committees.\nHe is Currently the Head of the Software Engineering Research Center (SERC) at IIIT-Hyderabad and the CA Technologies Endowed Faculty Chair at IIIT Hyderabad. He was previously the IIIT lead for CA Technologies - IIIT Hyderabad Innovation Center established at CA Technologies, Gachibowli, Hyderabad.\nIn his previous life, Dr. Reddy worked as an Assistant professor with the Department of Software Engineering at Rochester Institute of Technology (RIT), USA. He played a major role in building the Software Engineering Master’s program at RIT. He developed and taught courses at the undergraduate and graduate level. Earlier, he worked as an Instructor at Colorado State University. He obtained his Ph.D. in Computer Science from Colorado State University, Fort Collins, USA.\nDuring his tenure as a researcher he has worked on projects with MHRD, CA Technologies, Nokia Inc., Alstom Signaling Inc., TCN Telecom Consulting Group, QWest Communications, etc.`,
        about: [
            "Dr. Y. Raghu Reddy works as an Associate Professor at International Institute of Information Technology, Hyderabad, India. His specialization is in Software Engineering. His primary research interests are in design and construction of complex software systems. He has published number of peer reviewed publications in these areas. He has also published a book titled: Aspect oriented software development: An approach to composing UML design models in 2009. He is a part of several national and international conference committees.",
            "He is Currently the Head of the Software Engineering Research Center (SERC) at IIIT-Hyderabad and the CA Technologies Endowed Faculty Chair at IIIT Hyderabad. He was previously the IIIT lead for CA Technologies - IIIT Hyderabad Innovation Center established at CA Technologies, Gachibowli, Hyderabad.      ",
            "In his previous life, Dr. Reddy worked as an Assistant professor with the Department of Software Engineering at Rochester Institute of Technology (RIT), USA. He played a major role in building the Software Engineering Master’s program at RIT. He developed and taught courses at the undergraduate and graduate level. Earlier, he worked as an Instructor at Colorado State University. He obtained his Ph.D. in Computer Science from Colorado State University, Fort Collins, USA.      ",
            "During his tenure as a researcher he has worked on projects with MHRD, CA Technologies, Nokia Inc., Alstom Signaling Inc., TCN Telecom Consulting Group, QWest Communications, etc."
        ],
        dblpurl: "https://dblp.org/pid/r/RaghuReddy.xml"
    },
    {
        name: 'Venkatesh Choppella',
        imageurl: "images/people/Venkatesh_Choppella.jpg",
        job: "Associate Professor",
        areas: ['Programming Languages',
            'S/W Architectures',
            'Formal Methods',
            'CS Education'
        ],
        about: [
            "Venkatesh Choppella is Associate Professor at the International Institute of Information Technology Hyderabad, India. He was also associated with Indian Institute of Information Technology and Management – Kerala, Trivandrum, and is currently adjunct faculty at IIIT Bangalore.      ",
            "He has held research and engineering positions in Hewlett Packard, Xerox Palo Alto Research Centre, Oak Ridge National Laboratory, and the Ohio State University in the United States. He holds a PhD. degree in Computer Science from Indiana University, Bloomington, USA, and Bachelors and Masters degrees from the Indian Institutes of Technology, Kanpur and Madras, respectively.      ",
            "Venkatesh's current research interests are in formal methods and software architectures. In addition, he has an interest in computer science education and FOSS-based educational technology. He has published over 40 research papers and technical reports in the area of automated deduction, type systems, formal methods, and compilers for high performance computing. He holds one US patent.      "
        ],
        abt: `Venkatesh Choppella is Associate Professor at the International Institute of Information Technology Hyderabad, India. He was also associated with Indian Institute of Information Technology and Management – Kerala, Trivandrum, and is currently adjunct faculty at IIIT Bangalore.\nHe has held research and engineering positions in Hewlett Packard, Xerox Palo Alto Research Centre, Oak Ridge National Laboratory, and the Ohio State University in the United States. He holds a PhD. degree in Computer Science from Indiana University, Bloomington, USA, and Bachelors and Masters degrees from the Indian Institutes of Technology, Kanpur and Madras, respectively.\nVenkatesh's current research interests are in formal methods and software architectures. In addition, he has an interest in computer science education and FOSS-based educational technology. He has published over 40 research papers and technical reports in the area of automated deduction, type systems, formal methods, and compilers for high performance computing. He holds one US patent.`,
        dblpurl: "https://dblp.org/pid/44/7025.xml"
    },
    {
        name: 'Vasudeva Varma',
        imageurl: "images/people/DSC_0320.jpg",
        job: "Professor & Dean (Research)",
        areas: ['Information Retrieval',
            'Social Media Analysis',
            'Semantic Search',
            'Cloud Computing and Software Engineering'
        ],
        about: [
            "Vasudeva Varma is a Professor and the Dean (Research) at IIIT Hyderabad. His research interests include search (information retrieval), information extraction, information access, cloud computing and software engineering. He heads the Search and Information Extraction Lab at IIIT Hyderabad. He is the CEO of IIIT Hyderabad Foundation, which runs one of the largest technology incubators in India. The Foundation manages IIIT-H’s IP and technology transfers.      ",
            "He published a book on Software Architecture (Pearson Education) and close to two hundred technical papers in journals and conferences. In 2004, he obtained young scientist award and grant from Department of Science and Technology, Government of India, for his proposal on personalized search engines. In 2007, he was given Research Faculty Award by AOL Labs.      ",
            "He co-founded SETU Software Systems Pvt Ltd, a technology start-up along with Dr. Prasad Pingali (Vasu’s first PhD student) which is focused on solving information access problems using unstructured data analytics.      ",
            "He was visiting professor at UPV, Valencia, Spain (Summer 2007), UBO, Bretagne, France (Summer 2009) and Language Technologies Institute, CMU, Pittsburgh, USA (Summer 2010)"
        ],
        abt: `Vasudeva Varma is a Professor and the Dean (Research) at IIIT Hyderabad. His research interests include search (information retrieval), information extraction, information access, cloud computing and software engineering. He heads the Search and Information Extraction Lab at IIIT Hyderabad. He is the CEO of IIIT Hyderabad Foundation, which runs one of the largest technology incubators in India. The Foundation manages IIIT-H’s IP and technology transfers.\nHe published a book on Software Architecture (Pearson Education) and close to two hundred technical papers in journals and conferences. In 2004, he obtained young scientist award and grant from Department of Science and Technology, Government of India, for his proposal on personalized search engines. In 2007, he was given Research Faculty Award by AOL Labs.\nHe co-founded SETU Software Systems Pvt Ltd, a technology start-up along with Dr. Prasad Pingali (Vasu’s first PhD student) which is focused on solving information access problems using unstructured data analytics.\nHe was visiting professor at UPV, Valencia, Spain (Summer 2007), UBO, Bretagne, France (Summer 2009) and Language Technologies Institute, CMU, Pittsburgh, USA (Summer 2010)`,
        dblpurl: "https://dblp.org/pid/03/4045.xml"
    },
    {
        name: 'Ramesh Loganathan',
        imageurl: "images/people/Ramesh.jpg",
        job: "PROFESSOR CO-INNOVATION",
        areas: ['Innovation and Processes for Applied Research'],
        about: [
            "After 25 years in the product R&D space, on Dec 2015, moved full-time into academics. As Professor Co-Innovation, heading the Research/Innovation outreach at IIIT Hyderabad. helping start and grow the Technology Transfer Office, Co-Innovation (corp) labs, Entrepreneur On Residence program and the Centre for Innovation & Entrepreneurship. Have been adjunct faculty (middleware systems) at IIIT-H since 2002, visiting faculty at IIT Hyderabad (Innovation), member of governing board of incubators at IIIT-H, IIT and BITS.      ",
            "Until recently, Center Head (& Vice President- Products), Progress Software's Hyderabad labs, responsible for leading the product development at the Hyderabad Development centre. As Center Head, Built a formidable product engineering group that now owns half of the engineering in the company. And is widely seen as a very Innovation centred engineering group (won national awards). Prior to taking the above position, was VP of Middleware Technologies at Pramati, heading Product Engineering.      ",
            "An accomplished Technologist, with over 20 years of product engineering and R&D leadership experience. Regularly speak at tech workshops and seminars in India. Recently co-authored a book on ‘SOA approach to Integration’, published by Packt Publishers. Member of several Standards Expert groups including J2EE 1.3. Active in Product/Startup circles."
        ],
        abt: `After 25 years in the product R&D space, on Dec 2015, moved full-time into academics. As Professor Co-Innovation, heading the Research/Innovation outreach at IIIT Hyderabad. helping start and grow the Technology Transfer Office, Co-Innovation (corp) labs, Entrepreneur On Residence program and the Centre for Innovation & Entrepreneurship. Have been adjunct faculty (middleware systems) at IIIT-H since 2002, visiting faculty at IIT Hyderabad (Innovation), member of governing board of incubators at IIIT-H, IIT and BITS.\nUntil recently, Center Head (& Vice President- Products), Progress Software's Hyderabad labs, responsible for leading the product development at the Hyderabad Development centre. As Center Head, Built a formidable product engineering group that now owns half of the engineering in the company. And is widely seen as a very Innovation centred engineering group (won national awards). Prior to taking the above position, was VP of Middleware Technologies at Pramati, heading Product Engineering.\nAn accomplished Technologist, with over 20 years of product engineering and R&D leadership experience. Regularly speak at tech workshops and seminars in India. Recently co-authored a book on ‘SOA approach to Integration’, published by Packt Publishers. Member of several Standards Expert groups including J2EE 1.3. Active in Product/Startup circles.`,
        dblpurl: "https://dblp.org/pid/136/4557.xml"
    },
    {
        name: 'Kesav V. Nori',
        imageurl: "images/people/nori.jpg",
        job: "Distinguished Professor",
        areas: ['Computer Science Education',
            'Software Archtiecture',
            'Compilers',
            'Technology for Education'
        ],
        about: [
            "Professor Kesav Vithal Nori is executive Director and executive Vice President of Tata Consultancy Services (TCS) and is one of the pioneers of TCS's computer-based adult literacy programme which has been successful all over India and in South Africa. Nori has a distinguished career that has alternated between academics and industrial research within TCS. Previously, Nori was with the Tata Research Development and Design Centre (TRDDC), the R&D wing of TCS. Nori received his MTech from IIT Kanpur where he continued to work as a senior research associate from 1968 to 1970. Nori then became a research scientist at the Computer Group in the Tata Institute of Fundamental Research (TIFR). He then returned to teach at IIT Kanpur. In addition, Nori was Visiting Faculty at Carnegie Mellon University (CMU) in Pittsburgh, USA and finally returned to TRDDC and TCS.      ",
        ],
        abt: `Professor Kesav Vithal Nori is executive Director and executive Vice President of Tata Consultancy Services (TCS) and is one of the pioneers of TCS's computer-based adult literacy programme which has been successful all over India and in South Africa. Nori has a distinguished career that has alternated between academics and industrial research within TCS. Previously, Nori was with the Tata Research Development and Design Centre (TRDDC), the R&D wing of TCS. Nori received his MTech from IIT Kanpur where he continued to work as a senior research associate from 1968 to 1970. Nori then became a research scientist at the Computer Group in the Tata Institute of Fundamental Research (TIFR). He then returned to teach at IIT Kanpur. In addition, Nori was Visiting Faculty at Carnegie Mellon University (CMU) in Pittsburgh, USA and finally returned to TRDDC and TCS.`,
        dblpurl: "https://dblp.org/pid/08/11295.xml"
    },
    {
        name: 'Viswanath Kasturi',
        imageurl: "images/people/Viswanath_Kasturi_bGLSrXt.jpg",
        job: "Research Professor of Eminence",
        areas: ['Mathematical Computer Science', 'Pedagogical issues'],
        about: [""],
        abt: `Type something`,
        dblpurl: "https://dblp.org/pid/39/7116.xml"
    },
];