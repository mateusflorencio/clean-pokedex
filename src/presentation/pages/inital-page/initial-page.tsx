import Styles from './initial-page-styles.scss'
import { Header } from '@/presentation/components'
import { stateInitalPage, PokemonsList } from './components'

import { useRecoilState } from 'recoil'
import React, { useEffect, useRef } from 'react'
import { IListAllPokemon, ILoadPokemons } from '@/domain/usecases'

type Props = {
  load: ILoadPokemons
  listAll: IListAllPokemon
}

export const InitalPage: React.FC<Props> = ({ load,listAll }: Props) => {
  const [state, setState] = useRecoilState(stateInitalPage)
  const loaderRef = useRef(null)

  useEffect(() => {
    load.load(state.offset, state.limit).then((res) => setState((o) => ({ ...o, ...res })))
  }, [state.limit,state.offset])

  useEffect(() => {
    listAll.listAll(state.result).then(pokemons => setState(o => ({ ...o, pokemons: [...o.pokemons, ...pokemons] })))
  }, [state.result])

  useEffect(() => {
    const observer = new IntersectionObserver((entry) => {
      if (entry[0].isIntersecting) {
        setState((o) => ({ ...o, offset: o.offset + 20 }))
      }
    })

    if (loaderRef.current) {
      observer.observe(loaderRef.current)
    }
  }, [])

  return (
    <>
      <Header />
      <div className={Styles.initialPageBox}>
        <div>{<PokemonsList pokemons={state.pokemons} />}</div>
        <h2 ref={loaderRef}>Carregando mais pokémons...</h2>
      </div>
    </>
  )
}
