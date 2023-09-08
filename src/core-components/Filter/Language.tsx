import React, { useState, useEffect } from 'react'
import { API_KEY } from 'src/utils'

interface IFontLanguageDropdownsProps {
  onSelectLanguage: (Language: any) => void
}

function FontLanguageDropdown(props: IFontLanguageDropdownsProps) {
  const { onSelectLanguage } = props
  const [languages, setLanguages] = useState<any>([])
  const [selectedLanguage, setSelectedLanguage] = useState('')

  useEffect(() => {
    // Fetch the font categories from the Google Fonts API
    fetch(`https://translation.googleapis.com/language/translate/v2/languages?key=${API_KEY}`)
      .then((response) => response.json())
      .then((data) => {
        // Extract unique font categories
        const languages = data.data.languages
        console.log('data', data)
        setLanguages(languages)
      })
      .catch((error) => console.error('Error fetching font categories:', error))
  }, [])

  const handleLanguageChange = (e: any) => {
    const newLanguage = e.target.value
    setSelectedLanguage(newLanguage)
    onSelectLanguage(newLanguage)
  }

  return (
    <div className="flex items-center mx-2">
      <label htmlFor="languageDropdown" className="px-2">
        Language:
      </label>
      <select className="p-2 rounded" id="languageDropdown" value={selectedLanguage} onChange={handleLanguageChange}>
        <option value="">All Languages</option>
        {languages.map((language: any) => (
          <option key={language} value={language}>
            {language}
          </option>
        ))}
      </select>
    </div>
  )
}

export default FontLanguageDropdown
