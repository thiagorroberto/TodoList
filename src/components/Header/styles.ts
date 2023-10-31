import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: center;
  width: 100%;
  background-color: ${props => props.theme["gray-700"]};
`;

export const HeaderBox = styled.div`
  display: flex;
  max-width: 1440px;
  height: 200px;
  align-items: center;

  img {
    width: 126px;
    height: 48px;
  }
`;