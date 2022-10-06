import React from 'react'

import { RecoilRoot } from 'recoil'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { makeInitialPage } from '../factories/page/initial-page'
import { makePokePage } from '../factories/page/poke-page'

export const Router: React.FC = () => {
  return (
    <RecoilRoot>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={makeInitialPage({})} />
          <Route path="/pokemon/:name" element={makePokePage({})} />
        </Routes>
      </BrowserRouter>
    </RecoilRoot>
  )
}
