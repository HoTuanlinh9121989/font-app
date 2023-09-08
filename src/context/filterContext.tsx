import { FilterInfo } from 'src/model/filter'
import React, { useState } from 'react'

interface InitValue {
  info: any | null
  setInfo?: (info: FilterInfo) => void
}

const initValue: InitValue = {
  info: { searchText: '', text: '', showVariableFonts: false },
}

export const FilterContext = React.createContext(initValue)

export const FilterContextProvider = ({ children }: { children: JSX.Element }) => {
  const setInfo = (info: any) => {
    setValue((prev) => ({ ...prev, info }))
  }

  const [value, setValue] = useState({
    ...initValue,
    setInfo,
  })

  return <FilterContext.Provider value={value}>{children}</FilterContext.Provider>
}
