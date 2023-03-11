import { TouchableOpacity } from 'react-native'
import styled, { css } from 'styled-components/native'

export const Container = styled(TouchableOpacity)`
  width: 100%;
  height: 50px;
  border: 1px solid ${({ theme }) => theme.COLORS.GRAY_300};
  border-radius: 6px;

  flex-direction: row;
  align-items: center;
  padding: 14px 16px;
  margin-bottom: 8px;
`

export const Hour = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.XS};
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_700};
  `}
`
export const Separator = styled.View`
  width: 1px;
  height: 14px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_400};
  margin: 0 12px;
`

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD};
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_600};
  `}

  flex: 1;
`
export type StatusTypeStyleProps = 'POSITIVE' | 'NEGATIVE'

type StatusProps = {
  status: StatusTypeStyleProps
}

export const Status = styled.View<StatusProps>`
  width: 14px;
  height: 14px;
  border-radius: 999px;

  background-color: ${({ theme, status }) =>
    status === 'POSITIVE' ? theme.COLORS.GREEN_100 : theme.COLORS.RED_100};
`
