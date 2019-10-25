import React from 'react';
import Disk from '../components/Disk';

const FetchArray1 = (props) => {

  let attachedClasses = [props.Close ? 'Close' : 'Close'];
  if (props.open) {
    attachedClasses = [props.Open ? 'Open' : 'Open'];
  }
  return(
    <div
    className={attachedClasses.join(' ')}
    >
      <Disk/>
    </div>

  )
}

export default FetchArray1;
