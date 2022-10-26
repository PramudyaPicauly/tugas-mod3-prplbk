import "./SearchBar.css";

const SearchBar = ({ setKeyword, getFilteredData }) => {
	return (
		<form className="search-bar" onSubmit={getFilteredData}>
			<input
				type="text"
				placeholder="Cari personil Aegis..."
				onChange={(e) => {
					e.preventDefault();
					setKeyword(e.target.value);
				}}
			/>
			<button type="button">X</button>
			<button type="submit">Cari</button>
		</form>
	);
};

export default SearchBar;
