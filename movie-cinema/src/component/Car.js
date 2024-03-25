
const Car = (props) => {
    const { merk, harga, isNew, colors, beli } = props;
    return (
        <>
            {/* Ini untuk tipe data string */}
            <h3>Merk Mobil : {merk}</h3>
            {/* Ini untuk tipe data integer */}
            <h4>Harga Mobil : Rp {harga} Miliyar</h4>
            {/* Ini Untuk tipe data boolean */}
            <h5>Keadaan Mobil : {isNew ? "Baru" : "Bekas"}</h5>
            {/* Ini untuk tipe data array */}
            <h5>Varian Warna : {colors.map((color) => color + ",")}</h5>
            <button onClick={beli}>Beli</button>
        </>
    )
}

export default Car;