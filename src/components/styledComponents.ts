import styled, { keyframes } from 'styled-components';
import { background } from 'styled-system';

interface ImageWrapperProps {
  background: string;
}

export const ImagesContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  @media screen and (max-width: 1200px) {
    grid-template-columns: 1fr;
  }
`;

export const Image = styled.img`
  width: 100%;
  aspect-ratio: 16 / 9;
  display: block;
  object-position: center;
  object-fit: cover;
  opacity: 0;
  transition: opacity 200ms ease-in-out;
`;

const pulsingLoader = keyframes`
  0% {
    background-color: rgba(255, 255, 255, 0);
  }
  50% {
    background-color: rgba(255, 255, 255, 0.1);
  }
  100% {
    background-color: rgba(255, 255, 255, 0);
  }
`;

export const ImageWrapper = styled.div<ImageWrapperProps>`
  ${background}
  position: relative;
  width: 100%;
  background-size: cover;
  background-position: center;
  &:before {
    content: '';
    position: absolute;
    inset: 0;
    animation: ${pulsingLoader} 2.5s infinite;
  }
  &.loaded {
    img {
      opacity: 1;
    }
    &:before {
      content: none;
      animation: none;
    }
  }
`;
