import "./App.css";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import Title from "./components/Title";
import Body from "./components/Body"


function App() {
  return (
    
    <div className="flex flex-col h-screen">
      <Nav />
      <Body />
      <Footer />
      </div>
    
  );
}

export default App;
