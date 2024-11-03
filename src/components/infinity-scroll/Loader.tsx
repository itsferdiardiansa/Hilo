// src/components/Loader.tsx
import styled, { keyframes } from 'styled-components'

const bounce = keyframes`
  0%, 80%, 100% {
    transform: scale(0);
  }
  40% {
    transform: scale(1);
  }
`

const DotWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
`

const Dot = styled.div`
  width: 10px;
  height: 10px;
  margin: 0 5px;
  background-color: #333;
  border-radius: 50%;
  animation: ${bounce} 1.4s infinite ease-in-out both;

  &:nth-child(1) {
    animation-delay: -0.32s;
  }
  &:nth-child(2) {
    animation-delay: -0.16s;
  }
`

const Loader = () => {
  return (
    <DotWrapper>
      <Dot />
      <Dot />
      <Dot />
    </DotWrapper>
  )
}

export default Loader
