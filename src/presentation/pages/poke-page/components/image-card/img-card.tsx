import React from 'react'
import Styles from './img-card.scss'

type Props = {
  type: string
  img: string
}

const ImageCard: React.FC<Props> = ({ type, img }: Props) => (
  <div className={Styles.imageCardBoxComponent}>
    <div className={[Styles[`bg-${type}-gradient-to-left`], Styles.bgImgBox].join(' ')}>
        <div className={Styles.outWhite}></div>
        <img src={ img } alt="card" />
    </div>
  </div>
)

export default ImageCard
