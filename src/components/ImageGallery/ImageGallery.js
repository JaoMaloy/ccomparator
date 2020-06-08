import React from 'react';
import ReactImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import './ImageGallery.css';

const ImageGallery = ({ imageSources }) => {
  let images = [];
  for (var i = 0; i < imageSources.length; i++) {
    images.push({
      original: imageSources[i],
    });
  }

  return (
    <div>
      <div className="image-container">
        <ReactImageGallery
          items={images}
          showThumbnails={false}
          showBullets={true}
        />
        ;
      </div>
    </div>
  );
};

export default ImageGallery;
