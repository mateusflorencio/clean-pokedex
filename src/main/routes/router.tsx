import { InitalPage, PokePage } from '@/presentation/pages'
import React from 'react'

import { RecoilRoot } from 'recoil'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

export const Router: React.FC = () => {
  return (
   <RecoilRoot>
     <BrowserRouter>
    <Routes>
      <Route path="/" element={<InitalPage />} />
      <Route path="/pokemon" element={<PokePage />} />
    </Routes>
  </BrowserRouter>
   </RecoilRoot>
  )
}
