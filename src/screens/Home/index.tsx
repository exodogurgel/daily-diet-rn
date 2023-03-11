import { Container, Header, Logo, Profile, Title } from './styles'

import logoImg from '@assets/logo.png'
import profileImg from '@assets/profile.png'
import { PercentInfo } from '@components/PercentInfo'
import { Button } from '@components/Button'
import { Plus } from 'phosphor-react-native'

export function Home() {
  return (
    <Container>
      <Header>
        <Logo source={logoImg} />
        <Profile source={profileImg} />
      </Header>

      <PercentInfo />

      <Title>Refeições</Title>
      <Button icon={<Plus size={18} color="white" />} />
    </Container>
  )
}
