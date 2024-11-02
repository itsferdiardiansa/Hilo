'use client'

import type { PropsWithChildren } from 'react'
import React from 'react'
import styled from 'styled-components'
import { FiHome, FiSettings, FiZap, FiDatabase } from 'react-icons/fi'

const Container = styled.div`
  display: flex;
  height: 100vh;
  background-color: #1e1e1e;
  color: #ffffff;
  flex-direction: column;

  @media (min-width: 1024px) {
    flex-direction: row;
  }
`

const Sidebar = styled.div`
  width: 250px;
  background-color: #252525;
  display: flex;
  flex-direction: column;
  padding: 20px;
  color: #ffffff;
  font-size: 12px;
  box-shadow: 2px 0 8px rgba(0, 0, 0, 0.5);
  font-family: 'Poppins', sans-serif;
  z-index: 10;

  @media (max-width: 1024px) {
    width: 100%;
    height: 60px;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    padding: 0;
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 10;
    box-shadow: 0 -2px 8px rgba(0, 0, 0, 0.5);
  }
`

const NavMenu = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: auto;
  margin-bottom: auto;

  @media (max-width: 1024px) {
    flex-direction: row;
    gap: 0;
    width: 100%;
  }
`

const NavItem = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 14px;
  cursor: pointer;
  font-size: 14px;
  transition: background-color 0.3s, color 0.3s;
  border-radius: 8px;
  text-align: center;
  justify-content: center;
  flex: 1;

  &:hover {
    background-color: #333333;
    color: #9bb1c8;
  }

  svg {
    flex-shrink: 0;
  }

  @media (max-width: 1024px) {
    padding: 10px;
    flex-direction: column;
    font-size: 10px;
  }
`

const Settings = styled(NavItem)`
  margin-top: auto;
  font-weight: bold;

  @media (max-width: 1024px) {
    margin-top: 0;
  }
`

const MainContent = styled.div`
  flex: 1;
  padding: 30px 40px;
  background-color: #1c1c1c;
  font-family: 'Poppins', sans-serif;
  color: #d9e2ec;
  display: flex;
  flex-direction: column;
  gap: 30px;
  overflow-y: auto;

  @media (max-width: 1024px) {
    padding: 20px;
    padding-bottom: 80px;
  }

  @media (max-width: 768px) {
    padding: 15px;
  }
`

const DashboardLayout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <Container>
      <Sidebar>
        <NavMenu>
          <NavItem>
            <FiHome size={18} />
            <span>Pokemon</span>
          </NavItem>
          <NavItem>
            <FiZap size={18} />
            <span>Moves</span>
          </NavItem>
          <NavItem>
            <FiDatabase size={18} />
            <span>Abilities</span>
          </NavItem>
          <Settings>
            <FiSettings size={18} />
            <span>Settings</span>
          </Settings>
        </NavMenu>
      </Sidebar>
      <MainContent>{children}</MainContent>
    </Container>
  )
}

export default DashboardLayout
