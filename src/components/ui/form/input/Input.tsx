import { StyledInput } from "./Input.styles"

interface InputProps {
  type?: string
  placeholder: string
  value?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const Input = ({ placeholder, value, onChange }: InputProps) => {
  return (
    <StyledInput placeholder={placeholder} value={value} onChange={onChange} />
  )
}

export default Input
