import { useNavigation } from '@react-navigation/native'
import { Container, GoBack, HeaderTypeStyleProps, Icon, Title } from './styles'

type SectionHeaderProps = {
  bgColor?: HeaderTypeStyleProps
  title: string
}

export function SectionHeader({
  title,
  bgColor = 'DEFAULT',
}: SectionHeaderProps) {
  const navigation = useNavigation()

  function previousPage() {
    navigation.goBack()
  }

  return (
    <Container bgColor={bgColor}>
      <GoBack onPress={previousPage}>
        <Icon />
      </GoBack>
      <Title>{title}</Title>
    </Container>
  )
}
