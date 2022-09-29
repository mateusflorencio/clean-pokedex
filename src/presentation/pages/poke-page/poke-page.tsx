import React from 'react'
import { Header } from '@/presentation/components'
import Card from './components/image-card/img-card'
import Buttom from './components/buttom/buttom'
import Description from './components/description/description'
import Picture from './components/picture/picture'
import Styles from './poke-page.scss'

export const PokePage: React.FC = () => (
  <>
  <Header/>
  <div className={Styles.pokePageBox}>
    <div className={Styles.btnBox}>
      <Buttom bgColor='blue' text='back'/>
      <Buttom bgColor='green' text='next'/>
    </div>

    <div className={Styles.contentBox}>
      <span className={Styles.outYellow}></span>
      <Card
        img='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/132.svg'
        type='blue'
      />

      <div className={Styles.descriptionBox}>
        <h1>Ditto</h1>
        <ul>
        <Description title='Title' text={['any', 'other']}/>
        <Description title='Title2' text={['any', 'other']}/>
        <Description title='Title3' text={['any', 'other']}/>
        </ul>
      </div>

      <div className={Styles.pictureBox}>
        <Picture img='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/132.svg'/>
        <Picture img='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/132.png'/>
        <Picture img='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/132.png'/>
      </div>
    </div>
  </div>
  </>
)
