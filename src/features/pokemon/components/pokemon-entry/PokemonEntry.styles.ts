import styled from "styled-components"

export const EntryContainer = styled.div`
  background-color: #2d2d2d;
  color: #ffffff;
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

export const EntryContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`

export const Description = styled.p`
  font-size: 14px;
  color: #ffffff;
  line-height: 1.5;
`

export const InfoRow = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  color: #ffffff;
`

export const IconContainer = styled.div`
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
`

export const SubTitle = styled.span`
  font-weight: bold;
  color: #ffffff;
`
