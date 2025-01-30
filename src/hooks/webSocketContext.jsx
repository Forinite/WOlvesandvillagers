import { createContext, useContext, useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';

const WebSocketContext = createContext();

export const WebSocketProvider = ({ children }) => {
    // const [messages, setMessages] = useState([]);
    const [clientId, setClientId] = useState(null);
    const [gameId, setGameId] = useState('');
    const ws = useRef(null);

    useEffect(() => {
        const url = "ws://localhost:9090"; // Replace with your WebSocket server URL
        ws.current = new WebSocket(url);

        ws.current.onopen = () => {
            console.log("Connected to server");
            const payLoad = {
                method: "connect",
            };
            ws.current.send(JSON.stringify(payLoad));
        };

        ws.current.onmessage = (message) => {
            const response = JSON.parse(message.data);
            // setMessages((prevMessages) => [...prevMessages, response]);
            if (response.method === "connect") {
                setClientId(response.clientId);
            }
        };

        return () => {
            ws.current.close();
            console.log('connection close!')
        };
    }, []);

    const sendMessage = (message) => {
        if (ws.current && ws.current.readyState === WebSocket.OPEN) {
            const payLoad = {clientId, gameId, ...message}
            ws.current.send(JSON.stringify(payLoad));
            console.log(payLoad)
        }
    };

    return (
        <WebSocketContext.Provider value={{ gameId, sendMessage, setGameId, current: ws.current}}>
            {children}
        </WebSocketContext.Provider>
    );
};

WebSocketProvider.propTypes = {
    children: PropTypes.node.isRequired
};

export const useWebSocket = () => {
    return useContext(WebSocketContext);
};
