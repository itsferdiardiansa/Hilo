import React, { useState } from 'react'
import styled from 'styled-components'
import Tabs from './Tabs'

// Styled Components
const Card = styled.div`
  background-color: #252525;
  border-radius: 12px;
  padding: 20px;
  width: 100%;
  color: #ffffff;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  margin-left: 0;
`

const MoveTable = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  color: #ffffff;
  border-radius: 12px;
`

const MoveHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  background-color: rgba(255, 255, 255, 0.1);
  font-weight: bold;
  border-radius: 8px;
`

const MoveRow = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);

  &:last-child {
    border-bottom: none;
  }
`

const MoveCell = styled.div`
  flex: 1;
  text-align: center;
  font-size: 14px;
`

// Data Types
interface Move {
  level: string
  name: string
  type: string
  icon: string
  power: string
  accuracy: string
  pp: string
  damage_class: string
}

interface MovesProps {
  moves: Move[]
}

const Moves: React.FC<MovesProps> = ({ moves }) => {
  const [activeTab, setActiveTab] = useState('all')

  // Tabs Data
  const tabs = [
    { label: 'All', value: 'all' },
    { label: 'Physical', value: 'physical' },
    { label: 'Special', value: 'special' },
    { label: 'Status', value: 'status' },
  ]

  // Filter moves based on selected tab
  const filteredMoves =
    activeTab === 'all'
      ? moves
      : moves.filter((move) => move.damage_class === activeTab)

  return (
    <Card>
      <Tabs tabs={tabs} activeTab={activeTab} onTabClick={setActiveTab} />

      <MoveTable>
        <MoveHeader>
          <MoveCell>Level</MoveCell>
          <MoveCell>Move</MoveCell>
          <MoveCell>Type</MoveCell>
          <MoveCell>Icon</MoveCell>
          <MoveCell>Power</MoveCell>
          <MoveCell>Accuracy</MoveCell>
          <MoveCell>PP</MoveCell>
        </MoveHeader>
        {filteredMoves.map((move, index) => (
          <MoveRow key={index}>
            <MoveCell>{move.level}</MoveCell>
            <MoveCell>{move.name}</MoveCell>
            <MoveCell>{move.type}</MoveCell>
            <MoveCell>{move.icon}</MoveCell>
            <MoveCell>{move.power || '-'}</MoveCell>
            <MoveCell>{move.accuracy || '-'}</MoveCell>
            <MoveCell>{move.pp}</MoveCell>
          </MoveRow>
        ))}
      </MoveTable>
    </Card>
  )
}

export default Moves
