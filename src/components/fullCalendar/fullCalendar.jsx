import React, { useCallback, useRef } from 'react';

import FullCalendarLib from '@fullcalendar/react'

import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';

import ptBrLocale from '@fullcalendar/core/locales/pt-br'

import interactionPlugin from '@fullcalendar/interaction'


import { EventContent } from './components';
import { Container } from './style';

const FullCalendarComponent = ({
   ...props
}) => {
   const calendarRef = useRef(null);

   const handleDateClick = (info) => {
      console.info('=============================')
      console.log('handleDateClick')
      console.log(info)
      console.info('=============================')
   }

   const handleEventClick = (info) => {
      console.info('=============================')
      console.log('handleEventClick')
      console.log(info)
      console.info('=============================')
   }

   const getCalendarApi = useCallback(() => calendarRef.current.getApi(), [calendarRef]);

   const getCalendarDate = useCallback(() => {
      console.info('=============================')
      console.log('getDateCalendar');
      const calendarDate = getCalendarApi().getDate();

      console.log(calendarDate)
   }, [getCalendarApi])

   const onClickNext = useCallback(() => {
      console.info('=============================')
      console.log('On click next');
      getCalendarApi().next();

      getCalendarDate()
   }, [getCalendarApi, getCalendarDate])

   const onClickPrev = useCallback(() => {
      console.info('=============================')
      console.log('On click prev');
      getCalendarApi().prev();

      getCalendarDate()
   }, [getCalendarApi, getCalendarDate])


   return (
      <Container>
         <FullCalendarLib
         plugins={[ dayGridPlugin, timeGridPlugin, listPlugin, interactionPlugin ]}
         dateClick={handleDateClick}
         eventClick={handleEventClick}
         // eventContent={EventContent}
         locale={ptBrLocale}
         initialView="dayGridMonth"
         ref={calendarRef}
         headerToolbar={{
            left: 'prev,next today',
            center: 'title',
            right: 'dayGridMonth,timeGridWeek,dayView,listWeek',
         }}
         views={{
            dayMaxEventRows: true,
            dayView: {
               type: 'timeGrid',
               buttonText: 'Dia',
            },
            dayGridMonth: {
               dayMaxEventRows: 3,
             },
             timeGridWeek: {
               dayMaxEventRows: 3,
             },
         }}
         customButtons={{
            next: {
               click: onClickNext,
            },
            prev: {
               click: onClickPrev,
            }
         }}
         events={[
            { title: 'event 1', start: '2021-02-12T10:30:00', end: '2021-02-12T11:75:00', extendedProps: { customProp: 'CustomValue' } },
            { title: 'event 2', date: '2021-02-19', extendedProps: { customProp: 'CustomValue' } },
            { title: 'event 3', start: '2021-02-19T10:30:00', end: '2021-02-21', extendedProps: { customProp: 'CustomValue' } },
         ]}
         />
      </Container>
   );
};

export const FullCalendar = React.memo(FullCalendarComponent);