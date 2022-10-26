import { useEffect, useState } from "react";
import { dataAegis } from "../../data";
import CardDetail from "../CardDetail/CardDetail";

import "./Card.css";

const Card = ({ filteredData }) => {
	const [detailedData, setDetailedData] = useState(null);

	useEffect(() => {
		detailedData &&
			alert(`Data milik ${detailedData.nama_panggilan} akan ditampilkan.`);
	}, [detailedData]);

	return (
		<>
			{detailedData && (
				<CardDetail data={detailedData} setDetailedData={setDetailedData} />
			)}
			<div className="card-container">
				{filteredData.length > 0
					? filteredData.map((value, key) => {
							return (
								<div className="card-item" key={key}>
									<p className="info" onClick={() => setDetailedData(value)}>
										<i className="fa-solid fa-ellipsis"></i>
									</p>
									<p className="nama-panggilan">{value.nama_panggilan}</p>
									<p className="nim">{value.nim}</p>
									<p className="email">{value.email}</p>
								</div>
							);
					  })
					: dataAegis.map((value, key) => {
							return (
								<div className="card-item" key={key}>
									<p className="info" onClick={() => setDetailedData(value)}>
										<i className="fa-solid fa-ellipsis"></i>
									</p>
									<p className="nama-panggilan">{value.nama_panggilan}</p>
									<p className="nim">{value.nim}</p>
									<p className="email">{value.email}</p>
								</div>
							);
					  })}
			</div>
		</>
	);
};

export default Card;
