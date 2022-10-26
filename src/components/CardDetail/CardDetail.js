import React from "react";
import "./CardDetail.css";

const CardDetail = ({ data, setDetailedData }) => {
	return (
		<>
			<div className="card-detail-background">
				<div className="card-detail-container">
					<div className="card-detail-item">
						<p className="info" onClick={() => setDetailedData(null)}>
							<i className="fa-sharp fa-solid fa-circle-xmark"></i>
						</p>
						<p className="nama-panggilan">
							{data.nama_panggilan ? data.nama_panggilan : "-"}
						</p>
						<p className="nama-lengkap">
							Nama Lengkap : {data.nama_lengkap ? data.nama_lengkap : "-"}
						</p>
						<p className="nim">NIM: {data.nim ? data.nim : "-"}</p>
						<p className="nomor-telepon">
							Nomor Telepon : {data.nomor_telepon ? data.nomor_telepon : "-"}
						</p>
						<p className="id-line">
							ID Line : {data.id_line ? data.id_line : "-"}
						</p>
						<p className="email">Email : {data.email ? data.email : "-"}</p>
					</div>
				</div>
			</div>
		</>
	);
};

export default CardDetail;
