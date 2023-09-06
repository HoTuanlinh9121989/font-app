import React, { useState, useEffect } from 'react'
import axios from 'axios'
import GoogleFontLoader from 'react-google-font-loader'

const Home: React.FC = () => {
  // Sample font data (you can replace this with actual data fetched from the Google Fonts API)
  const [fonts, setFonts] = useState<any[]>([])

  console.log('fonts', fonts)
  useEffect(() => {
    // Fetch fonts data from the Google Fonts API
    axios
      .get('https://www.googleapis.com/webfonts/v1/webfonts?key=YOUR_API_KEY')
      .then((response) => {
        setFonts(response.data.items)
      })
      .catch((error) => {
        console.error('Error fetching fonts:', error)
      })
  }, [])

  // Function to toggle font selection
  //   const toggleFontSelection = (font: any) => {
  //     // Implement logic to toggle font selection
  //     // You may want to add a 'selected' property to each font object in the 'fonts' state
  //   }

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Header */}
      <header className="bg-white py-4">
        <div className="container mx-auto flex items-center justify-between">
          <h1 className="text-2xl font-bold">Google Fonts</h1>
          {/* Search input and other header components */}
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto py-8">
        {/* Font Filters */}
        {/* Font List (grid layout) */}
        {/* Font Details Sidebar */}
        <>
          {/* Use it! */}
          <GoogleFontLoader
            fonts={[
              {
                font: 'Roboto',
                weights: [400, '400i'],
              },
              {
                font: 'Roboto Mono',
                weights: [400, 700],
              },
            ]}
            subsets={['cyrillic-ext', 'greek']}
          />

          <p style={{ fontFamily: 'Roboto Mono, monospaced' }}>This will be in Roboto Mono!</p>
          <p style={{ fontFamily: 'Roboto, sans-serif' }}>This will be in Roboto!</p>
        </>
      </main>

      {/* Footer */}
      <footer className="bg-white py-4 mt-8">
        <div className="container mx-auto text-center">
          <p className="text-gray-500">© 2023 Google Fonts</p>
        </div>
      </footer>
    </div>
  )
}

export default Home
