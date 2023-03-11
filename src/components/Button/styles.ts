import { TouchableOpacity } from 'react-native'
import styled, { css } from 'styled-components/native'

export type ButtonTypeStyleProps = 'PRIMARY' | 'SECONDARY'

type Props = {
  type: ButtonTypeStyleProps
}

export const Container = styled(TouchableOpacity)<Props>`
  ${({ theme, type }) => css`
    background-color: ${type === 'PRIMARY'
      ? theme.COLORS.GRAY_600
      : 'transparent'};

    border: ${type === 'PRIMARY' ? 0 : `1px solid ${theme.COLORS.GRAY_700}`};
  `}

  width: 100%;
  height: 50px;

  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 12px;

  border-radius: 6px;
`

export const Title = styled.Text<Props>`
  ${({ theme, type }) => css`
    font-size: ${theme.FONT_SIZE.SM};
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${type === 'PRIMARY' ? theme.COLORS.WHITE : theme.COLORS.GRAY_700};
  `}
`
