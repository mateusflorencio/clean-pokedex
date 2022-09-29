import React from 'react'
import Styles from './picture.scss'

type Props = {
  img: string
}

const Picture: React.FC<Props> = ({ img }: Props) => (
  <div className={Styles.pictureBoxContainer}>
      <img src={img} />
  </div>

)

export default Picture
