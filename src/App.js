import { useEffect, useState } from "react";
import Card from "./components/Card/Card";
import SearchBar from "./components/SearchBar/SearchBar";
import { dataAegis } from "./data";

function App() {
	const [keyword, setKeyword] = useState("");
	const [filteredData, setFilteredData] = useState([]);

	const getFilteredData = (e) => {
		e.preventDefault();
		setFilteredData(
			dataAegis.filter((data) =>
				data.nama_lengkap.toLowerCase().includes(keyword.toLowerCase())
			)
		);
	};

	useEffect(() => {
		alert("Selamat datang di database Aegis");
	}, []);

	return (
		<div>
			<SearchBar setKeyword={setKeyword} getFilteredData={getFilteredData} />
			<Card filteredData={filteredData} />
		</div>
	);
}

export default App;
