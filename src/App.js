import { useState } from "react";
import "./App.css";
import Channel from "./components/channel/Channel";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import Podcast from "./components/podcast/Podcast";
import Footer from "./components/footer/Footer";
const App = () => {
  const [darkmode, setDarkmode] = useState(false);
  return (
    <div>
      <Header darkmode={darkmode} setDarkmode={setDarkmode} />
      <Main darkmode={darkmode} />
      <Podcast darkmode={darkmode} />
      <Channel darkmode={darkmode} />
      <Footer darkmode={darkmode} />
    </div>
  );
};

export default App;
