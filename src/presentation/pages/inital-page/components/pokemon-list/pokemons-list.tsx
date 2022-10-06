import Styles from './pokemons-list.scss'
import React from 'react'
import { Pokemon } from '@/data/models'
import { CardPokemon } from '@/presentation/components'
import {} from '../'

type Props = {
  pokemons: Pokemon[]
}

export const PokemonsList: React.FC<Props> = ({ pokemons }: Props) => {
  return (
    <div className={Styles.pokemonsList}>
      <ul>
        {pokemons.map((i) => (
          <li key={i.id}>
            <CardPokemon
              img={i.images[1]}
              name={i.name}
              type={i.types}
              height={i.height}
            />
          </li>
        ))}
      </ul>
    </div>
  )
}
