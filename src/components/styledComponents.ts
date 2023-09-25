import styled from 'styled-components';
import { background } from 'styled-system';

export const ImagesContainer: React.FC = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  @media screen and (max-width: 1200px) {
    grid-template-columns: 1fr;
  }
`;

export const Image: React.FC = styled.img`
  width: 100%;
  aspect-ratio: 16 / 9;
  display: block;
  object-position: center;
  object-fit: cover;
  opacity: 0;
  transition: opacity 200ms ease-in-out;
`;

export const ImageWrapper: React.FC = styled.div`
  ${background}
  width: 100%;
  background-size: cover;
  background-position: center;
  &.loaded > img {
    opacity: 1;
  }
`;
