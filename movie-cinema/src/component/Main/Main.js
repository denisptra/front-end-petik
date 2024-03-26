import User from "../User/User.js";
import "./Main.css";

const Main = () => {
    return (
        <div class="content">
            <User
                nama="Deni Trio Saputra"
                member="Platinum"
            />
            <User
                nama="Asam Sulfat"
                member="Platinum"
            />
            <User
                nama="Samsul"
                member="Gold"
            />
            <User
                nama="Udin"
                member="Platinum"
            />
            <User
                nama="Janggar"
                member="Gold"
            />
            <User
                nama="Wowo"
                member="Platinum"
            />
            <User
                nama="Anis"
                member="Non Member"
            />
            <User
                nama="Jokowi"
                member="Non Member"
            />
            <User
                nama="Mentri"
                member="Diamond"
            />
            <User
                nama="Surya"
                member="Silver"
            />
        </div>
    )
}

export default Main;