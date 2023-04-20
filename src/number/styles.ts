import styled from 'styled-components'

type NumberWrapperType = {
  isDone: boolean
}

export const NumberWrapper = styled.div<NumberWrapperType>`
  width: 1.7142em;
  height: 1.7142em;
  background-color: ${({ isDone }) => isDone ? '#59E391' : '#FFF'};
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.15);
  border-radius: 0.1904em;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 1.3125rem;
  line-height: 1.7142em;
  text-align: center;
  color: #2B283A;
  cursor: pointer;

  :active {
    scale: 0.95;
  }
`
