/* eslint-disable jsx-a11y/alt-text */
import { useNavigation, useRoute } from '@react-navigation/native'
import {
  ButtonContainer,
  Container,
  Image,
  StrongText,
  Subtitle,
  Title,
} from './styles'

import positiveFeedbackImg from '@assets/illustration-positive.png'
import negativeFeedbackImg from '@assets/illustration-negative.png'
import { Button } from '@components/Button'

type RouteParams = {
  inDiet: boolean
}

export function Feedback() {
  const route = useRoute()
  const { inDiet } = route.params as RouteParams

  const navigation = useNavigation()

  function goHome() {
    navigation.navigate('home')
  }
  return (
    <Container>
      <Title inDiet={inDiet}>{inDiet ? 'Continue assim!' : 'Que pena!'}</Title>

      {inDiet ? (
        <Subtitle>
          Você continua <StrongText>dentro da dieta.</StrongText> Muito bem!
        </Subtitle>
      ) : (
        <Subtitle>
          Você <StrongText>saiu da dieta</StrongText> dessa vez, mas continue se
          esforçando e não desista!
        </Subtitle>
      )}

      <Image source={inDiet ? positiveFeedbackImg : negativeFeedbackImg} />

      <ButtonContainer>
        <Button title="Ir para a página inicial" onPress={goHome} />
      </ButtonContainer>
    </Container>
  )
}
