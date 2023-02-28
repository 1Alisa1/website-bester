import { ReactElement, useRef, useState } from 'react';
import { CarouselItemProps } from '../carouselItem/carouselItem';
import styles from './carousel.module.scss';

interface CarouselProps {
  children: Array<ReactElement<CarouselItemProps>>;
}

const Carousel: React.FC<CarouselProps> = ({ children }) => {
  const [activeIndicatorIndex, setActiveIndicatorIndex] = useState(0);

  const containerEl = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    if (!containerEl.current) {
      return;
    }

    const containerRect = containerEl.current.getBoundingClientRect();
    const containercenter = (containerRect.left + containerRect.right) / 2;

    const childrenDiffs = Array.from(containerEl.current.children)
      .map((childEl) => childEl.getBoundingClientRect())
      .map((rect) => (rect.left + rect.right) / 2)
      .map((center) => Math.abs(containercenter - center));

    const minDiff = Math.min(...childrenDiffs);

    const activeIndex = childrenDiffs.indexOf(minDiff);

    setActiveIndicatorIndex(activeIndex);
  };

  return (
    <div className={styles.carousel}>
      <div
        className={styles.scrollableContainer}
        ref={containerEl}
        onScroll={handleScroll}
      >
        {children}
      </div>
      <div className={styles.indicators}>
        {children.map((el, index) => {
          const isActive = index === activeIndicatorIndex;
          return (
            <div
              key={index}
              className={`${styles.indicator} ${isActive ? styles.active : ''}`}
            ></div>
          );
        })}
      </div>
    </div>
  );
};

export default Carousel;
