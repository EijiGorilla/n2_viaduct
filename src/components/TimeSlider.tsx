import { useEffect, useRef, useState } from 'react';
import { start, end, view, timeSlider } from '../Scene';
import { viaductLayer } from '../layers';
import FeatureFilter from '@arcgis/core/layers/support/FeatureFilter';
import '../App.css';
import { time } from '@amcharts/amcharts5';

const TimeSlider = (props: any) => {
  timeSlider.watch('timeExtent', (timeExtent: any) => {
    const viaStart =
      timeExtent.end.getFullYear() +
      '-' +
      (timeExtent.end.getMonth() + 1) +
      '-' +
      timeExtent.end.getDate();

    console.log(viaStart);

    // Query and Filter
    const dateFilterExpression =
      "planned_date <= date'" +
      timeExtent.end.getFullYear() +
      '-' +
      (timeExtent.end.getMonth() + 1) +
      '-' +
      timeExtent.end.getDate() +
      "'";
    const n01_query = "CP = 'N-01'" + ' AND ' + dateFilterExpression;
    const others_query = "CP = '" + props.contractp + "'" + ' AND ' + dateFilterExpression;

    viaductLayer.definitionExpression = props.contractp === 'N-01' ? n01_query : others_query;
  });

  return <></>;
};

export default TimeSlider;
