const User = (props) => {
    const { nama, alamat, angkatan, hobi, status, gambar, profil } = props;
    return (
        <div>
            <ul>
                <img src={gambar} alt=""/>
                <li>Nama : {nama}</li>
                <li>Alamat : {alamat}</li>
                <li>Angkatan : Angkatan {angkatan}</li>
                <li>Hobi : {hobi.map((hobi) => hobi + ", ")}</li>
                <li>Status : {status ? "Lulus" : "Sedang Belajar"}</li>
                <button onClick={profil}>Pesan</button>
            </ul>
        </div>
    )
}

export default User;