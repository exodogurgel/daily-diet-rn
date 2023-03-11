import { ArrowUpRight } from 'phosphor-react-native'
import styled, { css } from 'styled-components/native'

export type PercentInfoTypeStyleProps = 'PRIMARY' | 'SECONDARY'

type Props = {
  type: PercentInfoTypeStyleProps
}

export const Container = styled.View<Props>`
  height: 102px;
  width: 100%;
  padding: 20px 16px;
  border-radius: 8px;

  position: relative;

  align-items: center;
  justify-content: center;
  gap: 4px;

  background-color: ${({ theme, type }) =>
    type === 'PRIMARY' ? theme.COLORS.GREEN_100 : theme.COLORS.RED_100};
`

export const Button = styled.TouchableOpacity`
  flex: 1;
  position: absolute;
  right: 10px;
  top: 10px;
`
export const OpenStatistics = styled(ArrowUpRight).attrs(({ theme }) => ({
  size: 24,
}))``

export const Title = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_700};
    font-size: ${theme.FONT_SIZE['2XL']};
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
`

export const SubTitle = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_600};
    font-size: ${theme.FONT_SIZE.SM};
    font-family: ${theme.FONT_FAMILY.REGULAR};
  `}
`
