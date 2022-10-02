import React from 'react'
import Styles from './search-modal.scss'

import { Lupa } from '@/presentation/components/lupa/lupa'

type Props = {
  state: any
  setState: any
}

export const SearchModal: React.FC<Props> = ({ state, setState }: Props) => (
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
            <input type="text" placeholder="Busque um pokémon..." />
            <div>
              <Lupa />
            </div>
          </div>
        </div>
      </div>
    )}
  </>
)
