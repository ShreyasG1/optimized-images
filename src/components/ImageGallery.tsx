import React, { useLayoutEffect } from 'react';
import { ImagesContainer, Image, ImageWrapper } from './styledComponents';
import { GALLERY_IMAGES } from '../constants/images';

const ImageGallery: React.FC = () => {
  useLayoutEffect(() => {
    const blurDivs = document.querySelectorAll('.blur-load');

    blurDivs.forEach((div) => {
      const img = div.querySelector('img');
      const loaded = () => {
        div.classList.add('loaded');
      };
      if (img?.complete) {
        loaded();
      } else {
        img?.addEventListener('load', loaded);
      }
    });

    return () => {
      blurDivs.forEach((div) => {
        const img = div.querySelector('img');
        img?.removeEventListener('load', () => {});
      });
    };
  }, []);

  return (
    <ImagesContainer>
      {GALLERY_IMAGES.map(({ imgSrc, smallImgSrc }, index) => (
        <ImageWrapper
          key={`sample_ai_image_${index + 1}`}
          background={`url(${smallImgSrc})`}
          className={'blur-load'}
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
