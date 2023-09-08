import React, { useState, useEffect, useContext } from 'react'
import SearchBar from 'src/core-components/SearchBar'
import Filter from 'src/core-components/Filter'
import { FilterContext } from 'src/context/filterContext'
import { getFonts } from 'src/api/index'
import { API_KEY } from 'src/utils'
import InfiniteScrollList from 'src/core-components/InfiniteScrollList'
import queryString from 'query-string'
import { useLocation } from 'react-router-dom'

const Home: React.FC = () => {
  const [fonts, setFonts] = useState<any[]>([])
  const [filteredResults, setFilteredResults] = useState<any[]>([])

  const { info, setInfo } = useContext(FilterContext)
  useEffect(() => {
    callGetFonts()
  }, [info?.showVariableFonts])

  useEffect(() => {
    if (info?.searchText?.length > 0 || info?.category?.length > 0) {
      const results = fonts?.filter((item) => item?.family?.toLowerCase().includes(info?.searchText?.toLowerCase()))
      if (info?.category) {
        setFilteredResults(results.filter((item) => item?.category?.includes(info?.category)))
      } else {
        setFilteredResults(results)
      }
    } else {
      setFilteredResults(fonts)
    }
  }, [info?.searchText, info?.category])

  useEffect(() => {
    const stringified = queryString.stringify(info, {
      skipEmptyString: true,
      skipNull: true,
    })
    window.history.replaceState(null, '', '?' + stringified)
  }, [info])

  const location = useLocation()

  useEffect(() => {
    const parsed = queryString.parse(location.search)
    setInfo && setInfo({ ...info, ...parsed })
  }, [])

  // Function to toggle font selection
  //   const toggleFontSelection = (font: any) => {
  //     // Implement logic to toggle font selection
  //     // You may want to add a 'selected' property to each font object in the 'fonts' state
  //   }

  const callGetFonts = async () => {
    const data: any = await getFonts({
      key: API_KEY,
      capability: info?.showVariableFonts ? 'VF' : 'WOFF2',
    })
    setFonts(data.items)
  }

  return (
    <div className=" min-h-screen ">
      <main className="container mx-auto py-8">
        <div className="container mx-auto flex items-center ">
          <SearchBar />
        </div>
        <div className="container flex items-center justify-between">
          <Filter />
        </div>

        <InfiniteScrollList items={info?.searchText?.length > 0 ? filteredResults : fonts} itemsPerPage={10} />
      </main>
    </div>
  )
}

export default Home
