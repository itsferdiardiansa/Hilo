import Link from 'next/link'
import { FiHome, FiSettings } from 'react-icons/fi'
import {
  Container,
  MainMenu,
  MainContent,
  NavItem,
  NavMenu,
  Settings,
  BrandLogo,
} from './DashboardLayout.styles'
import { PropsWithChildren } from 'react'
import { useRouter } from 'next/router'

const DashboardLayout = ({ children }: PropsWithChildren) => {
  return (
    <Container>
      <MainMenu>
        <BrandLogo>Pokedex</BrandLogo>
        <NavMenu>
          <NavItem>
            <Link href="/" passHref>
              <FiHome size={18} />
              <span>Pokemon</span>
            </Link>
          </NavItem>

          <NavItem>
            <FiSettings size={18} />
            <span>Settings</span>
          </NavItem>
        </NavMenu>
      </MainMenu>
      <MainContent>{children}</MainContent>
    </Container>
  )
}

export default DashboardLayout
