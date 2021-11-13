import React from 'react';
import '../sass/recentevent.scss';

const RecentEvent = (props) => {
  const { data } = props;
  return (
    <>
      {data.map((event, index) => {
        return (
          <div className="event-wrapper" key={index}>
            <img src={event.uri} alt={event.header} />
            <h4>{event.header}</h4>
            <p>{event.post}</p>
          </div>
        );
      })}
    </>
  );
};

export default RecentEvent;
