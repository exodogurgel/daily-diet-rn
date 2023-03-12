import { TextInput } from 'react-native'
import styled, { css } from 'styled-components/native'

export type TextInputTypeStyleProps = 'DEFAULT' | 'TEXTAREA'

type Props = {
  type?: TextInputTypeStyleProps
  size?: 'SM' | 'DEFAULT'
}

export const Container = styled.View<Props>`
  width: 100%;

  flex: ${({ size }) => (size === 'SM' ? 1 : 'none')};
`

export const InputContainer = styled(TextInput)<Props>`
  width: 100%;

  ${({ theme, type }) => css`
    min-height: ${type === 'TEXTAREA' ? '120px' : '48px'};
    max-height: ${type === 'TEXTAREA' ? '120px' : '48px'};

    color: ${theme.COLORS.GRAY_700};

    font-size: ${theme.FONT_SIZE.MD};
    font-family: ${theme.FONT_FAMILY.REGULAR};
  `}

  background: transparent;
  border: 1px solid ${({ theme }) => theme.COLORS.GRAY_300};
  border-radius: 6px;
  padding: 14px;
`

export const Label = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_600};
    font-size: ${theme.FONT_SIZE.SM};
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
  margin-bottom: 4px;
  align-self: flex-start;
`
