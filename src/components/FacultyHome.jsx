import React from "react";
import PersonCard from "./SecondaryTemaplates/PersonCard"
import PeopleCard from "./SecondaryTemaplates/PeopleCard"

export default function Faculty() {
  return (
    <div className="about py-5">
      <div className="container">

        {/* <div class="row align-items-center my-5">
          <div class="col-lg-7">
            <img
              class="img-fluid rounded mb-4 mb-lg-0"
              src="http://placehold.it/900x400"
              alt="placeholder"
            />
          </div>
          <div class="col-lg-5">
            <h1 class="font-weight-light">Faculty</h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>
        </div> */}

        <PeopleCard people={FACULTIES} />

        {/* {FACULTIES.map((x) => (
          <PersonCard name={x.name} imageurl={x.imageurl} job={x.job} areas={x.areas} />
        ))} */}
      </div>
    </div>
  );
}

{/* <PersonCard name="Mahesh" imageurl="http://placehold.it/900x400" job="SWE" areas={['sing', 'dance']}/> */ }
const FACULTIES = [
  {
    name: 'Raghu Reddy',
    imageurl: "/images/people/6.jpg",
    job: "Associate Professor & Head",
    areas: ['Model Driven Development',
      'Software Requirements and Architecture',
      'Verification & Validation',
      'Usability and Software engineering education'
    ],
  },
  {
    name: 'Venkatesh Choppella',
    imageurl: "/images/people/Venkatesh_Choppella.jpg",
    job: "Associate Professor",
    areas: ['Programming Languages',
      'S/W Architectures',
      'Formal Methods',
      'CS Education'],
  },
  {
    name: 'Vasudeva Varma',
    imageurl: "/images/people/DSC_0320.jpg",
    job: "Professor & Dean (Research)",
    areas: ['Information Retrieval',
     'Social Media Analysis',
    'Semantic Search',
  'Cloud Computing and Software Engineering'],
  },
  {
    name: 'Ramesh Loganathan',
    imageurl: "/images/people/Ramesh.jpg",
    job: "PROFESSOR CO-INNOVATION",
    areas: ['Innovation and Processes for Applied Research'],
  },
  {
    name: 'Kesav V. Nori',
    imageurl: "/images/people/nori.jpg",
    job: "Distinguished Professor",
    areas: ['Computer Science Education',
     'Software Archtiecture',
    'Compilers',
    'Technology for Education'],
  },
  {
    name: 'Viswanath Kasturi',
    imageurl: "/images/people/Viswanath_Kasturi_bGLSrXt.jpg",
    job: "Research Professor of Eminence",
    areas: ['Mathematical Computer Science', 'Pedagogical issues'],
  },
];