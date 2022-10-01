import { Lupa } from '@/presentation/components/lupa/lupa'
import React from 'react'
import Styles from './search-modal.scss'

export const SearchModal: React.FC = () => (
  <div className={Styles.modalSearchBox}>
    <div className={Styles.bg}></div>
    <div className={Styles.modal}>
      <div className={Styles.closeModal}>X</div>
    <div className={Styles.inputBox}>
      <input type="text" placeholder='Busque um pokémon...' />
      <div><Lupa/></div>
    </div>
    </div>
  </div>
)
