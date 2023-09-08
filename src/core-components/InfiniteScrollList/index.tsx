// InfiniteScrollList.js
import React, { useState, useEffect } from 'react'
import Items from 'src/core-components/ItemComponent'

function InfiniteScrollList({ items, itemsPerPage }: any) {
  const [visibleItems, setVisibleItems] = useState<any>([])
  const [currentPage, setCurrentPage] = useState(1)

  useEffect(() => {
    setVisibleItems(items.slice(0, itemsPerPage))
    setCurrentPage(1)
  }, [items])

  const loadMoreItems = () => {
    const startIndex = (currentPage - 1) * itemsPerPage
    const endIndex = startIndex + itemsPerPage
    const newVisibleItems = [...visibleItems, ...items.slice(startIndex, endIndex)]

    setVisibleItems(newVisibleItems)
    setCurrentPage(currentPage + 1)
  }

  const handleScroll = (e: any) => {
    const { scrollTop, clientHeight, scrollHeight } = e.target
    if (scrollTop + clientHeight >= scrollHeight - 20) {
      loadMoreItems()
    }
  }

  return (
    <div className="grid grid-cols-3 gap-4 mt-5 overflow-y-scroll  h-[68vh]" onScroll={handleScroll}>
      {visibleItems.map((item: any, index: number) => (
        <div key={index}>
          <Items font={item}></Items>
        </div>
      ))}
    </div>
  )
}

export default React.memo(InfiniteScrollList)
