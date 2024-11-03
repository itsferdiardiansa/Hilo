import styled from 'styled-components'

export const StyledButton = styled.button`
  height: 36px;
  padding: 0 12px;
  font-size: 14px;
  border: none;
  border-radius: 8px;
  background-color: #7289da;
  color: #ffffff;
  font-family: 'Poppins', sans-serif;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #5b6da6;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`
