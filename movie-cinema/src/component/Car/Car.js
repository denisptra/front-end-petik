import "./Car.css"

const Car = (props) => {
    const { merk, harga, isNew, colors, beli } = props;
    return (
        <div className="card">
            <img className="img" src="https://imgcdn.oto.com/medium/gallery/exterior/10/2638/ferrari-f8-spider-94192.jpg" width={300} alt="" />
            <h3> {merk}</h3>
            <h4> Rp {harga}</h4>
            <h5>Kondisi : {isNew ? "Baru" : "Lawas"}</h5>
            <h5>Varian Warna : {colors.map((color) => color + ",")}</h5>
            <button className="button" onClick={beli}>Beli</button>
        </div>
        // <>
        //     {/* Ini untuk tipe data string */}
        //     <h3>Merk Mobil : {merk}</h3>
        //     {/* Ini untuk tipe data integer */}
        //     <h4>Harga Mobil : Rp {harga} Miliyar</h4>
        //     {/* Ini Untuk tipe data boolean */}
        //     <h5>Keadaan Mobil : {isNew ? "Baru" : "Bekas"}</h5>
        //     {/* Ini untuk tipe data array */}
        //     <h5>Varian Warna : {colors.map((color) => color + ",")}</h5>
        //     <button onClick={beli}>Beli</button>
        // </>
    )
}

export default Car;