import { ArrowLeft } from 'phosphor-react-native'
import { TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import styled, { css } from 'styled-components/native'

export type HeaderTypeStyleProps = 'DEFAULT' | 'GREEN' | 'RED'

type Props = {
  bgColor?: HeaderTypeStyleProps
}

export const Container = styled(SafeAreaView)<Props>`
  background-color: ${({ theme, bgColor }) => {
    if (bgColor === 'DEFAULT') {
      return theme.COLORS.GRAY_300
    } else if (bgColor === 'GREEN') {
      return theme.COLORS.GREEN_100
    } else if (bgColor === 'RED') {
      return theme.COLORS.RED_100
    }
  }};

  height: 132px;
  width: 100%;
  position: relative;

  justify-content: center;
  align-items: center;
`

export const GoBack = styled(TouchableOpacity)`
  position: absolute;
  left: 32px;
  top: 64px;
`

export const Icon = styled(ArrowLeft).attrs({
  size: 24,
})``

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.LG};
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_700};
  `}
`
