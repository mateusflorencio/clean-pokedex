import React from 'react'
import Styles from './card.scss'

type Props = {
  img: string
  name: string
  title: string
  description: string
  type: string
}

export const CardPokemon: React.FC<Props> = ({ img, description, name, title, type }: Props) => (
  <div className={Styles.cardBox} title={name}>
  <div className={[Styles.imgBox, Styles[`bg-${type}-gradient-to-bottom`]].join(' ')}>
    <img src={img } alt="" /></div>
  <div className={Styles.descriptionBox}>
    <h2>{ name }</h2>
    <h3>{ title }</h3>
    <p>{ description }</p>
  </div>
</div>
)
