import React, {Component} from 'react';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';
import _ from 'lodash';

export default (props) => {

  function average(data){
    return (_.round(_.sum(data)/data.length));
  }
  function maximum(data){
    return (_.max(data));
  }

  return (
      <div>
        <Sparklines width={180} height={120} data={props.data} units={props.units}>
          <SparklinesLine color={props.color} />
          <SparklinesReferenceLine type="avg" />
          <SparklinesReferenceLine type="max" />
          <SparklinesReferenceLine type="min" />
        </Sparklines>
        <div>Avg {average(props.data)} {props.units}</div>
        <div>Max {maximum(props.data)}</div>
      </div>
    );
}
