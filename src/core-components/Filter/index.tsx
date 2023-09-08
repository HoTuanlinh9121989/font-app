import React, { useContext } from 'react'
import ShowVariableFonts from './ShowVariableFonts'
// import FontLanguageDropdown from './Language'
import { FilterContext } from 'src/context/filterContext'
import MultiSelectDropdown from 'src/core-components/MultiSelectDropdown'

const Filter: React.FC = () => {
  const { setInfo, info } = useContext(FilterContext)

  const onSelectCategory = (categories: any) => {
    const category = categories?.map((option: any) => option.value)

    console.log('category', category)
    setInfo && setInfo({ ...info, category })
  }

  const onClickShowVariableFonts = (showVariableFonts: any) => {
    setInfo && setInfo({ ...info, showVariableFonts })
  }

  // const onSelectLanguage = (language: any) => {
  //   console.log('language', language)
  // }

  console.log('info?.category', info)
  return (
    <div className="bg-gray-100  w-full flex">
      <MultiSelectDropdown selectedOptions={info?.category} onSelectCategory={onSelectCategory} />
      {/* <FontLanguageDropdown onSelectLanguage={onSelectLanguage} /> */}
      <ShowVariableFonts onClickShowVariableFonts={onClickShowVariableFonts} />
    </div>
  )
}

export default Filter
