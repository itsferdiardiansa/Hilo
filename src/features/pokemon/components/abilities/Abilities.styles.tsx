import styled from "styled-components"

export const AbilitiesContainer = styled.div`
  background-color: #2d2d2d;
  color: #fff;
  padding: 20px;
  border-radius: 12px;
  width: 100%;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
`

export const Title = styled.h3`
  font-size: 20px;
  font-weight: bold;
  color: #ffffff;
  margin-bottom: 16px;
  border-bottom: 1px solid #444;
  padding-bottom: 8px;
`

export const AbilityList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`

export const AbilityItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  align-items: flex-start;
  position: relative;
`

export const AbilityHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`

export const AbilityName = styled.span`
  font-size: 16px;
  font-weight: bold;
  color: #ffffff;
`

export const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 22px;
  height: 22px;
  font-size: 16px;
  color: #ffffff;
`

export const AbilityDescription = styled.p`
  font-size: 14px;
  color: #ffffff;
  margin-top: 4px;
  line-height: 1.5;
`

export const HiddenAbilityBadge = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 12px;
  font-weight: bold;
  color: #ffffff;
`
