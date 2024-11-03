import React from 'react'
import { TabButton, TabsContainer } from './Tabs.styles'

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
