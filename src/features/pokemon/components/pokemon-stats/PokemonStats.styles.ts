import styled from 'styled-components'

export const StatsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  background-color: #252525;
  border-radius: 16px;
  padding: 20px;
  width: 100%;
  color: #fff;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
`

export const Title = styled.h2`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 16px;
`

export const StatRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const StatLabel = styled.div`
  font-size: 14px;
  color: #ffffff;
  font-weight: bold;
  width: 100px;
`

export const StatValue = styled.div`
  font-size: 14px;
  color: #b0c4de;
  width: 60px;
  text-align: right;
  white-space: nowrap;
  margin-left: 10px;
`

export const BarContainer = styled.div`
  flex: 1;
  height: 10px;
  background-color: #333;
  border-radius: 5px;
  overflow: hidden;
  margin-left: 10px;
  display: flex;
  position: relative;
`

export const BarFill = styled.div<{
  value: number
  color: string
  position: 'min' | 'max'
}>`
  position: absolute;
  height: 100%;
  width: ${({ value }) => value}%;
  background-color: ${({ color }) => color};
  border-radius: ${({ position }) =>
    position === 'min' ? '5px 0 0 5px' : '0 5px 5px 0'};
  transition: width 0.5s ease;
`
