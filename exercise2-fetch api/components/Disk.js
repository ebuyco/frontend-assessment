import React, { useState, useEffect } from 'react';
import Spinner from './Spinner';

const axios = require('axios');

const TitleArea = (props) => (
  <>
    <span>{props.item.title}</span>
    <span>{props.item.content}</span>
  </>

);

const Disk = () => {
  const preLoadedState = {
    error: null,
    isLoaded: false,
    items: []
  };
  const [fetchArray, setFetchState] = useState(preLoadedState);
  const { error, isLoaded, items } = fetchArray;


  useEffect(() => {
    axios.get('https://raw.githubusercontent.com/mindarc/frontend-assessment/master/data.json')
      .then(
        (response) => {
          setFetchState({
            isLoaded: true,
            items: response.data
          });
        },
        (error) => {
          setFetchState({
            isLoaded: true,
            error
          });
        }
      );
  }, []);


  const Output = () => {
    if (error) {
      return <div>Error: {error.message}</div>;
    } if (!isLoaded) {
      return <Spinner />;
    }
    return (
      <>
        {items.map((item, index) => (
          <TitleArea
            item={item}
            index={index}
            key={item.title}
          />
        ))}
      </>
    );
  };

  return Output();
};

export default Disk;
