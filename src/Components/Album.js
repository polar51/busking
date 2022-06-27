import styled from "styled-components"


const AlbumCont = styled.div`
  padding: 0 !important
`
const ContInner = styled.div`
  padding: 0 !important;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`

const ItemBox = styled.div`
  width: 15%;
  margin: 2%;
`

const Item = styled.img`
  width: 100%;
  height: 100%;
  padding: 0 !important;
  cursor: pointer;
`


const Album = () => {

  const items = [
    { id: 1, url: 'https://i.pinimg.com/originals/1d/36/77/1d3677ecfe3d90bcb62e16cb6039e730.jpg' },
    { id: 2, url: 'https://marketplace.canva.com/EADxthozekQ/1/0/1131w/canva-%ED%96%89%EC%84%B1-%EC%9D%BC%EB%9F%AC%EC%8A%A4%ED%8A%B8-%EC%BD%98%EC%84%9C%ED%8A%B8-%ED%8F%AC%EC%8A%A4%ED%84%B0-R8ozrP53HNo.jpg' },
    { id: 3, url: 'http://image.toast.com/aaaaab/ticketlink/TKL_2/jjpst_0728.jpg' },
    { id: 4, url: 'https://images.chosun.com/resizer/VEaKqo3pUn9Go6lXB0dpBAylSUY=/464x0/smart/cloudfront-ap-northeast-1.images.arcpublishing.com/chosun/ZYSWGA4P6VYIMYFWD7RZGLBBVM.jpg' },
    { id: 5, url: 'https://i.pinimg.com/736x/a0/5e/7c/a05e7c5b7c8c39bc7d57498c5eeaa745.jpg' },
    { id: 6, url: 'https://www.syu.ac.kr/wp-content/uploads/2019/11/%EB%B6%99%EC%9E%84_%EB%A6%AC%EC%99%80%EC%9D%B8%EB%93%9C-%EA%B3%B5%EC%97%B0-%ED%8F%AC%EC%8A%A4%ED%84%B0.jpg' },
    { id: 7, url: 'http://image.toast.com/aaaaab/ticketlink/TKL_3/u_poster_0506.jpg' },
    { id: 8, url: 'https://drchunghome.files.wordpress.com/2020/02/1849f-0bcd8-3268912173_d940bcaf2f.jpg' },
    { id: 9, url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQK9HPvs3iFmXK_DuJ9oLcC9UNCdhX9FIAFAQ&usqp=CAU' },
    { id: 10, url: 'https://www.ggcf.kr/wp-content/uploads/2019/12/%EA%B2%BD%EA%B8%B0%EA%B3%B5%EC%97%B0%EC%98%88%EC%88%A0%ED%8E%98%EC%8A%A4%ED%83%80%EC%87%BC%EC%BC%80%EC%9D%B4%EC%8A%A4_%ED%8F%AC%EC%8A%A4%ED%84%B0_%EC%B5%9C%EC%A2%851.jpg' },
  ];


  const albumList = () => items.map((items) => {
    return <ItemBox key={items.id}>
      <Item src={items.url} />
    </ItemBox>
  })
  return(
    <AlbumCont>
      <p>공연은 어떠세요?!</p>
      <ContInner>
        {albumList()}
      </ContInner>
    </AlbumCont>
  )
}

export default Album