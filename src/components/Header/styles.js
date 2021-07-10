import styled from 'styled-components';

export const Container = styled.div`
  height: 7rem;
  background: ${props => props.theme.colors.primary};
  color: #FFF;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 30px;
  font-size: 2rem;

  div  {
    display: flex;
    align-items: center;
    padding: 0.1rem;
  }
`;