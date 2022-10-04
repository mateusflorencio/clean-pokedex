import Styles from './pokemons-list.scss'
import React from 'react'
import { Pokemon } from '@/data/models'
import { CardPokemon } from '@/presentation/components'
import { } from '../'

type Props = {
  pokemons: Pokemon[]
}

export const PokemonsList: React.FC<Props> = ({ pokemons }: Props) => {
  return (
    <div className={Styles.pokemonsList}>
     <ul>
     {pokemons.map(i => (<CardPokemon key={i.id}
        img={i.img[0]}
        name={i.name}
        type={i.type}
      />
     ))}
     </ul>
    </div>
  )
}
