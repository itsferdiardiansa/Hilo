import styled from 'styled-components'

export const BrandLogo = styled.div`
  font-size: 24px;
  font-weight: bold;
  color: #ffffff;
  margin-bottom: 20px;
  display: none;

  @media (min-width: 1024px) {
    display: block;
  }
`

export const Container = styled.div`
  display: flex;
  height: 100vh;
  color: #ffffff;
  flex-direction: column;
  background-color: #1e1e1e;

  @media (min-width: 1024px) {
    flex-direction: row;
    align-items: flex-start;
  }
`

export const MainMenu = styled.div`
  background-color: #1e1e1e;
  width: 250px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  color: #ffffff;
  font-size: 12px;
  z-index: 10;
  align-items: flex-start;

  @media (max-width: 1024px) {
    width: 100%;
    height: 60px;
    flex-direction: row;
    justify-content: space-around;
    align-items: flex-start;
    padding: 0;
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 10;
  }
`

export const NavMenu = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: auto;
  margin-bottom: auto;
  align-items: flex-start;

  @media (max-width: 1024px) {
    flex-direction: row;
    gap: 0;
    width: 100%;
  }
`

export const NavItem = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 14px;
  cursor: pointer;
  font-size: 14px;
  transition: background-color 0.3s, color 0.3s, padding 0.3s;
  border-radius: 8px;
  text-align: left;
  justify-content: flex-start;
  flex: 1;

  &:hover {
    background-color: #444444;
    color: #b0d6ff;
    padding-left: 20px;
  }

  &.active {
    color: #ffffff;
    font-weight: bold;
  }

  a {
    display: flex;
    align-items: center;
    gap: 8px;
    color: #ffffff;
  }

  svg {
    flex-shrink: 0;
  }

  @media (max-width: 1024px) {
    padding: 10px;
    flex-direction: column;
    font-size: 10px;
    align-items: center;
    justify-content: center;

    a {
      flex-direction: column;
    }
  }
`

export const Settings = styled(NavItem)`
  margin-top: auto;
  font-weight: bold;

  @media (max-width: 1024px) {
    margin-top: 0;
  }
`

export const MainContent = styled.div`
  flex: 1;
  padding: 30px 40px;
  background-color: #1c1c1c;
  color: #d9e2ec;
  gap: 30px;
  overflow-y: auto;
  align-items: flex-start;

  @media (max-width: 1024px) {
    padding: 20px;
    padding-bottom: 80px;
  }

  @media (max-width: 768px) {
    padding: 15px;
  }
`
