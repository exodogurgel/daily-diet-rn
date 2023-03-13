import { SafeAreaView } from 'react-native-safe-area-context'
import styled, { css } from 'styled-components/native'

export const Container = styled(SafeAreaView)`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 32px;

  background-color: ${({ theme }) => theme.COLORS.GRAY_100};
`

type FeedbackTypeStyleProps = {
  inDiet: boolean
}

export const Title = styled.Text<FeedbackTypeStyleProps>`
  ${({ theme, inDiet }) => css`
    font-size: ${theme.FONT_SIZE.XL};
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${inDiet ? theme.COLORS.GREEN_500 : theme.COLORS.RED_500};
  `}
`

export const Subtitle = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD};
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_700};
  `}

  text-align: center;
  margin-top: 8px;
`

export const StrongText = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD};
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_700};
  `}
`

export const Image = styled.Image`
  width: 224px;
  height: 288px;
  margin: 40px 0 32px;
`

export const ButtonContainer = styled.View`
  width: 191px;
`
