import { Component } from "react";

function App() {
  return (
    <div className="App">
      <Header/>
      <h1>Welcome to our website!</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias error itaque qui ex impedit repudiandae corporis veniam, officia corrupti maxime totam sapiente ducimus voluptatum, voluptate, ut aliquid ipsam. Aspernatur, commodi?</p>
      <Footer/>
    </div>
  );
} 

const Header = () => {
  return (
    <nav>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Login</li>
      </ul>
    </nav>
  );
};

class Footer extends Component {
  render() {
    return (
      <footer>
        <h3>Copyrigth &copy;2024 Develope by Deni Trio Saputra</h3>
        <span>Make with &#10084</span>
      </footer>
    );
  }
}


export default App;
