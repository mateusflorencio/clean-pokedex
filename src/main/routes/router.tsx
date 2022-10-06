import { PokePage } from '@/presentation/pages'
import React from 'react'

import { RecoilRoot } from 'recoil'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { makeInitialPage } from '../factories/page/initial-page'

export const Router: React.FC = () => {
  return (
    <RecoilRoot>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={makeInitialPage({})} />
          <Route path="/pokemon" element={<PokePage />} />
        </Routes>
      </BrowserRouter>
    </RecoilRoot>
  )
}
