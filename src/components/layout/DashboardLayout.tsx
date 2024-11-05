import type { PropsWithChildren } from 'react'
import { useState } from 'react'
import {
  FiHome,
  FiBarChart,
  FiTarget,
  FiHeart,
  FiPieChart,
  FiList,
  FiFlag,
  FiSearch,
  FiStar,
  FiLayers,
  FiBook,
} from 'react-icons/fi'
import { Container, MainContent } from './DashboardLayout.styles'

import Header from './header'
import Sidebar from './sidebar'

const navItems = [
  {
    title: 'Dashboard',
    icon: <FiHome />,
    links: [
      { label: 'Pokémon', href: '/', icon: <FiBarChart />, disabled: false },
      {
        label: 'Statistik Pokémon',
        href: '/stats',
        icon: <FiPieChart />,
        disabled: true,
      },
      {
        label: 'Aktivitas Terakhir',
        href: '/activity',
        icon: <FiList />,
        disabled: true,
      },
    ],
  },
  {
    title: 'Pencarian',
    icon: <FiSearch />,
    links: [
      {
        label: 'Pencarian Berdasar Tipe',
        href: '/search-type',
        icon: <FiLayers />,
        disabled: true,
      },
      {
        label: 'Pencarian Lanjutan',
        href: '/search-advanced',
        icon: <FiTarget />,
        disabled: true,
      },
    ],
  },
  {
    title: 'Favorit',
    icon: <FiStar />,
    links: [
      {
        label: 'Koleksi Saya',
        href: '/favorites',
        icon: <FiHeart />,
        disabled: true,
      },
      {
        label: 'Tim Pertarungan',
        href: '/battle-team',
        icon: <FiFlag />,
        disabled: true,
      },
    ],
  },
  {
    title: 'Panduan',
    icon: <FiBook />,
    links: [
      {
        label: 'Tips Trainer',
        href: '/trainer-tips',
        icon: <FiBook />,
        disabled: true,
      },
      {
        label: 'Panduan Evolusi',
        href: '/evolution-guide',
        icon: <FiBarChart />,
        disabled: true,
      },
      {
        label: 'Tantangan Mini Games',
        href: '/mini-games',
        icon: <FiFlag />,
        disabled: true,
      },
    ],
  },
]

const DashboardLayout = ({ children }: PropsWithChildren) => {
  const [isSidebarOpen, setSidebarOpen] = useState(true)

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen)
  }

  return (
    <>
      <Header onMenuClick={toggleSidebar} />

      <Container>
        <Sidebar
          items={navItems}
          isOpen={isSidebarOpen}
          onClose={toggleSidebar}
        />
        <MainContent>{children}</MainContent>
      </Container>
    </>
  )
}

export default DashboardLayout
