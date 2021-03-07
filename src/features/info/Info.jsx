import React from 'react';
import Section1 from './sections/Section1';
import Section2 from './sections/Section2';
import Section3 from './sections/Section3';
import Divider from '../../common/components/Divider';
import './Info.scss';

function Info() {
  return (
    <main>
      <Section1 />
      <Divider />
      <Section2 />
      <Divider />
      <Section3 />
      <Divider />
    </main>
  );
}

export default Info;
