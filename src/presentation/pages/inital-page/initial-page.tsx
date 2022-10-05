import Styles from './initial-page-styles.scss'
import { Header } from '@/presentation/components'
import { listPokemonState, PokemonsList } from './components'

import { useRecoilState } from 'recoil'
import React, { useEffect } from 'react'
import { ILoadPokemons } from '@/domain/usecases/load-pokemons'

type Props = {
  load: ILoadPokemons
}

export const InitalPage: React.FC<Props> = ({ load }: Props) => {
  const [{ limit, offset, pokemons }, setState] =
    useRecoilState(listPokemonState)

  useEffect(() => {
    load.load(offset, limit).then((res) => setState((old) => ({ ...old, res })))
  }, [pokemons])
  return (
    <>
      <Header />
      <div className={Styles.initialPageBox}>
        {<PokemonsList pokemons={pokemons} />}
      </div>
    </>
  )
}
