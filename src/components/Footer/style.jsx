import styled from 'styled-components';
import { device, PRIMARY } from '../Style';

export const Foot = styled.footer ` 
  background-color: ${PRIMARY};
  display: flex;
  justify-content: center;
  @media ${device.mobileS} {
    padding: 20px;
  }
  @media ${device.mobileM} {
    padding: 20px 30px 20px 30px;
  }
  @media ${device.mobileL} {
    padding: 20px 40px 20px 30px;
  }
  @media ${device.tablet} {
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
  }
`