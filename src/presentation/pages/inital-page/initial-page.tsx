import Styles from './initial-page-styles.scss'
import { Header } from '@/presentation/components'
import { stateInitalPage, PokemonsList } from './components'

import { useRecoilState } from 'recoil'
import React, { useEffect } from 'react'
import { IListAllPokemon, ILoadPokemons } from '@/domain/usecases'

type Props = {
  load: ILoadPokemons
  listAll: IListAllPokemon
}

export const InitalPage: React.FC<Props> = ({ load,listAll }: Props) => {
  const [state, setState] = useRecoilState(stateInitalPage)

  useEffect(() => {
    load.load(state.offset, state.limit).then((res) => {
      setState((o) => ({ ...o, ...res }))
    })
  }, [state.limit,state.offset])

  useEffect(() => {
    listAll.listAll(state.result).then(pokemons => setState(o => ({ ...o, pokemons })))
  }, [state.result])

  setTimeout(() => {
    console.log(state.pokemons)
  }, 2)
  return (
    <>
      <Header />
      <div className={Styles.initialPageBox}>
        {<PokemonsList pokemons={state.pokemons} />}
      </div>
    </>
  )
}
