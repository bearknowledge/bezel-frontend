import { useState } from "react";



const Carousel = ({slides}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const sliderStyles = {
    height: '100%',
    position:'relative'
  };
  const slideStyles = {
    width:'100%',
    height:'100%',
    borderRadius: '10px',
    backgroundPosition:'center',
    backgroundSize:'cover',
    backgroundImage:`url(${slides[currentIndex].url})`
  };
  const leftArrowStyles = {
  position: 'absolute',
  top:'50%',
  transform: 'translate(-125px, -50%)',
  left:'32px',
  fontSize: '60px',
  color: '#000',
  zIndex: 1,
  cursor:'pointer'
  };

  const rightArrowStyles = {
    position: 'absolute',
    top:'50%',
    transform:'translate(1000px, -50%)',
    left:'32px',
    fontSize: '60px',
    color: '#000',
    zIndex: 1,
    cursor:'pointer'
    };

  const dotsContainer = {
    display:'flex',
    justifyContent:'center'
  };

  const dotStyle = {
    margin:'0 3px',
    cursor:'pointer',
    fontSize:'50px'

  }



  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = slideIndex => {
    setCurrentIndex(slideIndex)
  };

  return (
    <div style={sliderStyles}>
      <div style={leftArrowStyles} onClick={goToPrevious}>〈</div>
      <div style={rightArrowStyles} onClick={goToNext}>〉</div>
      <div style={slideStyles}></div>
      <div style={dotsContainer}>
        {slides.map((slide,slideIndex) => (
      <div style={dotStyle} key={slideIndex} onClick={() => goToSlide(slideIndex)}>•</div>
        ))}
      </div>
    </div>
  )
}

export default Carousel