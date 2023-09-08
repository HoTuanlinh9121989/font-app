import React, { useEffect, useState } from 'react'
import Select from 'react-select'
import { API_KEY } from 'src/utils'

function MultiSelectDropdown({ selectedOptions, onSelectCategory }: any) {
  const [selectedCategory, setSelectedCategory] = useState(selectedOptions)

  const handleCategoryChange = (value: any) => {
    setSelectedCategory(value)
    onSelectCategory(value)
  }

  const converToValue = (categories: any) => {
    const options = categories?.map((item: any) => ({
      value: item,
      label: item,
    }))
    return options
  }

  const options = [
    { value: 'sans-serif', label: 'sans-serif' },
    { value: 'display', label: 'display' },
    { value: 'serif', label: 'serif' },
    { value: 'handwriting', label: 'handwriting' },
    { value: 'monospace', label: 'monospace' },
  ]

  return (
    <div>
      <Select
        isMulti
        options={options}
        value={converToValue(selectedOptions) || selectedCategory}
        onChange={handleCategoryChange}
        placeholder="Category"
        className="basic-multi-select"
        classNamePrefix="select"
      />
    </div>
  )
}

export default MultiSelectDropdown
