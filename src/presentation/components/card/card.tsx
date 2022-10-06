import React from 'react'
import Styles from './card.scss'

type Props = {
  img: string
  name: string
  height: number
  description?: string
  type: string[]
}

export const CardPokemon: React.FC<Props> = ({ img,name,type,height }: Props) => {
  return (
    <div className={Styles.cardBox} title={name}>
      <div

        className={[Styles.imgBox, Styles[`bg-${type[0]}-gradient-to-bottom`]].join(' ')}
      >
        <img src={img} alt={name} />
      </div>
      <div className={Styles.descriptionBox}>
        <h2>{name[0].toUpperCase() + name.slice(1)}</h2>
        <h3>
          <strong>Type :</strong> {(type[0])[0].toUpperCase() + (type[0]).slice(1)}
        </h3>
        <p>
          <strong>height :</strong> {height * 100}cm
        </p>
      </div>
    </div>
  )
}
