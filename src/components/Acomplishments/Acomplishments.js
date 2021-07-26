import React from 'react';
import Link from 'next/link';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

// const data = [
//   { number: 20, text: 'Open Source Projects'},
//   { number: 1000, text: 'Students', },
//   { number: 1900, text: 'Github Followers', },
//   { number: 5000, text: 'Github Stars', }
// ];

const Acomplishments = () => (
  <Section>
    <SectionTitle>Personal Accomplishments</SectionTitle>
    <Boxes>
      {/* {data.map((card, index) => (
        <Box key={index}>
          <BoxNum>{card.number}</BoxNum>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))} */}
        <Link href="https://auth.geeksforgeeks.org/user/sushant987/profile">
          <Box>
            <BoxNum>200+</BoxNum>
            <Link href="https://auth.geeksforgeeks.org/user/sushant987/profile">
              <BoxText>Problems solved on GeeksForGeeks</BoxText>
            </Link>
          </Box> 
        </Link> 

        <Link href="https://www.hackerrank.com/sushantdutta07">
          <Box>
            <BoxNum>4</BoxNum>
            <Link href="https://www.hackerrank.com/sushantdutta07">
              <BoxText>Star rating on HackerRank</BoxText>
            </Link>
          </Box> 
        </Link> 

         {/* <Link href="https://udemy-certificate.s3.amazonaws.com/pdf/UC-f6dd8ab3-f5f6-4b0d-8763-c32789c368f9.pdf"> */}
        <Link href="https://drive.google.com/file/d/1Bo8Qf2O8br3g-c8RCeDFeHFpNH7WBrXG/view?usp=sharing">
          <Box>
            <BoxNum>Internship</BoxNum>
            <Link href="https://drive.google.com/file/d/1Bo8Qf2O8br3g-c8RCeDFeHFpNH7WBrXG/view?usp=sharing">
              <BoxText>Worked as a Web Developer in RYD</BoxText>
            </Link>
          </Box> 
        </Link> 

         <Link href="https://drive.google.com/file/d/19Kg7SnyP9KpE0U-mFXenA8YxXbjzxAXX/view?usp=sharing">
          <Box>
            <BoxNum>LCO</BoxNum>
            <Link href="https://drive.google.com/file/d/19Kg7SnyP9KpE0U-mFXenA8YxXbjzxAXX/view?usp=sharing">
              <BoxText>MERN stack development</BoxText>
            </Link>
          </Box> 
        </Link> 

      </Boxes>
  </Section>
);

export default Acomplishments;
