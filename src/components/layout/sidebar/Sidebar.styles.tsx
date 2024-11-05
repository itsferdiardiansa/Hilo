import styled, { css } from "styled-components"
import { mediaQuery } from "@/styles/mixins/media"

const navLinkStyles = css`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 8px;
  text-decoration: none;
  padding: 10px 32px;
  border-radius: 8px;
  font-size: 14px;
  color: #ffffff;

  span {
    white-space: nowrap;
  }
`

const activeLink = css`
  background-color: #3b3b3b;
`

export const SidebarContainer = styled.div`
  background-color: #1e1e1e;
  width: 250px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 80px 20px 20px 20px;
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  overflow-y: auto;
  color: #ffffff;
  z-index: 20;
  align-items: flex-start;
  font-size: 12px;
`

export const NavMenu = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  ${mediaQuery("desktop")`
    padding-bottom: 45px;
  `}
`

export const NavTitle = styled.div`
  font-size: 15px;
  font-weight: bold;
  color: #a0a0a0;
  margin: 20px 0 10px;
  padding-left: 10px;
  display: flex;
  align-items: center;
  gap: 8px;

  ${mediaQuery("desktop")`
    margin: 10px;
    padding: 0;
  `}
`

export const Subtitle = styled.div<{ disabled?: boolean; $isActive?: boolean }>`
  transition: background-color 0.3s, color 0.3s;

  ${(props) =>
    props.$isActive &&
    `
    a {
      ${activeLink}

      &:hover {
        ${navLinkStyles}
      }
    }
  `}

  a {
    ${navLinkStyles}

    &:hover {
      ${activeLink}
    }
  }

  svg {
    flex-shrink: 0;
  }
`

export const DisabledLink = styled.div`
  ${navLinkStyles}
  color: #333333;
  cursor: no-drop;
`

export const Divider = styled.div`
  width: 100%;
  height: 1px;
  background-color: #3a3a3a;
  margin: 15px 0;

  ${mediaQuery("desktop")`
    margin: 4px 0;
  `}
`

export const SidebarFooter = styled.div`
  margin-top: auto;
  font-size: 12px;
  padding: 20px 20px 0;
  color: #a0a0a0;
  width: 100%;
  text-align: center;
  border-top: 1px solid #333333;
  background-color: rgb(30, 30, 30);

  ${mediaQuery("desktop")`
    position: absolute;
    bottom: 0;
    left: 0;
    padding: 16px;
  `}
`

export const CloseIconWrapper = styled.div`
  color: #ffffff;
  font-size: 24px;
  cursor: pointer;
`
