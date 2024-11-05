import styled from "styled-components"

export const StyledInput = styled.input`
  height: 36px;
  padding: 0 12px;
  font-size: 14px;
  border: none;
  border-radius: 8px;
  background-color: #3a3a3a;
  color: #ffffff;
  font-family: "Poppins", sans-serif;
  outline: none;
  transition: background-color 0.3s;

  &::placeholder {
    color: #888888;
  }

  &:focus {
    background-color: #555555;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`
