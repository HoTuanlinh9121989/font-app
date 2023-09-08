interface ISearchFontsProps {
  placeholder?: string
  handleChange: (text: string) => void
  defaultValue?: string
}

function SearchFonts(props: ISearchFontsProps) {
  const { placeholder, handleChange, defaultValue } = props
  return (
    <div className="flex items-center justify-center w-search-bar flex-[0.3] ">
      <input
        type="text"
        className="px-4 py-2 border rounded-md w-full focus:outline-none focus:ring focus:border-blue-300"
        placeholder={placeholder}
        onChange={(e) => handleChange(e.target.value)}
        defaultValue={defaultValue}
      />
    </div>
  )
}

export default SearchFonts
