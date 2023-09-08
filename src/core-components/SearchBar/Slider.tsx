import React, { useEffect, useState } from 'react'

interface ISliderProps {
  handleChange: (value: number) => void
  defaultValue: any
}

function Slider(props: ISliderProps) {
  const { handleChange, defaultValue } = props

  const [sliderValue, setSliderValue] = useState(defaultValue)

  useEffect(() => {
    setSliderValue(defaultValue)
  }, [])

  const handleSliderChange = (e: any) => {
    const newValue = parseInt(e.target.value)
    setSliderValue(newValue)
    handleChange(newValue)
  }

  return (
    <div className="flex flex-[0.4]">
      <p className="pl-2 w-10"> {sliderValue || defaultValue || 40}px</p>
      <input
        className="w-full mx-3"
        type="range"
        min={40}
        max={300}
        value={sliderValue || defaultValue || 40}
        onChange={handleSliderChange}
      />
    </div>
  )
}

export default Slider
