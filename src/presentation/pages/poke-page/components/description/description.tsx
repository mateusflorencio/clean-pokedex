import React from 'react'
import Styles from './description.scss'

type Props = {
  title: string
  text: string[]
}

const Description: React.FC<Props> = ({ title, text }: Props) => (
  <div className={Styles.descriptionBoxComponent}>
    <h2>{title}</h2>
    { text.length ? text.map((i) => <li key={i}>{i}</li>) : ''}
  </div>
)

export default Description
