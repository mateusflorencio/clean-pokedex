import { TAbility } from '../../data/models/sub-models/abilities'
import { TForms } from '../../data/models/sub-models/forms'
import { TMoves } from '../../data/models/sub-models/moves'
import { TImgs } from '../../data/models/sub-models/img'
import { TTypes } from '../../data/models/sub-models/type'

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
