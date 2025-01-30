import GameRoom from "./components/GameRoom";
import Lobby from "./components/Lobby";
import ServerSpace from "./components/ServerSpace";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';



const App = () => {
  return (
    <div className="min-h-screen bg-sky-300">
      <div></div>
    <Router>
      <Routes>
      <Route path="/" element={<ServerSpace />} />
        <Route path="/serverspace" element={<ServerSpace />} />
        <Route path="/lobby" element={<Lobby />} />
        <Route path="/gameroom" element={<GameRoom />} />
      </Routes>
    </Router>
    </div>
  );
};

export default App;




