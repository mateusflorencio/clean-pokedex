import { Pokemon } from '@/data/models'
import { TAbility, TForms, TImgs, TMoves, TNameUrl, TTypes } from '@/domain/models/sub-models'

export const map = (result: any): Pokemon => ({
  abilities: mapAbilities(result.abilities),
  forms: mapTForms(result.forms),
  height: result.height,
  id: result.id,
  name: result.name,
  moves: mapTMoves(result.moves),
  types: mapTTypes(result.types),
  img: mapTImgs(result.sprites.other)
})

const mapAbilities = (obj: any[]): TAbility[] => {
  return obj.map(i => ({
    ability: i.ability,
    is_hidden: i.is_hidden,
    slot: i.slot
  }))
}

const mapTForms = (obj: any[]): TForms[] => {
  return obj.map(i => ({
    forms: { name: i.name, url: i.url }
  }))
}

const mapTMoves = (obj: any[]): TMoves[] => {
  return obj.map(i => ({
    move: mapNameAndUrl(i.move)
  }))
}

const mapTTypes = (obj: any[]): TTypes[] => {
  return obj.map(i => ({
    type: mapNameAndUrl(i.type)
  }))
}

const mapTImgs = (obj: any): TImgs => ({
  dreamWorld: { frontDefault: obj.dream_world.front_default , frontFemale: obj.dream_world.front_female },
  home: {
    frontDefault: obj.home.front_default,
    frontFemale: obj.home.front_female,
    frontShiny: obj.home.front_shiny,
    frontShiny_female: obj.home.front_shiny_semale
  } ,
  officialArtwork: { frontDefault: obj['official-artwork'].front_default }
})

const mapNameAndUrl = (obj: any): TNameUrl => {
  return ({
    name: obj.name,
    url: obj.url
  })
}
