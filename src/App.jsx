import GameRoom from "./components/GameRoom";
import Lobby from "./components/Lobby";
import ServerSpace from "./components/ServerSpace";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { WebSocketProvider } from './hooks/webSocketContext';

const App = () => {
  return (
    <div className="min-h-screen bg-sky-300">
      <div></div>
      <WebSocketProvider>
        <Router>
          <Routes>
            <Route path="/" element={<ServerSpace />} />
            <Route path="/serverspace" element={<ServerSpace />} />
            <Route path="/lobby" element={<Lobby />} />
            <Route path="/gameroom" element={<GameRoom />} />
          </Routes>
        </Router>
      </WebSocketProvider>
    </div>
  );
};

export default App;




