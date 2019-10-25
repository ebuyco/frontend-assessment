import React from 'react';
import Disk from '../components/Disk';

const FetchArray = (props) => {

  let attachedClasses = [props.Closed ? 'Closed' : 'Closed'];
  if (props.open) {
    attachedClasses = [props.open ? 'Open' : 'Open'];
  }
  return(
    <div
    className={attachedClasses.join(' ')}
    >
      <Disk/>
    </div>

  )
}

export default FetchArray;
