import { TAbility } from './sub-models/abilities'
import { TForms } from './sub-models/forms'
import { TMoves } from './sub-models/moves'
import { TImgs } from './sub-models/img'
import { TTypes } from './sub-models/type'

export type Pokemon = {
  abilities: TAbility[]
  forms: TForms[]
  height: string
  id: number
  name: string
  moves: TMoves[]
  types: TTypes[]
  img: TImgs
}
