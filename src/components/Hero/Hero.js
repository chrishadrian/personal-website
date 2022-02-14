import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hello World! <br />
        I am Christopher Wong
      </SectionTitle>
      <SectionText>
      An independent and self-motivated sophomore computer science student with experience working on website development. Looking for a role where I can grow and learn from the experienced team members while implementing current skills to contribute to the team.
      </SectionText>
      <Button onClick={() => window.location = 'https://linkedin.com/in/chrishadrianwong'}>Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;