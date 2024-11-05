import styled from 'styled-components'
import { mediaQuery } from '@/styles/mixins/media'

export const Container = styled.div`
  display: flex;
  color: #ffffff;
  background-color: #1e1e1e;
`

export const MainContent = styled.div`
  flex: 1;
  padding: 60px 40px 30px 270px;
  background-color: #1c1c1c;
  color: #d9e2ec;
  overflow-y: auto;

  ${mediaQuery('desktop')(`
    padding: 90px 20px 80px 20px;
    margin-left: 0;
  `)}
`
