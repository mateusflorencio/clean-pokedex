import { Header } from '@/presentation/components'
import React from 'react'
import Styles from './poke-page.scss'

export const PokePage: React.FC = () => (
  <>
  <Header/>
  <div className={Styles.pokePageBox}>
    <div className={Styles.btnBox}>
      <div className={[Styles['bg-green'], Styles.btn].join(' ')} >back</div>
      <div className={[Styles['bg-blue'], Styles.btn].join(' ')} >next</div>
    </div>

    <div className={Styles.contentBox}>

      <div className={Styles.outYellow}></div>

      <div className={[Styles['bg-fire-gradient-to-left'], Styles.bgImgBox].join(' ')}>
        <div className={Styles.outWhite}></div>
        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/6.svg" alt="" />
      </div>
      <div className={Styles.descriptionBox}>
        <h1>Charizardi</h1>
        <h2>Habilidades</h2>
        <p>text</p>
        <p>text</p>
        <h2>Formas</h2>
        <p>text</p>
        <p>text</p>
        <h2>Altura</h2>
        <p>cm</p>
        <h2>Movimentos</h2>
        <p>text</p>
        <p>text</p>
        <h2>Tipo</h2>
        <p>text</p>
        <p>text</p>

      </div>

      <div className={Styles.pictureBox}>
        <div className={Styles.picture}> <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/132.svg" alt="" /> </div>
        <div className={Styles.picture}><img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/132.png" alt="" />  </div>
      </div>
    </div>
  </div>
  </>
)
