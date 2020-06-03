import React, { FC, useState, useEffect } from "react";
import Carousel, { Dots } from "@brainhubeu/react-carousel";
import { Project } from "@interfaces";

// Components
import CarouselSlide from "./CarouselSlide";

type T = {
  items: Project[];
};

const CarouselComponent: FC<T> = ({ items }) => {
  const [value, setValue] = useState<number>(0);
  const [slides, setSlides] = useState(Array);

  // Next and previous
  const [nextItem, setNextItem] = useState(items[1]);
  const [prevItem, setPrevItem] = useState(items[0]);

  useEffect(() => {
    const newSlides = items.map((i) => <CarouselSlide data={i} />);
    // const newSlides = [<CarouselSlide />, <CarouselSlide />, <CarouselSlide />];
    console.log("slides", newSlides);
    console.log("items", items);
    setSlides(newSlides);
  }, [items]);

  useEffect(() => {
    // The value counter keeps on counting up and doesn't reset, remainer operator gives us the correct index
    const nextIndex = (value + 1) % items.length;
    const next = items[nextIndex];
    setNextItem(next);
    console.log("next", nextIndex, next);

    const prevIndex = value - 1 < 0 ? 0 : (value - 1) % items.length;
    console.log("previous", prevIndex);
    setPrevItem(items[prevIndex]);
  }, [value]);

  const handleChange = (x: any) => {
    console.log("change", x);
    setValue(x);
  };

  return (
    <div>
      <Carousel
        value={value}
        onChange={handleChange}
        slides={items.map((i) => (
          <CarouselSlide data={i} />
        ))}
        arrows
        infinite
        clickToChange
      />
      <Dots value={value} onChange={handleChange} number={slides.length} />
      <p>next Slide: {nextItem.title}</p>
      <p>Prev Slide: {prevItem.title}</p>
      <p>value: {value}</p>
      <p>length: {items.length}</p>
    </div>
  );
};

export default CarouselComponent;
