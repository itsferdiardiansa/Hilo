import styled from 'styled-components'

export const SearchFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`

export const SearchTitle = styled.h2`
  font-size: 20px;
  font-weight: bold;
  color: #ffffff;
  margin: 0;
`
export const SearchFormWrapper = styled.div`
  display: flex;
  gap: 15px;
  padding: 15px 0;
  border-radius: 8px;
  align-items: center;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 10px;
    width: 100%;
  }
`
