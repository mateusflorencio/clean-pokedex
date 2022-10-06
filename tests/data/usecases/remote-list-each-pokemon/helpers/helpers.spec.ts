import { map } from '@/data/usecases/remote-list-each-pokemon/helpers'

const fakeResponsePokemon = {
  abilities: [{
    ability: {
      name: 'any_ability1',
      url: 'any_url'
    },
    is_hidden: true ,
    slot: 2
  },{
    ability: {
      name: 'any_ability2',
      url: 'any_url'
    },
    is_hidden: true ,
    slot: 2
  }],
  forms: [{
    name: 'any_form1',
    url: 'any_url'
  },{
    name: 'any_form2',
    url: 'any_url'
  }],
  height: 2,
  id: 'any_id',
  name: 'any_name',
  moves: [{
    move: {
      name: 'any_move1',
      url: 'any_url'
    }
  },{
    move: {
      name: 'any_move2',
      url: 'any_url'
    }
  }],
  types: [{
    type: {
      name: 'any_type1',
      url: 'any_url'
    }
  },{
    type: {
      name: 'any_type2',
      url: 'any_url'
    }
  }],
  sprites: {
    other: {
      dream_world: {
        front_default: 'front_default',
        front_female: 'front_female'
      },
      'official-artwork': {
        front_default: 'front_default'
      },
      home: {
        front_default: 'front_default',
        front_female: 'front_female',
        front_shiny: 'front_shiny',
        front_shiny_female: 'front_shiny_female'
      }
    }
  }
}

describe('Map RemoteListEachPokemon', () => {
  it.only('should return correct values', () => {
    expect(map(fakeResponsePokemon)).toEqual({
      abilities: ['any_ability1', 'any_ability2'],
      forms: ['any_form1', 'any_form2'],
      height: 2,
      id: 'any_id',
      name: 'any_name',
      moves: ['any_move1','any_move2'],
      types: ['any_type1','any_type2'],
      images: ['front_default','front_default','front_default','front_shiny']
    })
  })
})
