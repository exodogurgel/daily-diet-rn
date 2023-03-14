import { TouchableOpacity } from 'react-native'
import styled, { css } from 'styled-components/native'

export type SelectStyleProps = {
  isSelected?: 'IN-DIET' | 'OUT-DIET' | ''
  status: 'IN-DIET' | 'OUT-DIET'
}

export const Container = styled(TouchableOpacity)<SelectStyleProps>`
  width: 100%;
  flex: 1;

  height: 50px;
  border-radius: 6px;

  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 8px;

  background-color: ${({ theme, status, isSelected }) => {
    if (isSelected === 'IN-DIET' && status === 'IN-DIET') {
      return theme.COLORS.GREEN_100
    } else if (isSelected === 'OUT-DIET' && status === 'OUT-DIET') {
      return theme.COLORS.RED_100
    } else {
      return theme.COLORS.GRAY_200
    }
  }};

  border-width: ${({ isSelected }) => (isSelected ? '1px' : 'none')};

  border-color: ${({ theme, status, isSelected }) => {
    if (isSelected === 'IN-DIET' && status === 'IN-DIET') {
      return `${theme.COLORS.GREEN_500}`
    } else if (isSelected === 'OUT-DIET' && status === 'OUT-DIET') {
      return `${theme.COLORS.RED_500}`
    } else {
      return 0
    }
  }};
`

export const Status = styled.View<SelectStyleProps>`
  width: 8px;
  height: 8px;
  border-radius: 999px;

  background-color: ${({ theme, status }) =>
    status === 'IN-DIET' ? theme.COLORS.GREEN_500 : theme.COLORS.RED_500};
`

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.SM};
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_700};
  `}
`
