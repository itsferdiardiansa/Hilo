import { StyledButton } from './Button.styles'

interface ButtonProps {
  label?: string
  children?: React.ReactNode
  onClick?: () => void
}

const Button = ({ label, children, onClick }: ButtonProps) => {
  return (
    <StyledButton onClick={onClick}>{label ? label : children}</StyledButton>
  )
}

export default Button
