import Navbar from "./component/Navbar/Navbar.js";
// import Car from "./component/Car/Car";
// import User from "./component/User/User";
import Footer from "./component/Footer/Footer.js";  
// import Main from "./component/Main/Main.js";
// import Movie from "./component/Movie/Movie.js";
// // import Movies from "./component/Movies/Movies.js";
// import AddMovieForm from "./component/AddMovieForm/AddMovieForm.js";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home.js";
import Popular from "./pages/movie/Popular.js";
import TopRated from "./pages/movie/TopRated.js";
import Detail from "./pages/movie/Detail.js";

function App() {
  return (
    <div className="container" >
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/popular" element={<Popular />}></Route>
          <Route path="/top" element={<TopRated />}></Route>
          <Route path="/detail/:id" element={<Detail />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
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
      {/* <Main />
      <Footer nama="Deni Trio Saputra" /> */}
    </div>
  );
}

export default App;

