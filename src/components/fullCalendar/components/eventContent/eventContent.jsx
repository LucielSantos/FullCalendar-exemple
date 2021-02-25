import React from 'react';

import { Container } from './style';

export const EventContent = ({
   event,
   ...rest
}) => {

   console.log('=============================');
   console.log('EventContent');
   console.log(event);
   console.log(event.extendedProps);
   console.log(rest);
   console.log('=============================');

   return (
      <Container>
         {event.title}
      </Container>
   );
};