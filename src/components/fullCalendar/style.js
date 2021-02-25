import styled from 'styled-components';

export const Container = styled.div`
  --fc-button-text-color: #fff;
  --fc-button-bg-color: #0C4778;
  --fc-button-border-color: #0C4778;
  --fc-button-hover-bg-color: #0b375c;
  --fc-button-hover-border-color: #0b375c;
  --fc-button-active-bg-color: #051624;
  --fc-button-active-border-color: #051624;

  --fc-event-bg-color: #0079C4;
  --fc-event-border-color: #0079C4;

  --fc-today-bg-color: #E5EEF5;

  .fc .fc-button:focus, .fc .fc-button-primary:not(:disabled):active:focus, .fc .fc-button-primary:not(:disabled).fc-button-active:focus {
    box-shadow: none;
  }

  .fc .fc-col-header-cell-cushion {
    color: #0079C4;
  }
`;
