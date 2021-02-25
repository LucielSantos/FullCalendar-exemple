import React from 'react';
import { FullCalendar } from '../components';

import { Container, Body } from './style';

const HomeComponent = ({
   ...props
}) => {
   return (
      <Container>
         <Body>
            <h3>
               FullCalendar Exemple
            </h3>

            <hr/>
            <br/>
            
            <FullCalendar />
         </Body>
      </Container>
   );
};

export const Home = React.memo(HomeComponent);