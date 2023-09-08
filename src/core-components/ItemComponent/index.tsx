import React, { useContext, useEffect, useState } from 'react'
import GoogleFontLoader from 'react-google-font-loader'
import { FilterContext } from 'src/context/filterContext'

interface IItemsProps {
  font: any
}

function ItemComponent(props: IItemsProps) {
  const { font } = props
  const { info } = useContext(FilterContext)

  return (
    <div
      className="bg-gray-100  w-full flex h-[400px] rounded overflow-hidden "
      style={{ fontSize: Number(info?.fontSize) || 40 }}
    >
      <GoogleFontLoader
        fonts={[
          {
            font: font.family,
            weights: [400, '400i'],
          },
        ]}
      />
      <div className="flex flex-col border-2 border-red-300 rounded mb-4 px-2 overflow-auto text-center">
        <div style={{ fontFamily: `${font.family}, variant0` }} className="font-bold pt-4">
          Font name: {font.family}
        </div>
        <div style={{ fontFamily: `${font.family}, variant0` }}>{info?.text || 'Some text for typing'}</div>
      </div>
    </div>
  )
}

export default ItemComponent
