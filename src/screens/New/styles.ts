import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
`

export const Form = styled.View`
  flex: 1;
  gap: 24px;
  margin-top: -20px;
  border-radius: 20px;
  padding: 32px 24px;

  align-items: center;

  background-color: ${({ theme }) => theme.COLORS.GRAY_100};
  box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.05);
`

export const DateAndTime = styled.View`
  width: 100%;
  flex-direction: row;
  gap: 20px;
`

export const InDietContainer = styled.View`
  flex: 1;
`
