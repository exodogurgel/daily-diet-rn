import styled, { css } from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
`

export const Content = styled.View`
  flex: 1;
  margin-top: -20px;
  border-radius: 20px;
  padding: 40px 24px;

  align-items: flex-start;

  background-color: ${({ theme }) => theme.COLORS.GRAY_100};
  box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.05);
`

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.XX};
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_700};
  `}

  margin-bottom: 8px;
`

export const Description = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD};
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_600};
  `}

  margin-bottom: 24px;
`

export const Subtitle = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.SM};
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_700};
  `}

  margin-bottom: 8px;
`

export const DateAndTime = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD};
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_600};
  `}

  margin-bottom: 24px;
`

export const MealStatus = styled.View`
  padding: 8px 16px;
  border-radius: 1000px;

  flex-direction: row;
  gap: 8px;
  justify-content: center;
  align-items: center;

  background-color: ${({ theme }) => theme.COLORS.GRAY_200};
`

type StatusMealTypeStyleProps = {
  inDiet: boolean
}

export const Status = styled.View<StatusMealTypeStyleProps>`
  width: 8px;
  height: 8px;
  border-radius: 1000px;

  background-color: ${({ theme, inDiet }) =>
    inDiet ? theme.COLORS.GREEN_500 : theme.COLORS.RED_500};
`

export const TitleStatus = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.SM};
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_700};
  `}
`

export const Footer = styled.View`
  width: 100%;
  gap: 8px;

  margin-top: auto;
`
