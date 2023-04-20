import { ReactNode } from 'react'
import { dataArr, valueNum } from '@/resources/atom'
import { useAtom, useSetAtom } from 'jotai'

import * as S from './styles'

type NumberProps = {
  children: ReactNode
  isDone: boolean
  id: number
  value: number
}

export const Number = ({ children, isDone, id, value }: NumberProps) => {
  const setData = useSetAtom(dataArr)
  const [currentValue, setCurrentValue] = useAtom(valueNum)

  const handleClick = () => {
    if (!currentValue) {
      setCurrentValue(value)
    }

    setData(prev => {
      return prev.map(item => {
        if (item.id === id) {
          return {
            ...item,
            isDone: !currentValue ? true : value === currentValue,
          }
        }

        return item
      })
    })
  }

  return (
    <S.NumberWrapper
      isDone={isDone}
      onClick={handleClick}
    >
      {children}
    </S.NumberWrapper>
  )
}
