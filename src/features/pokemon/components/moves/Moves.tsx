import React, { useState } from 'react'
import Tabs from '@/components/tabs'
import { Card, MoveCell, MoveHeader, MoveRow, MoveTable } from './Moves.styles'

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

  const tabs = [
    { label: 'All', value: 'all' },
    { label: 'Physical', value: 'physical' },
    { label: 'Special', value: 'special' },
    { label: 'Status', value: 'status' },
  ]

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
