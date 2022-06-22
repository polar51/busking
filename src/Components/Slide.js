import { bool } from "prop-types";
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
    { id: 1, url: 'http://mstatic1.e-himart.co.kr/contents/goods/00/01/39/53/34/0001395334__100-43438-73781__M_640_640.jpg' },
    { id: 2, url: 'https://pbs.twimg.com/media/Er75XyVVQAEJzav?format=jpg&name=large' },
    { id: 3, url: 'https://mblogthumb-phinf.pstatic.net/MjAxNzA3MTlfMTk4/MDAxNTAwNDU2ODk4MjEx.UjNcjVpAJY0jR--T_tJVZYJPqrT2RvGGgSERxv607Fwg.nMobtbMSC0L6MuUy44yYsoflZAkZFr2j43S-xnTF4YEg.JPEG.hwangenter/%EC%96%B4%EB%A6%B0%EC%9D%B4%EB%A7%88%EC%88%A0%EB%8C%80%ED%9A%8C-%EB%B0%B0%EB%84%88-%EC%B5%9C%EC%A2%85_0719.jpg?type=w800' },
    { id: 4, url: 'https://www.danhong.kr/data/item/1579181668/4YSL4YWv4Yar4YSL4YWi4YSD4YWz4YSH4YWi4YSC4YWl4YSO4YWu4Yao4YSM4YWm01.jpg' },
    { id: 5, url: 'http://mstatic1.e-himart.co.kr/contents/goods/00/01/39/53/34/0001395334__100-43438-73781__M_640_640.jpg' },
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