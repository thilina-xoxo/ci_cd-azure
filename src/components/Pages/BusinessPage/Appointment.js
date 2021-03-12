import { Directions } from '@material-ui/icons';
import React from 'react';
import Album from './BusinessComponet';

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
        <Album />
      </div>
    </div>
  );
};

export default Services;
