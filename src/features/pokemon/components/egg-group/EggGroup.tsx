import { FaEgg, FaClock } from 'react-icons/fa'
import {
  EggGroupContainer,
  Title,
  SubTitle,
  EggGroupList,
  EggGroupItem,
  IconContainer,
  InfoRow,
} from './EggGroup.styles'

const EggGroup = ({ eggGroups = [], hatchTime = 'N/A' }) => {
  return (
    <EggGroupContainer>
      <Title>Egg Group & Breeding Info</Title>
      <div>
        <SubTitle>Egg Groups:</SubTitle>
        <EggGroupList>
          {eggGroups.map((group, index) => (
            <EggGroupItem key={index}>
              <IconContainer>
                <FaEgg />
              </IconContainer>
              {group}
            </EggGroupItem>
          ))}
        </EggGroupList>
      </div>
      <InfoRow>
        <IconContainer>
          <FaClock />
        </IconContainer>
        <SubTitle>Hatch Time:</SubTitle> {hatchTime} cycles
      </InfoRow>
    </EggGroupContainer>
  )
}

export default EggGroup
