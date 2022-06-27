import { useState,useEffect, useRef } from "react";
import styled from "styled-components";



  //스타일링


const SlideCont = styled.div`
margin: 35px;
height: 80vh;
width: 10vw;
overflow: hidden;
transition: transform 1.5s ease-in;
`;



  const SlideInner = styled.div`
  transition: ${(props) => (props.boolean ? '' : 'transform 1s ease-in')};
  transform: ${(props) => ('translateX(-'+props.count * 20+'%)')};
  width: ${(props)=>(props.wid+'vw')};
  height: 100%;
  display: flex;
  overflow: hidden;
  `;

  const SlideItems = styled.div`
  width: 100%;
  `

  const SlideImg = styled.img`
  width: 100%;
  height: 100%;
  `




const Slide = () => {

  const items = [
    { id: 1, url: 'http://imagescdn.gettyimagesbank.com/500/201904/jv11350288.jpg' },
    { id: 2, url: 'https://openimage.interpark.com/goods_image_big/2/5/9/5/6422972595_l.jpg' },
    { id: 3, url: 'https://t1.daumcdn.net/cfile/tistory/136B7A0F4BE37BF353' },
    { id: 4, url: 'https://mblogthumb-phinf.pstatic.net/20131214_130/murmurhelp_1386994144331kIAJz_JPEG/%C6%F7%BD%BA%C5%CD%B5%F0%C0%DA%C0%CE5.jpg?type=w2' },
    { id: 5, url: 'https://mblogthumb-phinf.pstatic.net/20131214_286/murmurhelp_1386994195587aNF1Y_JPEG/%C6%F7%BD%BA%C5%CD%B5%F0%C0%DA%C0%CE14.jpg?type=w2' },
  ];

  const elementLength = items[items.length -1].id
  const wid = items[items.length -1].id * 10
  const [count, setCount] = useState(0);
  const boolean = useRef(false);

  useEffect(() => {
      const timer = setInterval(
        () => {
          if (count < elementLength - 1) {
            boolean.current = false;
            setCount(prev => prev + 1);
          } else {
            boolean.current = true;
            setCount(0);
          }
        },
        boolean.current ? 0 : 4000
      );
  
      return () => {
        clearInterval(timer);
      };
    }, [count]);

    const slideItem = () => items.map((items) => {
      return <SlideItems key={items.id}>
        <SlideImg src={items.url} />
      </SlideItems>
    })


    return (
      <SlideCont>
        <SlideInner count={count} wid={wid} boolean={boolean.current}>
            {slideItem()}
        </SlideInner>
      </SlideCont>
    );
  }

  export default Slide