import styled, { css } from 'styled-components/native'

export const Container = styled.View`
  justify-content: center;
  align-items: center;
  flex: 1;
`

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE['2XL']};
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.RED_500};
  `}
`
