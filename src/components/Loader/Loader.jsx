import React from 'react';
import { CirclesWithBar } from 'react-loader-spinner';

const Loader = () => {
  return (
    <CirclesWithBar
    height="100"
    width="100"
    color="blue"
    outerCircleColor="yellow"
    innerCircleColor="blue"
    barColor="blue"
    ariaLabel="circles-with-bar-loading"
    wrapperStyle={{}}
    wrapperClass=""
    visible={true}
    />
  );
};

export default Loader;
