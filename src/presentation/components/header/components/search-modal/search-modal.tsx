import React from 'react'
import Styles from './search-modal.scss'
import { useRecoilState } from 'recoil'
import { stateModalSearchState } from '@/presentation/components/header/components/atoms'
import { useNavigate } from 'react-router-dom'

import { Lupa } from '@/presentation/components/lupa/lupa'

type Props = {
  state: any
  setState: any
}

export const SearchModal: React.FC<Props> = ({ state, setState }: Props) => {
  const [{ input, hidden }, setModal] = useRecoilState(stateModalSearchState)
  const history = useNavigate()

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setModal((o) => ({ ...o, input: e.target.value }))
  }

  const handleClick = (): void => {
    history(`/pokemon/${input}`)
    setModal(() => ({ hidden: !hidden, input: '' }))
  }
  return (
    <>
      {state && (
        <div className={Styles.modalSearchBox}>
          <div className={Styles.bg}></div>
          <div className={Styles.modal}>
            <div
              onClick={() => {
                setState(false)
              }}
              className={Styles.closeModal}
            >
              X
            </div>
            <div className={Styles.inputBox}>
              <input
                value={input}
                onChange={(e) => handleInput(e)}
                type="text"
                placeholder="Busque um pokémon..."
              />
              <div onClick={handleClick}>
                <Lupa />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
