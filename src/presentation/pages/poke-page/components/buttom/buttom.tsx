import React from 'react'
import Styles from './buttom.scss'

type Props = {
  bgColor: string
  text: string
}

const ImageCard: React.FC<Props> = ({ bgColor, text }: Props) => (
      <button className={[Styles[`bg-${bgColor}`], Styles.btn].join(' ')} >{text}</button>

)

export default ImageCard
