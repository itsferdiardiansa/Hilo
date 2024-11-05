import { FiChevronDown, FiFilter } from "react-icons/fi"
import { StyledSelectContainer, StyledSelect } from "./Select.styles"

interface SelectProps<T> {
  options: T[]
  value: T | null
  onChange: (value: T) => void
  getOptionLabel: (option: T) => string
}

const Select = <T,>({
  options,
  value,
  onChange,
  getOptionLabel,
}: SelectProps<T>) => {
  return (
    <StyledSelectContainer>
      <FiFilter className="filter-icon" />
      <StyledSelect
        value={value ? getOptionLabel(value) : ""}
        onChange={(e) => {
          const selectedOption = options.find(
            (option) => getOptionLabel(option) === e.target.value,
          )
          if (selectedOption) {
            onChange(selectedOption)
          }
        }}
      >
        <option value="">Choose</option>
        {options.map((option, index) => (
          <option key={index} value={getOptionLabel(option)}>
            {getOptionLabel(option)}
          </option>
        ))}
      </StyledSelect>
      <FiChevronDown className="chevron-icon" />
    </StyledSelectContainer>
  )
}

export default Select
