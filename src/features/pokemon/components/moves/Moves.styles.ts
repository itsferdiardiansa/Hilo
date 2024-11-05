import styled from "styled-components"

export const Card = styled.div`
  background-color: #252525;
  border-radius: 12px;
  padding: 20px;
  width: 100%;
  color: #ffffff;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  margin-left: 0;
`

export const MoveTable = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  color: #ffffff;
  border-radius: 12px;
`

export const MoveHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  background-color: rgba(255, 255, 255, 0.1);
  font-weight: bold;
  border-radius: 8px;
`

export const MoveRow = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);

  &:last-child {
    border-bottom: none;
  }
`

export const MoveCell = styled.div`
  flex: 1;
  text-align: center;
  font-size: 14px;
`

// Data Types
export interface Move {
  level: string
  name: string
  type: string
  icon: string
  power: string
  accuracy: string
  pp: string
  damage_class: string
}
