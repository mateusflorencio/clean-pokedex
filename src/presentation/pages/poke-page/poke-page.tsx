import { Header } from '@/presentation/components'
import React from 'react'
import Styles from './poke-page.scss'

export const PokePage: React.FC = () => (
  <div className={Styles.pokePageBox}>
    <Header/>
  </div>
)
