import React, { useEffect } from 'react'
import { Header } from '@/presentation/components'
import Card from './components/image-card/img-card'
import Buttom from './components/buttom/buttom'
import Description from './components/description/description'
import Picture from './components/picture/picture'
import Styles from './poke-page.scss'
import { useParams } from 'react-router-dom'
import { useRecoilState } from 'recoil'
import { pagePokemonState } from '@/presentation/pages/poke-page/components'
import { ILoadPokemonByName } from '@/domain/usecases'
import { firstWordToUpperCase } from '../helpers'

type TProps = {
  load: ILoadPokemonByName
}

export const PokePage: React.FC<TProps> = ({ load }: TProps) => {
  const [{ pokemon,currentImage }, setPokemon] = useRecoilState(pagePokemonState)

  type TProps = {
    name: string
  }
  const { name } = useParams<TProps>()

  const handleCurrentImage = (currentImage: string): void => {
    setPokemon((o) => ({ ...o,currentImage }))
  }

  useEffect(() => {
    load.loadByName(name).then(pokemon => {
      setPokemon((o) => ({ ...o, currentImage: pokemon.images[0], pokemon }))
    }).catch((e) => console.log('error'))
  }, [name])

  return (
    <>
    <Header/>
    {pokemon.id && <div className={Styles.pokePageBox}>
      <div className={Styles.btnBox}>
        <Buttom bgColor='blue' text='back'/>
        <Buttom bgColor='green' text='next'/>
      </div>

      <div className={Styles.contentBox}>
        <span className={Styles.outYellow}></span>
        <Card
          img={currentImage}
          type={pokemon.types[0]}
        />

        <div className={Styles.descriptionBox}>
          <h1>{firstWordToUpperCase(pokemon.name)}</h1>
          <ul>
          <Description title='Height' text={[String(pokemon.height * 10) + ' cm']}/>
          <Description title={'Type'} text={pokemon.types.map(i => i)}/>
          <Description title='Forms' text={pokemon.forms.map(i => i)}/>
          <Description title='Moves' text={['+ ' + String(pokemon.moves.length)]}/>
          <Description title='Abilities' text={pokemon.abilities.map(i => i)}/>
          </ul>
        </div>

        <div className={Styles.pictureBox}>
          {pokemon?.images.map((v,i) =>
            (<li key={i.toString()}onClick={() => handleCurrentImage(v)}>
            <Picture img={pokemon.images[i]}/>
            </li>))}
        </div>
      </div>
    </div>}
    </>
  )
}
