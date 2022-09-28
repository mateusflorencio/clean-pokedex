import React from 'react'
import Styles from './card.scss'

type Props = {
  img: string
  name: string
  title: string
  description: string
}

export const Card: React.FC<Props> = ({ img, description, name, title }: Props) => (
  <div className={Styles.cardBox}>
  <div className={Styles.imgBox}><img src={img } alt="" /></div>
  <div className={Styles.descriptionBox}>
    <h2>{ name }</h2>
    <h3>{ title }</h3>
    <p>{ description }</p>
  </div>
</div>
)
