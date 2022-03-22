import styled from 'styled-components';

export const LoaderContainer = styled.div`
  z-index: 9999;
  position: absolute;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.5);

  svg {
    width: 150px;
    height: 150px;
  }
`;
