import { useAtom, useSetAtom } from 'jotai'
import { dataArr, valueNum } from '@/resources/atom'
import { Number } from '@/number'
import { useCallback, useEffect } from 'react'
import useWindowsSize from 'react-use/lib/useWindowSize'
import Confetti from 'react-confetti'

import * as S from './styles'

export const Playground = () => {
  const [data, setData] = useAtom(dataArr)
  const setCurrentValue = useSetAtom(valueNum)
  const { width, height } = useWindowsSize()

  const roll = useCallback(() => {
    setData(prev => {
      return prev.map(item => {
        const num = Math.ceil(Math.random() * 6)

        if (!item.isDone) {
          return {
            ...item,
            value: num,
          }
        }

        return item
      })
    })
  }, [setData])

  useEffect(() => {
    roll()
  }, [roll])

  const isGameOver = data.every(item => item.isDone)

  return (
    <>
      {isGameOver
        ? (
          <Confetti
            width={width}
            height={height}
            tweenDuration={30000}
            recycle={false}
          />
          )
        : null}

      <S.PlaygroundWrapper>
        <S.Title>Tenzies</S.Title>

        <S.Desc>Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</S.Desc>

        <S.NumbersWrapper>
          {data.map(number => (
            <Number
              key={number.id}
              id={number.id}
              value={number.value}
              isDone={number.isDone}
            >
              {number.value}
            </Number>
          ))}
        </S.NumbersWrapper>

        <S.RollBtn
          onClick={() => {
            if (isGameOver) {
              setData(prev => prev.map(item => ({ ...item, isDone: false })))
              setCurrentValue(undefined)
            }

            roll()
          }}
        >
          {isGameOver
            ? (
              <>Reset game</>
              )
            : (
              <>Roll</>
              )}
        </S.RollBtn>
      </S.PlaygroundWrapper>
    </>
  )
}
