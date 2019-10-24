import React, { useState, useEffect } from 'react';
const axios = require('axios');

const TitleArea = (props) => {
  return (
      <>
          <span>{props.item.title}</span>
          <span>{props.item.content}</span>
        </>

  );
}

const Disk = () => {
  const initialLocalState = {
    error: null,
    isLoaded: false,
    items: []
  };
  const [fetchArray, setFetchState] = useState(initialLocalState);
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


  const Output = () =>{
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <p>Loading...</p>;
    } else {
      return (
          <React.Fragment>
               {items.map((item, index) => (
                <TitleArea
                  item={item}
                  index={index}
                  key={item.title}
                />
              ))}
          </React.Fragment>
      );
    }
  }

  return Output();
}

export default Disk;
