import styled from 'styled-components';
import { device, SECONDARY, FIFTH, PRIMARY } from '../../components/Style';

export const Div = styled.div ` 
  display: flex;
  justify-content: center;
  margin-top: 10px;
  margin-bottom: 10px;
  /* background-color: ${SECONDARY}; */
  /* @media ${device.mobileS} {
    padding: 20px;
  }
  @media ${device.mobileM} {
    padding: 20px 30px 20px 30px;
  }
  @media ${device.mobileL} {
    padding: 20px 40px 20px 30px;
  }
  @media ${device.tablet} {
    display: flex;
    padding: 20px 50px 20px 50px;
  }
  @media ${device.laptop} {
    padding: 20px 60px 20px 60px;
  }
  @media ${device.laptopL} {
    padding: 20px 70px 20px 70px;
  }
  @media ${device.desktop} {
    padding: 20px 80px 20px 80px;
  } */
`

export const Card = styled.div `
  width: 230px;
  height: 280px;
  border: 2px solid ${FIFTH};
`

export const Img = styled.div ` 
  text-align: center;
  img {
    width: 150px;
    margin-top: 10px;
  }
`

export const Button = styled.button ` 
  background-color: ${PRIMARY};
  color: ${SECONDARY};
  :hover {
    background-color: #1567b4;
    color: #FFFFFF;
  }
  cursor: pointer;
`

export const Back = styled(Button) ` 

`

export const Next = styled(Button) ` 
  margin-left: 5px;
`

export const Validate = styled.div ` 
  text-align: center;
  div {
    margin-top: 10px;
    margin-bottom: 10px;
  }
`

export const Show = styled(Button) ` 
  
`

export const Remove = styled(Button) ` 
  margin-left: 5px;
`

export const Language = styled(Button) ` 

`

export const LanguageDiv = styled.div ` 
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
`

export const Word = styled(Button) ` 

`

export const Title = styled.h2 ` 
  margin-top: 5px;
  margin-bottom: 5px;
`