import { Container, Header, Logo, Profile, Title } from './styles'

import logoImg from '@assets/logo.png'
import profileImg from '@assets/profile.png'
import { PercentInfo } from '@components/PercentInfo'

export function Home() {
  return (
    <Container>
      <Header>
        <Logo source={logoImg} />
        <Profile source={profileImg} />
      </Header>

      <PercentInfo />
      <Title>Home</Title>
    </Container>
  )
}
