import React, { useCallback, useContext } from 'react'
import SearchFonts from './SearchFonts'
import TypeText from './TypeText'
import Slider from './Slider'
import { FilterContext } from 'src/context/filterContext'
import _debounce from 'lodash/debounce'

const SearchBar: React.FC = () => {
  const { setInfo, info } = useContext(FilterContext)

  const handleSearchChange = (searchText: string) => {
    debounceSearchChange(searchText)
  }

  const debounceSearchChange = useCallback(
    _debounce((searchText) => {
      setInfo && setInfo({ ...info, searchText })
    }, 400),
    [info]
  )

  const handleTypeTextChange = (text: string) => {
    debounceTextChange(text)
  }

  const debounceTextChange = useCallback(
    _debounce((text) => {
      setInfo && setInfo({ ...info, text })
    }, 400),
    [info]
  )

  const handleChangeSlider = (value: number) => {
    debounceSlider(value)
  }

  const debounceSlider = useCallback(
    _debounce((value) => {
      setInfo && setInfo({ ...info, fontSize: value })
    }, 400),
    [info]
  )

  return (
    <div className="bg-gray-100  w-full flex">
      <SearchFonts placeholder="Search fonts" handleChange={handleSearchChange} defaultValue={info?.searchText} />
      <TypeText placeholder="Type something" handleChange={handleTypeTextChange} defaultValue={info?.text} />
      <Slider handleChange={handleChangeSlider} defaultValue={info?.fontSize} />
    </div>
  )
}

export default SearchBar
