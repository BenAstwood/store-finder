import React from "react";

import "./OpeningTime.css";

const formatTime = time => {
  const timeArray = time.split(":");
  const [hour, mins] = timeArray;

  return parseInt(hour) > 12 ? `${hour}.${mins}pm` : `${hour}.${mins}am`;
};

const timeOpenToday = openingTimes => {
  const today = new Date();
  const todayString = today
    .toString()
    .split(" ")[0]
    .toLowerCase();

  return Object.keys(openingTimes[todayString])
    .map(openOrClose => formatTime(openingTimes[todayString][openOrClose]))
    .join(" - ");
};

export const OpenToday = props => {
  return (
    <p className="opening-time-today">
      Opening today: {timeOpenToday(props.openingHours)}
    </p>
  );
};

export const OpenThisWeek = props => {
  const { mon, tue, wed, thu, fri, sat, sun } = props.openingTimes;
  return (
    <div className="opening-times">
      <h3 className="opening-times__header">This week:</h3>
      <p className="opening-times__day">
        Monday
        {` Open:${formatTime(mon.open)} - Closes: ${formatTime(mon.close)}`}
      </p>
      <p className="opening-times__day">
        Tuesday
        {` Open:${formatTime(tue.open)} - Closes: ${formatTime(tue.close)}`}
      </p>
      <p className="opening-times__day">
        Wednesday
        {` Open:${formatTime(wed.open)} - Closes: ${formatTime(wed.close)}`}
      </p>
      <p className="opening-times__day">
        Thursday
        {` Open:${formatTime(thu.open)} - Closes: ${formatTime(thu.close)}`}
      </p>
      <p className="opening-times__day">
        Friday
        {` Open:${formatTime(fri.open)} - Closes: ${formatTime(fri.close)}`}
      </p>
      <p className="opening-times__day">
        Saturday
        {` Open:${formatTime(sat.open)} - Closes: ${formatTime(sat.close)}`}
      </p>
      <p className="opening-times__day">
        Sunday
        {` Open:${formatTime(sun.open)} - Closes: ${formatTime(sun.close)}`}
      </p>
    </div>
  );
};
