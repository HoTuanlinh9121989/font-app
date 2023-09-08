import React, { useState } from 'react'

interface IShowVariableFontsProps {
  onClickShowVariableFonts: (value: any) => void
}

function ShowVariableFonts(props: IShowVariableFontsProps) {
  const { onClickShowVariableFonts } = props
  const [showVariableFonts, setShowVariableFonts] = useState(false)

  const handleVariableFontsOnlyChange = (e: any) => {
    const newValue = e.target.checked
    setShowVariableFonts(newValue)
    onClickShowVariableFonts(newValue)
  }

  return (
    <div className="flex items-center ml-5">
      <label>
        Show Variable Fonts Only
        <input className="mx-2" type="checkbox" checked={showVariableFonts} onChange={handleVariableFontsOnlyChange} />
      </label>
    </div>
  )
}

export default ShowVariableFonts
