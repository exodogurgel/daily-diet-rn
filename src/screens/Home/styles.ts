import { SafeAreaView } from 'react-native-safe-area-context'
import styled, { css } from 'styled-components/native'

export const Container = styled(SafeAreaView)`
  align-items: center;
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_100};
  padding: 0 24px;
`

export const Header = styled.View`
  padding-top: 66px;
  padding-bottom: 40px;

  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`

export const Logo = styled.Image`
  width: 82px;
  height: 37px;
`

export const Profile = styled.Image`
  width: 40px;
  height: 40px;
  border-radius: 999px;
  border: 2px solid ${({ theme }) => theme.COLORS.GRAY_600};
`

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE['2XL']};
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.RED_500};
  `}
`
