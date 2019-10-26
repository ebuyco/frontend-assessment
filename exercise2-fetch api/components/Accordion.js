import React from 'react';
import Disk from './Disk';
import css from './styles/index.scss';

import { Accordion } from './AccordionContent';
import { AccordionSection } from './AccordionSection';
import { useAccordionState } from './useAccordionState';

const AccordionData = () => {
  const accordionProps = useAccordionState([false, true]);

  return (
    <div className={css.accordion__wrapper}>
      <Accordion {...accordionProps}>
        <AccordionSection title='One'>
          <Disk />
        </AccordionSection>
        <AccordionSection title='Two'>
          <Disk />
        </AccordionSection>
        <AccordionSection title='Three'>
          <Disk />
        </AccordionSection>
        <AccordionSection title='Four'>
          <Disk />
        </AccordionSection>
      </Accordion>

    </div>
  );
};

export default AccordionData;
