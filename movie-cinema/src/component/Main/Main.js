import Movies from "../Movies/Movies.js";
import Hero from "../Hero/Hero.js";
import User from "../User/User.js";
import Counter from "../Counter/Counter.js";
import "./Main.css";

const Main = () => {
    const datas = [
        {
            nama: "Deni Trio Saputra",
            member: "Platinum",
            message: "Hello World"
        },
        {
            nama: "Asam Sulfat",
            member: "Platinum",
            message: "Saya adalah Asam Sulfat, dan saya menyukai film yang berkomedi."
        },
        {
            nama: "Samsul",
            member: "Gold",
            message: "Saya adalah Samsul, iau samsek."
        },
        {
            nama: "Udin",
            member: "Platinum",
            message: "Saya Udin, seorang penggemar film horror."
        },
        {
            nama: "Janggar",
            member: "Gold",
            message: "Hai nama Saya janggar"
        },
        {
            nama: "Wowo",
            member: "Platinum",
            message: "Ngawr ngawr wow"
        },
        {
            nama: "Anis",
            member: "Non Member",
            message: "Saya anis"
        },
        {
            nama: "Jokowi",
            member: "Non Member",
            message: "Saya Presiden"
        },
        {
            nama: "Mentri",
            member: "Diamond",
            message: "Siap Komandan"
        },
        {
            nama: "Surya",
            member: "Silver",
            message: "Siap Danton"
        }
    ];
    return (
        <div class="content">
            <Hero />
            <Movies />
            {
                datas.map((data) => (
                    <User nama={data.nama} member={data.member} message={() => alert(data.message)} />
                ))
            }
            {/* <Counter /> */}
        </div>
    )
}

export default Main;