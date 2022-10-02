import React from 'react'
import Styles from './header-styles.scss'

import { Logo, Lupa } from '@/presentation/components'
import { SearchModal } from './components/search-modal/search-modal'

import { stateModalSearchState } from './components/atoms/atoms'
import { useRecoilState } from 'recoil'

export const Header: React.FC = () => {
  const [stateModalSearch, setStateModalSearch] = useRecoilState(stateModalSearchState)

  return (
    <div className={Styles.headerContainer}>
      <header className={Styles.box}>
        <Logo />
        <div
          onClick={() => {
            setStateModalSearch(!stateModalSearch)
          }}
          className={Styles.lupa}
        >
          <Lupa />
        </div>
      </header>
      <SearchModal state={stateModalSearch} setState={setStateModalSearch}/>
    </div>
  )
}
