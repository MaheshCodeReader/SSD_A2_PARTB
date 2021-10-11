import React from "react";
import { Container } from "@chakra-ui/layout";

import Carousel from "./Carousels/Carousel"
import HomeContent from "./SecondaryTemaplates/HomeContent"
import { Flex, Grid, GridItem } from "@chakra-ui/react";
import { TwitterTimelineEmbed, TwitterShareButton, TwitterFollowButton, TwitterHashtagButton, TwitterMentionButton, TwitterTweetEmbed, TwitterMomentShare, TwitterDMButton, TwitterVideoEmbed, TwitterOnAirButton } from 'react-twitter-embed';

import Marquee from 'react-marquee-master';



function Home() {

  let buffer = []

  let news = JSON.parse(localStorage.getItem("news"));
  for(let i = 0; i < news.length; i++){
    buffer.push(news[i]);
    buffer.push("-----------------------------");
  }


  return (
    <div className="home">
        
        <Carousel/>

      <HomeContent/>

      <Grid
        templateColumns={{base:"repeat(1, 1fr)", md:"repeat(1, 1fr)", lg:"repeat(2, 1fr)"}}
      //   bg={useColorModeValue("#F9FAFB", "gray.600")}
        p={50}
        w="full"
        alignItems="center"
        justifyContent="center"
      >

        <GridItem
          colSpan={{base:"1", md:"1", lg:"1"}}
          >

          <TwitterTimelineEmbed
            sourceType="profile"
            screenName="iiit_hyderabad"
            options={{height: 400}}
          />

                
        </GridItem>
        <GridItem
          colSpan={{base:"1", md:"1", lg:"1"}}>
                
                <Marquee 
                  marqueeItems={buffer} 
                  height={400}
                  width={100}
                  />

        </GridItem>

      </Grid>
      
    </div>
  );
}

export default Home;