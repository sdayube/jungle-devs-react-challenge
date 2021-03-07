import React from 'react';
import { Section1, Section2, Section3, Section4, Section5 } from './sections';
import Divider from '../../common/components/Divider';

function Info() {
  return (
    <main>
      <Section1 />
      <Divider />
      <Section2 />
      <Divider />
      <Section3 />
      <Divider />
      <Section4 />
      <Divider />
      <Section5 />
    </main>
  );
}

export default Info;
