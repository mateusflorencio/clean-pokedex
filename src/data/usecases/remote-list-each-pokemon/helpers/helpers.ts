import { Pokemon } from '@/data/models'

export const map = (obj: any): Pokemon => ({
  abilities: obj.abilities.map(a => a.ability.name),
  forms: obj.forms.map(f => f.name),
  height: obj.height,
  id: obj.id,
  name: obj.name,
  moves: obj.moves.map(m => m.move.name),
  types: obj.types.map(f => f.type.name),
  images: mapSprites(obj.sprites.other)
})

const mapSprites = (obj: any): string[] => ([
  obj['official-artwork'].front_default,
  obj.dream_world.front_default,
  obj.home.front_default,
  obj.home.front_shiny
])
