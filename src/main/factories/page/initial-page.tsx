import { RemoteListAllPokemon, RemoteListEachPokemon, RemoteLoadPokemons } from '@/data/usecases'
import { InitalPage } from '@/presentation/pages'
import React from 'react'
import { makeHttpClient } from '../http'

export const makeInitialPage: React.FC = () => {
  const load = new RemoteLoadPokemons(makeHttpClient())
  const loadEach = new RemoteListEachPokemon(makeHttpClient())
  const listAll = new RemoteListAllPokemon(loadEach)
  return (<InitalPage load={load} listAll={listAll} />)
}
