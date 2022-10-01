import React from 'react'
import { Logo, Lupa } from '@/presentation/components'
import Styles from './header-styles.scss'
import { SearchModal } from './components/search-modal/search-modal'

export const Header: React.FC = () => (

  <div className={Styles.headerContainer}>
    <header className={Styles.box}>
      <Logo/>
      <div className={Styles.lupa}>
        <Lupa/>
      </div>
    </header>
     <SearchModal/>
  </div>
)
