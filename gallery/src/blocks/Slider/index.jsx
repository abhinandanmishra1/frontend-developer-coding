import "./slider.css";

const Slide = ({ children, prev, next, onClick, active }) => {
  if(!active) return null
  return (
    <div
      className="slide slide--active"
      onClick={onClick}
    >
      <button className="slide__prev" onClick={prev}>
        &#60;
      </button>
      <div className="slide__content">{children}</div>
      <button className="slide__next" onClick={next}>
        &#62;
      </button>
    </div>
  );
};

export const Slider = ({ children, currentSlide, setCurrentSlide }) => {
  return (
    <div className="slider">
      {children.map((child, index) => {
        return (
          <Slide
            key={index}
            active={index === currentSlide}
            prev={() => {
              setCurrentSlide((prev) => {
                if (prev === 0) {
                  return children.length - 1;
                }
                return prev - 1;
              });
            }}
            next={() => {
              setCurrentSlide((prev) => {
                if (prev === children.length - 1) {
                  return 0;
                }
                return prev + 1;
              });
            }}
          >
            {child}
          </Slide>
        );
      })}
    </div>
  );
};
