import React, { useState } from "react";
import { MdAssignment } from "react-icons/md";
// import $ from 'jquery';
// import {findDOMNode} from 'react-dom';
import { Component } from "react";
import {
  UnorderedList,
  ListIcon,
  List,
  Avatar,
  ListItem,
  Box,
  chakra,
  Container,
  Flex,
  Icon,
  Input,
  Image,
  SimpleGrid,
  useColorModeValue,
} from '@chakra-ui/react';


const headerStyle = {
  fontSize: "80px",
}

const headerStyleSmall = {
  fontSize: "40px",
}



export default function Publications() {


  const [filter, setFilter] = useState('');

  return (
    <div className="about">
      <div className="row">
        <div className="col-lg-2"></div>
        <div className="col-lg-8">
          <chakra.h1 style={headerStyle}>Research</chakra.h1>
        </div>
        <div className="col-lg-2"></div>
      </div>
      <div className="row">
        <div className="col-lg-2"></div>
        <div className="col-lg-8">
          <chakra.p>
            To lead the software engineering research in India by addressing India specific issues in an industry driven environment.The SERC is a research and development center at IIIT Hyderabad conducting research in various domains of software engineering. The main objectives of SERC are to promote quality software development at universities through University Software Development Center and to operate closely with the industry by estabilishing touch points.
          </chakra.p>
        </div>
        <div className="col-lg-2"></div>
      </div>

      <hr></hr>
      <div className="row">
        <div className="col-lg-2"></div>
        <div className="col-lg-8" style={headerStyleSmall}><h1>
          Conference and Workshop
        </h1></div>
        <div className="col-lg-2"></div>

      </div>


      <div className="row">
        <div className="col-lg-2">            </div>
        <div className="col-lg-8">
          <chakra.p>
            Type to filter the list:
            <Input id="filter"
              name="filter"
              type="text"
              value={filter}
              onChange={event => setFilter(event.target.value)}
            />
          </chakra.p>
          <List spacing={3}>
            {PUBLICATIONS.filter(f => f.includes(filter) || filter === '')
              .map(f => <ListItem key={f}><ListIcon as={MdAssignment} color="green.500" />{f}</ListItem>)}
          </List>
        </div>
        <div className="col-lg-2">            </div>

      </div>

      <hr></hr>
      <div className="row">
        <div className="col-lg-2"></div>
        <div className="col-lg-8" style={headerStyleSmall}><h1>
          Journals
        </h1></div>
        <div className="col-lg-2"></div>

      </div>


      <div className="row">
        <div className="col-lg-2">            </div>
        <div className="col-lg-8">
          <chakra.p>
            Type to filter the list:
            <Input id="filter"
              name="filter"
              type="text"
              value={filter}
              onChange={event => setFilter(event.target.value)}
            />
          </chakra.p>
          <List spacing={3}>
            {JOURNALS.filter(f => f.includes(filter) || filter === '')
              .map(f => <ListItem key={f}><ListIcon as={MdAssignment} color="green.500" />{f}</ListItem>)}
          </List>
        </div>
        <div className="col-lg-2">            </div>

      </div>


    </div>
  );
  // }
}

const PUBLICATIONS = [
  "Shivang Shekar, Pranav Reddy Pesaladinne, Sai Anirudh Karre, Y Raghu Reddy: \"VREye: Exploring Human Visual Acuity Test Using Virtual Reality\" 22nd HCI International Conference, HCII 2020, Copenhagen, Denmark, July 19-24, 2020, Proceedings, Part II. Lecture Notes in Computer Science 12191, Springer 2020, ISBN 978-3-030-49697-5 2020 ",
  "Kodilkar, J; Kumthekar, V; Uprade, R; Kanade, C; Bhong, D; Sherkar, S; Nayak, S; Gupta, Y; Thigale, K; Amin, B;: \"Next Generation GMRT Monitor and Control System\" ASPC 2020 (pp. 667) ",
  "Subhrojyoti Roy Chaudhuri, Amar Banerjee, N. Swaminathan, Venkatesh Choppella, Arpan Pal, P. Balamurali: \"A knowledge centric approach to conceptualizing robotic solutions.\" ISEC 2019 (pp. 12:1-12:11) ",
  "Venkatesh Choppella, Aseem Rastogi: \"Tutorials and Technical Briefings at ISEC 2019.\" ISEC 2019 (pp. 33:1-33:2) ",
  "Sai Anirudh Karre, Neeraj Mathur, Y. Raghu Reddy: \"Is Virtual Reality Product Development different?: An Empirical Study on VR Product Development Practices.\" ISEC 2019 (pp. 3:1-3:11) ",
  "Sai Anirudh Karre, Neeraj Mathur, Y. Raghu Reddy: \"Usability evaluation of VR products in industry: a systematic literature review.\" SAC 2019 (pp. 1845-1851) ",
  "Ravi Shankar Pillutla, Lalit Mohan, Venkatesh Choppella, Avni Jesrani, Priya Raman, Y Raghu Reddy: \"Towards Massively Open Online Virtual Internships in Computing Education\" The Tenth International Conference on Technology for Education 2019 ",
  "Lalit Mohan, Jahfar Ali, Syed Mohd Ali Rizwi, Y Raghu Babu Reddy, Dipti M Sharma: \"Text Cohesion in CQA-Does it Impact Rating?\" The Seventh International Conference on Mining Intelligence and Knowledge Exploration (MIKE 2019) 2019 ",
  "Vivek Iyer, Lalit Mohan, Y Raghu Babu Reddy, Mehar Bhatia: \"A Survey on Ontology Enrichment from Text\" The sixteenth International Conference on Natural Language Processing (ICON-2019) 2019 ",
  "Chaudhuri, Subhrojyoti Roy; Banerjee, Amar; Swaminathan, N; Choppella, Venkatesh; Pal, Arpan; Balamurali, P;: \"A knowledge centric approach to conceptualizing robotic solutions\" Proceedings of the 12th Innovations on Software Engineering Conference (formerly known as India Software Engineering Conference) 2019 (pp. 01-09) ",
  "Roy Chaudhuri, Subhrojyoti; Natarajan, Swaminathan; Banerjee, Amar; Choppella, Venkatesh;: \"Methodology to develop domain specific modeling languages\" Proceedings of the 17th ACM SIGPLAN International Workshop on Domain-Specific Modeling 2019 (pp. 01-08) ",
  "Gollapudi V. R. J. Sai Prasad, Venkatesh Choppella, Sridhar Chimalakonda: \"A Style Sheets Based Approach for Semantic Transformation of Web Pages.\" ICDCIT 2018 (pp. 240-255) ",
  "Gollapudi V. R. J. Sai Prasad, Sridhar Chimalakonda, Venkatesh Choppella: \"Towards a Domain-Specific Language for the Renarration of Web Pages.\" ISEC 2018 (pp. 3:1-3:10) ",
  "Amar Banerjee, Venkatesh Choppella, Viswanath Kasturi, Swaminathan Natarajan, Padmalata V. Nistala, Kesav V. Nori: \"An Attempt at Explicating the Relationship between Knowledge, Systems and Engineering.\" ISEC 2018 (pp. 5:1-5:11) ",
  ": \"Peterson’s Mutual Exclusion Algorithm as Feedback Control.\" 2nd Symposium on Application of Formal Methods for Safety Security of Critical Systems 2018 ",
  "Lalit Mohan Sanagavarapu, Neeraj Mathur, Shriyansh Agrawal, Y. Raghu Reddy: \"SIREN - Security Information Retrieval and Extraction eNgine.\" ECIR 2018 (pp. 811-814) ",
  "Neeraj Mathur, Sai Aniruddh Karre, Lalit Mohan Sanagavarapu, Y Raghu Reddy: \"Analysis of FinTech Mobile App Usability for Geriatric Users in India.\" Proceedings of the 4th International Conference on HCI and UX 2018 ",
  "Lalit Mohan, Sourav Sarangi, Y Raghu Reddy, Vasudeva Varma: \"Fine Grained Approach for Domain Specific Seed URL Extraction.\" Proceedings of the 51st Hawaii International Conference on System Sciences 2018 ",
  "Lalit Mohan Sanagavarapu, Y. Raghu Reddy: \"Crowdsourcing security: opportunities and challenges.\" CHASE@ICSE 2018 (pp. 37-40) ",
  "Neeraj Mathur, Sai Anirudh Karre, Y. Raghu Reddy: \"Usability Evaluation Framework for Mobile Apps using Code Analysis.\" EASE 2018 (pp. 187-192) "
];

const JOURNALS = [
  "Siddharth Bhatore, Lalit Mohan, Y Raghu Reddy: \"Machine learning techniques for credit risk evaluation: a systematic literature review\" Journal of Banking and Financial Technology 2020 (pp. 1-28) ",
  "Sai Anirudh Karre, Neeraj Mathur, Y Raghu Reddy: \"Understanding usability evaluation setup for VR products in industry: a review study\" ACM SIGAPP Applied Computing Review 2020 (pp. 17-27) ",
  "Vinamra Benara, Sahithi Rampalli, Ziaul Choudhury, Suresh Purini, Uday Bondhugula: \"Synthesizing Power and Area Efficient Image Processing Pipelines on FPGAs using Customized Bit-widths.\" CoRR 2018 ",
  ": \"Generalised Dining Philosophers as Feedback Control.\" CoRR 2018 ",
  "Lalit Mohan Sanagavarapu, G. R. Gangadharan, Y. Raghu Reddy: \"KIET Framework for Cloud Adoption: Indian Banking Case Study.\" IJCAC 2018 (pp. 72-87) ",
  "Sai Anirudh Karre, Anveshi Shukla, Y. Raghu Reddy: \"Does your Bug Tracking tool suit your needs? A Study on Open Source Bug Tracking tools.\" CoRR 2017 ",
  "DaeKyoo Kim, Eunjee Song, Jungwoo Ryoo, Y Raghu Reddy: \"Special issue on software reuse.\" Software: Practice and Experience 2017 (pp. 941-942 (Volume 47)) ",
  "Sai Anirudh Karre, Y Raghu Reddy: \"Heuristic Approaches to Improve Product Quality in Large Scale Integrated Software Products\" Communications in Computer and Information Science (CCIS) 2016 (pp. 80-97) ",
  "Sridhar Chimalakonda, Dan Hyung Lee: \"On the Evolution of Software and Systems Product Line Standards.\" ACM SIGSOFT Software Engineering Notes 2016 (pp. 27-30) ",
  "Naveen N. Kulkarni, Vasudeva Varma: \"Perils of opportunistically reusing software module\" Software: Practice and Experience,Wiley Online Library 2016 ",
  "A Sureka, Y. R. Reddy, P. Muenchaisri, M. Tsunoda: \"A Report on Software Engineering Education Workshop (SEEW) 2014 Co-Located with Asia-Pacific Software Engineering Conference 2014\" SIGSOFT Software Engineering Notes 2015 (pp. 40-43) ",
  "Sridhar Chimalakonda, Y. Raghu Reddy, Rakesh Shukla: \"Moving Beyond: Insights from 1st International Workshop on Software Engineering Research and Industrial Practices (SER&IPs 2014).\" ACM SIGSOFT Software Engineering Notes 2015 (pp. 28-31) ",
  "Lalit Mohan S., Neeraj Mathur, Y. Raghu Reddy: \"Improving Mobile Banking Usability Based on Sentiments.\" Communications in Computer and Information Science (CCIS) 2015 (pp. 180-194) ",
  "Krishna Chaitanya Telikicherla, Venkatesh Choppella, Bruhadeshwar Bezawada: \"CORP: A Browser Policy to Mitigate Web Infiltration Attacks.\" Information Systems Security, volume 8880 of LNCS, 2014 2014 (pp. 277-297) ",
  "Suresh Purini, Lakshya Jain: \"Finding good optimization sequences covering program space.\" TACO 9(4) 2013 (pp. 56) ",
  "Venkata Rao Kuchibhotla, Viswanath Kasturi: \"On the Definition of Non-deterministic Mechanisms\" CoRR 2011 ",
  "Bharghava Rajaram, Abinesh Ramachandran, Suresh Purini, R. Govindarajulu: \"Design of Low Power Systems Using Inexact Logic Circuits.\" J. Low Power Electronics 2010 (pp. 401-414) ",
  "Kesav V. Nori: \"Requirements for design of processes.\" Software Process: Improvement and Practice 2009 (pp. 129-142) ",
  "Brian Henderson-Sellers, Robert France, Geri Georg, Raghu Reddy: \"A method engineering approach to developing aspect-oriented modelling processes based on the OPEN process framework\" Information and software technology 2007 (pp. 761-773) ",
  "Arnor Solberg, Devon Simmonds, Raghu Reddy, Robert France, Sudipto Ghosh, Jan yvind Aagedal: \"Developing Distributed Services Using an Aspect Oriented Model Driven Framework\" International Journal of Cooperative information Systems 2006 (pp. 535-564) "
];