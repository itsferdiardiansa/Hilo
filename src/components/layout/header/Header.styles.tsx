import styled from 'styled-components'
import { mediaQuery } from '@/styles/mixins/media'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;
  background-color: #2a2a2a;
  color: #ffffff;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 60px;
  z-index: 99;
`

export const Logo = styled.div`
  font-size: 20px;
  font-weight: bold;
  color: #ffffff;
`

export const IconGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

  ${mediaQuery('mobile')(`
    gap: 10px;
  `)}
`

export const IconItem = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: color 0.3s;

  &:hover {
    color: #b0d6ff;
  }
`

export const MobileMenuIcon = styled.div`
  display: none;
  cursor: pointer;

  ${mediaQuery('desktop')(`
    display: block;
  `)}
`
