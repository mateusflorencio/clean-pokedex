import { TTypes } from '@/domain/models/sub-models'
import React from 'react'
import Styles from './card.scss'

type Props = {
  img: string
  name: string
  height: string
  description?: string
  type: TTypes[]
}

export const CardPokemon: React.FC<Props> = ({
  img,
  name,
  type,
  height
}: Props) => (
  <div className={Styles.cardBox} title={name}>
    <div

      className={[Styles.imgBox, Styles[`bg-${type[0].type.name}-gradient-to-bottom`]].join(' ')}
    >
      <img src={img} alt="" />
    </div>
    <div className={Styles.descriptionBox}>
      <h2>{name[0].toUpperCase() + name.slice(1)}</h2>
      <h3>
        <strong>Type :</strong> {(type[0].type.name)[0].toUpperCase() + (type[0].type.name).slice(1)}
      </h3>
      <p>
        <strong>height :</strong> {Number(height) * 2.54}cm
      </p>
    </div>
  </div>
)
