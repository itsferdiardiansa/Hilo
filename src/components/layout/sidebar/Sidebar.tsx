import Link from "next/link"
import type { ReactNode } from "react"
import { Drawer } from "antd"
import {
  SidebarContainer,
  NavTitle,
  Subtitle,
  NavMenu,
  Divider,
  SidebarFooter,
  DisabledLink,
} from "./Sidebar.styles"
import { useMedia } from "use-media"
import { useRouter } from "next/router"
import { FiX } from "react-icons/fi"

const packageJson = require("@root/package.json")
const version = packageJson.version

type NavItem = {
  title: string
  icon: ReactNode
  links: { label: string; href: string; icon: ReactNode; disabled: boolean }[]
}

type SidebarProps = {
  items: NavItem[]
  isOpen: boolean
  onClose: () => void
}

const InnerNavMenu = ({ items }: Omit<SidebarProps, "isOpen" | "onClose">) => {
  const router = useRouter()

  return (
    <>
      <NavMenu>
        {items.map((item, idx) => (
          <div key={idx}>
            <NavTitle>
              {item.icon} {item.title}
            </NavTitle>
            {item.links.map((link, linkIdx) => (
              <Subtitle key={linkIdx} $isActive={router.pathname === link.href}>
                {!link.disabled ? (
                  <Link href={link.href} passHref>
                    {link.icon}
                    <span>{link.label}</span>
                  </Link>
                ) : (
                  <DisabledLink>
                    {link.icon}
                    <span>{link.label}</span>
                  </DisabledLink>
                )}
              </Subtitle>
            ))}
            {idx < items.length - 1 ? <Divider /> : null}
          </div>
        ))}
      </NavMenu>
      <SidebarFooter>© Ferdi Ardiansa. v{version}</SidebarFooter>
    </>
  )
}

const Sidebar = ({ items, isOpen, onClose }: SidebarProps) => {
  const isMobileOrTablet = useMedia({ maxWidth: 1024 })

  if (isMobileOrTablet)
    return (
      <Drawer
        placement="bottom"
        onClose={onClose}
        title="Main Menu"
        open={isOpen}
        height="100vh"
        styles={{
          header: { padding: 16, borderBottom: "1px solid #333333" },
          body: { padding: 10 },
          content: { backgroundColor: "#1e1e1e", color: "#ffffff" },
        }}
        closeIcon={<FiX style={{ color: "#ffffff", fontSize: "16px" }} />}
      >
        <InnerNavMenu items={items} />
      </Drawer>
    )

  return (
    <SidebarContainer>
      <InnerNavMenu items={items} />
    </SidebarContainer>
  )
}

export default Sidebar
