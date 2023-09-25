import { useLayoutEffect, useRef } from 'react';

const defaultWrapClass = 'blur-load';
const loadedWrapClass = 'loaded';

const useBlurLoader = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  useLayoutEffect(() => {
    if (!containerRef.current) return;

    const blurDivs = Array.from(containerRef.current.children);

    blurDivs.forEach((div) => {
      const img = div.querySelector('img');
      const loaded = () => {
        div.classList.add(loadedWrapClass);
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

  return { defaultWrapClass, containerRef };
};

export default useBlurLoader;
