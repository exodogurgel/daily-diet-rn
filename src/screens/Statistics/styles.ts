import { ArrowLeft } from 'phosphor-react-native'
import { TouchableOpacity } from 'react-native'
import styled, { css } from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
`

type HeaderStyleTypeProps = {
  isDietPositive: boolean
}

export const Header = styled.View<HeaderStyleTypeProps>`
  background-color: ${({ theme, isDietPositive }) =>
    isDietPositive ? theme.COLORS.GREEN_100 : theme.COLORS.RED_100};

  height: 200px;
  width: 100%;
  padding: 70px 32px 66px;
  position: relative;

  justify-content: center;
  align-items: center;
`

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE['2XL']};
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_700};
  `}
`

export const Subtitle = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.SM};
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_600};
  `}
`

export const GoBack = styled(TouchableOpacity)`
  position: absolute;
  left: 32px;
  top: 64px;
`

export const Icon = styled(ArrowLeft).attrs({
  size: 24,
})``

export const StatisticsContent = styled.View`
  flex: 1;
  margin-top: -32px;
  border-radius: 20px;
  padding: 32px 24px;

  align-items: center;

  background-color: ${({ theme }) => theme.COLORS.GRAY_100};
  box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.05);
`

export const StatisticsTitle = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.SM};
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_700};
  `}

  margin-bottom: 24px;
`

export type ButtonTypeStyleProps = 'SM' | 'LG'

type Props = {
  size: ButtonTypeStyleProps
  bgColor?: 'GREEN' | 'RED'
}

export const StatisticsCard = styled.View<Props>`
  width: 100%;
  flex: 1;
  max-height: ${({ size }) => (size === 'LG' ? '90px' : '108px')};
  background-color: ${({ theme, bgColor }) =>
    bgColor
      ? bgColor === 'GREEN'
        ? theme.COLORS.GREEN_100
        : theme.COLORS.RED_100
      : theme.COLORS.GRAY_200};
  border-radius: 8px;
  padding: 20px;

  justify-content: center;
  align-items: center;
  margin-bottom: 12px;
`

export const CardTitle = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.XL};
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_700};
  `}
`
export const CardSubtitle = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.SM};
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_600};
  `}

  text-align: center;
`

export const FooterCards = styled.View`
  width: 100%;
  flex: 1;
  flex-direction: row;
  gap: 12px;
`
