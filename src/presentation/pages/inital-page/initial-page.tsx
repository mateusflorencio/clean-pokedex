import { CardPokemon, Header } from '@/presentation/components'
import React from 'react'
import Styles from './initial-page-styles.scss'

export const InitalPage: React.FC = () => {
  return (
    <>
      <Header/>
      <div className={ Styles.initialPageBox }>
      <div className={Styles.contentBox}>
      <CardPokemon img={'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png'}
            description={'description'}
            name={'Pokémon'}
            title={'Title'}
            type={'fire'}
      />
      </div>
      <div className={Styles.contentBox}>
      <CardPokemon img={'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png'}
            description={'description'}
            name={'Pokémon'}
            title={'Title'}
            type={'water'}
      />
      </div>
      <div className={Styles.contentBox}>
      <CardPokemon img={'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png'}
            description={'description'}
            name={'Pokémon'}
            title={'Title'}
            type={'fire'}
      />
      </div>
      <div className={Styles.contentBox}>
      <CardPokemon img={'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png'}
            description={'description'}
            name={'Pokémon'}
            title={'Title'}
            type={'fire'}
      />
      </div>
      <div className={Styles.contentBox}>
      <CardPokemon img={'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png'}
            description={'description'}
            name={'Pokémon'}
            title={'Title'}
            type={'bug'}
      />
      </div>
      <div className={Styles.contentBox}>
      <CardPokemon img={'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png'}
            description={'description'}
            name={'Pokémon'}
            title={'Title'}
            type={'water'}
      />
      </div>
      <div className={Styles.contentBox}>
      <CardPokemon img={'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png'}
            description={'description'}
            name={'Pokémon'}
            title={'Title'}
            type={'water'}
      />
      </div>
      <div className={Styles.contentBox}>
      <CardPokemon img={'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png'}
            description={'description'}
            name={'Pokémon'}
            title={'Title'}
            type={'bug'}
      />
      </div>
      <div className={Styles.contentBox}>
      <CardPokemon img={'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png'}
            description={'description'}
            name={'Pokémon'}
            title={'Title'}
            type={'fire'}
      />
      </div>
      <div className={Styles.contentBox}>
      <CardPokemon img={'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png'}
            description={'description'}
            name={'Pokémon'}
            title={'Title'}
            type={'fire'}
      />
      </div>
      <div className={Styles.contentBox}>
      <CardPokemon img={'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png'}
            description={'description'}
            name={'Pokémon'}
            title={'Title'}
            type={'bug'}
      />
      </div>
      </div>
    </>
  )
}
