import { RemoteLoadPokemonByName } from '@/data/usecases'
import { PokePage } from '@/presentation/pages'
import React from 'react'
import { makeHttpClient } from '../http'

export const makePokePage: React.FC = () => {
  const load = new RemoteLoadPokemonByName(makeHttpClient())
  return (<PokePage load={load} />)
}
