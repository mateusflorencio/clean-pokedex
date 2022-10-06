import { atom } from 'recoil'

export const stateModalSearchState = atom({
  key: 'stateModalSearchState',
  default: {
    hidden: false,
    input: ''
  }
})
