import { Directions } from '@material-ui/icons';
import React from 'react';
import ImgMediaCard from './BusinessComponet';

const Services = () => {
  return (
    <div>
      <div
        style={{
          display: 'flex',
          height: '100%',
          flexWrap: 'wrap',
          justifyContent: 'center',
        }}
      >
        <ImgMediaCard />
        <ImgMediaCard />
        <ImgMediaCard />
        <ImgMediaCard />
        <ImgMediaCard />
        <ImgMediaCard />
      </div>
    </div>
  );
};

export default Services;
