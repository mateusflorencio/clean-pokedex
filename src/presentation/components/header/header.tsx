import React from 'react'
import { Logo, Lupa } from '@/presentation/components'
import Styles from './header-styles.scss'

export const Header: React.FC = () => (
  <div className={Styles.headerContainer}>
    <header>
      <Logo/>
      <div className={Styles.lupa}>
        <Lupa/>
      </div>
    </header>
  </div>
)
