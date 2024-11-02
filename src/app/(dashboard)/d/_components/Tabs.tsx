import React from 'react'
import styled from 'styled-components'

const TabsContainer = styled.div`
  display: flex;
  border-bottom: 1px solid #34495e;
  margin-bottom: 20px;
`

const TabButton = styled.button<{ active: boolean }>`
  flex: 1;
  padding: 12px;
  font-size: 16px;
  font-weight: ${({ active }) => (active ? 'bold' : 'normal')};
  cursor: pointer;
  background-color: ${({ active }) => (active ? '#34495E' : 'transparent')};
  color: ${({ active }) => (active ? '#FFF' : '#B0C4DE')};
  border: none;
  border-bottom: ${({ active }) => (active ? '3px solid #3B4CCA' : 'none')};
  transition: background-color 0.3s;
  border-radius: 12px 12px 0 0;

  &:hover {
    background-color: ${({ active }) => (active ? '#34495E' : '#3B4CCA')};
    color: #ffffff;
  }
`

interface Tab {
  label: string
  value: string
}

interface TabsProps {
  tabs: Tab[]
  activeTab: string
  onTabClick: (value: string) => void
}

const Tabs: React.FC<TabsProps> = ({ tabs, activeTab, onTabClick }) => (
  <TabsContainer>
    {tabs.map((tab) => (
      <TabButton
        key={tab.value}
        active={activeTab === tab.value}
        onClick={() => onTabClick(tab.value)}
      >
        {tab.label}
      </TabButton>
    ))}
  </TabsContainer>
)

export default Tabs
