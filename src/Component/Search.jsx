function Search({ query, setQuery }) {
  return (
    <div>
      <input
        type="text"
        name="Search"
        value={query}
        placeholder="Enter Search..."
        onChange={(e) => {
          setQuery(e.target.value)
        }}
      />
    </div>
  )
}

export default Search
