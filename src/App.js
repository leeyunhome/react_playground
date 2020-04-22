import React from "react";
import GuGudan from "./components/GuGudan";
import LikeButton from "./components/LikeButton";
import Image from "./components/Image";
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import Contacts from "./components/Contacts";


const App = () => {
  return (
    <>
      hello world
      <GuGudan />
      <LikeButton />
      <LikeButton />
      <LikeButton />
      <Image />
      <Contacts />
    </>
  );
};

export default App;
