import { Lupa } from '@/presentation/components/lupa/lupa'
import React from 'react'
import Styles from './search-modal.scss'

import { stateModalSearchState } from '../atoms/atoms'
import { useRecoilState } from 'recoil'

export const SearchModal: React.FC = () => {
  const [stateModalSearch, setStateModalSearch] = useRecoilState(stateModalSearchState)

  return (
  <div className={Styles.modalSearchBox}>
    <div className={Styles.bg}></div>
    <div className={Styles.modal}>
      <div onClick={() => { setStateModalSearch(!stateModalSearch) }} className={Styles.closeModal}>X</div>
    <div className={Styles.inputBox}>
      <input type="text" placeholder='Busque um pokémon...' />
      <div><Lupa/></div>
    </div>
    </div>
  </div>
  )
}
