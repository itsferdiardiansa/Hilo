import { FiBell, FiUser, FiMenu } from "react-icons/fi"
import {
  Container,
  Logo,
  IconGroup,
  IconItem,
  MobileMenuIcon,
} from "./Header.styles"

type HeaderProps = {
  onMenuClick: () => void
}

const Header = ({ onMenuClick }: HeaderProps) => {
  return (
    <Container>
      <Logo>Pokedex</Logo>
      <IconGroup>
        <IconItem>
          <FiBell size={18} />
        </IconItem>
        <IconItem>
          <FiUser size={18} />
        </IconItem>
        <MobileMenuIcon onClick={onMenuClick}>
          <FiMenu size={18} />
        </MobileMenuIcon>
      </IconGroup>
    </Container>
  )
}

export default Header
