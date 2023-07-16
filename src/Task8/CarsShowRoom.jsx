import React, { useState } from "react";
import styles from "./index.module.css";
import mobil from "./car.js";

const CarsShowRoom = () => {
  const [data, setData] = useState(mobil);

  const handleChange = (e) => {
    const cari = e.target.value;

    let dataFilter = [...mobil];
    dataFilter = dataFilter.filter(
      (fill) => fill.nama.toLowerCase().indexOf(cari.toLowerCase()) !== -1
    );
    setData(dataFilter);
  };
  return (
    <div className={styles.mainCont}>
      <div className={styles.header}>
        <div className={styles.searchCont}>
          <h2>Cari Mobil Impian Anda</h2>
          <input placeholder="Search" onChange={handleChange} />
        </div>
      </div>
      <div className={styles.cont}>
        {data.length < 1 ? (
          <div className={styles.alert}>
            <p>Data tidak ditemukan</p>
          </div>
        ) : (
          data.map((d) => (
            <div className={styles.card}>
              <img src={`./images/${d.path}`} alt="images" />
              <h3>{d.nama}</h3>
              <hr />
              <p>
                <b>Merek : </b>
                {d.merek}
              </p>
              <p>
                <b>Warna : </b> {d.warna}
              </p>
              <p>
                <b>Type : </b>
                {d.tipe}
              </p>
              <button onClick={() => alert(`Anda mengklik mobil ${d.nama}`)}>
                LIHAT DETAIL
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default CarsShowRoom;
