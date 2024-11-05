import styled from "styled-components"

export const StyledSelectContainer = styled.div`
  position: relative;
  width: 150px;

  @media (max-width: 768px) {
    width: 100%;
  }

  .filter-icon {
    position: absolute;
    top: 50%;
    left: 10px;
    transform: translateY(-50%);
    color: #ffffff;
  }

  .chevron-icon {
    position: absolute;
    top: 50%;
    right: 10px;
    transform: translateY(-50%);
    color: #ffffff;
  }
`

export const StyledSelect = styled.select`
  width: 100%;
  padding: 8px 32px 8px 40px;
  border-radius: 8px;
  background-color: #2c2c2c;
  color: #ffffff;
  font-family: "Poppins", sans-serif;
  font-size: 14px;
  border: none;
  appearance: none;
  outline: none;

  &:focus {
    outline: 2px solid #0070f3;
  }
`
