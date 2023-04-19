import styled from 'styled-components'
import { Playground } from './playground'

const Container = styled.div`
  display: flex;
  min-height: 100%;
  align-items: center;
  justify-content: center;
`

export function App () {
  return (
    <Container>
      <Playground />
    </Container>
  )
}
