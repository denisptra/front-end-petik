import Header from "./component/Header";
import Car from "./component/Car";
import User from "./component/User";
import Footer from "./component/Footer";
import imgProfile from "./component/download.jpeg";

function App() {
  return (
    <div className="App" >
      <Header />
      <h1>Hello World</h1>
      < Car
        merk="Ferrari"
        harga={5}
        isNew={true}
        colors={["Hitam", "Putih", "Abu-abu"]}
        beli={() => alert("Sudah di beli")}
      />
      < User
        nama="Deni Trio Saputra"
        alamat="Jakarta Selatan"
        angkatan={11}
        hobi={["Mendengarkan Music", "Olahraga"]}
        status={false}
        gambar="https://cdn.motor1.com/images/mgl/rPR91/s3/ferrari-sf90-stradale-la-prova.jpg"
        profil={() => alert("Profil" + + "telah dibuka")}
      />
      <Footer nama="Deni Trio Saputra" />
    </div>
  );
}

export default App;
