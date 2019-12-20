import React, { useState, useEffect } from "react";

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";
import axiosWithAuth from './axiosWithAuth';

const BubblePage = () => {
  const [colorList, setColorList] = useState([]);
  // fetch your colors data from the server when the component mounts
  // set that data to the colorList state property

  useEffect(() => {
    getColor();
  }, []);

  const getColor = () => {
    axiosWithAuth()
      .get('colors')
      .then(response => {
        setColorList(response.data);
        console.log('color data in BubblePage: ', response.data)
      })
      .catch(error => console.log(error.response))
  }

  return (
    <>
      <ColorList colors={colorList} updateColors={setColorList} getColor={getColor} />
      <Bubbles colors={colorList} />
    </>
  );
};

export default BubblePage;
