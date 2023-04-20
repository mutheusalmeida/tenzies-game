import styled from 'styled-components'

export const PlaygroundWrapper = styled.div`
  background-color: #F5F5F5;
  border-radius: 0.625em;
  padding: 2.125em;
  max-width: 20em;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Title = styled.h1`
  font-size: 1.625rem;
  line-height: 1.15384em;
  letter-spacing: -0.03em;
  color: #2B283A;
`

export const Desc = styled.p`
  font-family: 'Inter', sans-serif;
  font-size: 0.8125rem;
  line-height: 1.2307em;
  letter-spacing: -0.03em;
  color: #4A4E74;
  text-align: center;
  max-width: 17.9230em;
`

export const NumbersWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1em;
  margin: 1.5em 0 1.625em;
`

export const RollBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.25em 1em;
  min-height: 2.25em;
  width: 5.75em;
  background-color: #5035FF;
  box-shadow: 0px 3.2px 7.68px rgba(0, 0, 0, 0.18);
  border-radius: 0.25em;
  border: none;
  font-weight: 700;
  font-size: 1rem;
  line-height: 1.1875em;
  color: #FFF;
  cursor: pointer;
  text-transform: capitalize;

  :hover,
  :focus {
    opacity: 0.95;
  }

  :active {
    scale: 0.98;
  }
`
