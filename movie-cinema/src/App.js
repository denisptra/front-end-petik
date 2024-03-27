import Navbar from "./component/Navbar/Navbar.js";
import Car from "./component/Car/Car";
import User from "./component/User/User";
import Footer from "./component/Footer/Footer.js";
import Main from "./component/Main/Main.js";
import Movie from "./component/Movie/Movie.js";
import Movies from "./component/Movies/Movies.js";

function App() {
  return (
    <div className="container" >
      <Navbar />
      {/* <h1>Hello World</h1>
      < Car
        merk="Ferrari 2024 Terbaru"
        harga={5000000000}
        isNew={true}
        colors={["Hitam", "Putih", "Abu-abu", "Kuning"]}
        beli={() => alert("Sudah di beli")}
      /> */}
      {/* < User
        nama="Deni Trio Saputra"
        alamat="Jakarta Selatan"
        angkatan={11}
        hobi={["Mendengarkan Music", "Olahraga"]}
        status={false}
        gambar="https://cdn.motor1.com/images/mgl/rPR91/s3/ferrari-sf90-stradale-la-prova.jpg"
        profil={() => alert("Profil" + + "telah dibuka")}
      /> */}
      <Main />
      <Footer nama="Deni Trio Saputra" />
    </div>
  );
}

export default App;

