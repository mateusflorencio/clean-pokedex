import Styles from './initial-page-styles.scss'
import { IListAllPokemon } from '@/domain/usecases'
import { Header } from '@/presentation/components'
import { listPokemonState, PokemonsList } from './components'

import { useRecoilState } from 'recoil'
import React, { useEffect } from 'react'

type Props = {
  listAllPokemon: IListAllPokemon
}

export const InitalPage: React.FC<Props> = ({ listAllPokemon }: Props) => {
  const [state, setState] = useRecoilState(listPokemonState)
  useEffect(() => {
    listAllPokemon
      .listAll()
      .then((pokemons) => setState((old) => ({ ...old, pokemons })))
  })
  return (
    <>
      <Header />
      <div className={Styles.initialPageBox}>
        {<PokemonsList pokemons={state.pokemons} />}
      </div>
    </>
  )
}
