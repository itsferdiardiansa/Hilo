import styled from "styled-components"

export const TypesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  background-color: #252525;
  border-radius: 16px;
  padding: 24px;
  width: 100%;
  color: #fff;
`

export const Title = styled.h2`
  font-size: 18px;
  font-weight: bold;
  color: #ffffff;
  margin-bottom: 16px;
  text-align: left;
`

export const TypeHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  flex-wrap: wrap;
  margin-bottom: 16px;
`

export const Badge = styled.div<{ color?: string }>`
  background-color: ${({ color }) => color || "#444"};
  color: #fff;
  font-size: 12px;
  padding: 6px 10px;
  border-radius: 12px;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  text-transform: capitalize;
`

export const BadgeIcon = styled.span`
  font-size: 14px;
`

export const DamageGroup = styled.div`
  margin-bottom: 16px;
  border-top: 1px solid #444;
  padding-top: 16px;
`

export const GroupTitle = styled.h3`
  font-size: 14px;
  font-weight: normal;
  color: #ffffff;
  margin-bottom: 8px;
  text-align: left;
`

export const BadgeRow = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  flex-wrap: wrap;
`
