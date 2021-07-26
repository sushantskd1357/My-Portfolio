import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        {/* Welcome To <br />
        My Personal Portfolio */}
        Hi, I' am <br />
        Susanta Kumar Dutta
      </SectionTitle>
      <SectionText>
        I am an average Full Stack Developer specializing in building (and occassionally designing) fully fledged websites, mobile applications, and everything in between.
        {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem reprehenderit tempore at quasi ex harum pariatur? Ea, fugit eius. Aliquid nesciunt repellat sint iure adipisci quisquam praesentium perferendis porro labore. */}
      </SectionText>
      <Button onClick={() => window.location = "https://drive.google.com/file/d/1gsITTZTyJYToEnRlz_sGe46UBA73eRAV/view?usp=sharing"}>MY RESUME</Button>
    </LeftSection>
  </Section>
);

export default Hero;