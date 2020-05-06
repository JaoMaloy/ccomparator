import React from 'react';
import {Palette} from 'color-thief-react';
import _ from 'lodash';
import './ImagePalette.css';

const Loading = () => <div> Loading... </div>;

const ImagePalette = ({ imageSource }) => {
  return (
    <div className="white">
      <Palette src={imageSource} crossOrigin="Anonymous" colorCount={5} format="hex">
        {({ data, loading }) => {
          console.log(data);
          if (loading) return <Loading />;
          return (
            <div className='white palette-container'>
              <div className='outer-block' style={{ backgroundColor: data[3]}}> {data[3]} </div>
              <div className='surrounding-block' style={{ backgroundColor: data[1]}}> {data[1]} </div>
              <div className='center-block' style={{ backgroundColor: data[0]}}> {data[0]} </div>
              <div className='surrounding-block' style={{ backgroundColor: data[2]}}> {data[2]} </div>
              <div className='outer-block' style={{ backgroundColor: data[4]}}> {data[4]} </div>
            </div>
          );
        }}
      </Palette>
    </div>
  );
}

export default ImagePalette;