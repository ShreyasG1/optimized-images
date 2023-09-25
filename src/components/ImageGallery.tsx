import React from 'react';
import { ImagesContainer, Image, ImageWrapper } from './styledComponents';
import { GALLERY_IMAGES } from '../constants/images';
import useBlurLoader from '../hooks/useBlurLoader';

const ImageGallery: React.FC = () => {
  const { defaultWrapClass, containerRef } = useBlurLoader();

  return (
    <ImagesContainer ref={containerRef}>
      {GALLERY_IMAGES.map(({ imgSrc, smallImgSrc }, index) => (
        <ImageWrapper
          key={`sample_ai_image_${index + 1}`}
          background={`url(${smallImgSrc})`}
          className={defaultWrapClass}
        >
          <Image
            src={imgSrc}
            alt={`sample_ai_image_${index + 1}`}
            loading="lazy"
          />
        </ImageWrapper>
      ))}
    </ImagesContainer>
  );
};

export default ImageGallery;
