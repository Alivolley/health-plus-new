import { useState } from 'react';

// MUI
import { Accordion, AccordionDetails, AccordionSummary } from '@mui/material';

function MobileMenuAccordion({ title, children }) {
   const [isExpanded, setIsExpanded] = useState(false);

   return (
      <Accordion
         sx={{
            boxShadow: 'none',
            margin: '0 !important',
            '.MuiButtonBase-root': {
               minHeight: '0 !important',
            },
            '.MuiAccordionSummary-content': {
               margin: '0 !important',
            },
            ':before': {
               display: 'none !important',
            },
         }}
         expanded={isExpanded}
      >
         <AccordionSummary
            sx={{
               padding: '0 !important',
               '#icon': { transform: isExpanded ? 'rotate(180deg)' : '' },
            }}
            onClick={() => setIsExpanded(prev => !prev)}
         >
            {title}
         </AccordionSummary>
         <AccordionDetails>{children}</AccordionDetails>
      </Accordion>
   );
}

export default MobileMenuAccordion;
