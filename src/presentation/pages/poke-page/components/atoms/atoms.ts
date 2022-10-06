import { Pokemon } from '@/domain/models'
import { atom } from 'recoil'

export const pagePokemonState = atom({
  key: 'pagePokemonState',
  default: {
    // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
    pokemon: {} as Pokemon,
    currentImage: ''
  }
})
