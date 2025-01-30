import { useNavigate } from "react-router-dom";
import { useWebSocket } from "../hooks/webSocketContext"

const ServerSpace = () => {
    const ws = useWebSocket();
    const navigate = useNavigate();

    const handleCreateGame = () => {
        const payload = {
            method: "create",
        }
        ws.sendMessage(payload)
    
        ws.current.onmessage = (message) => {
            const response = JSON.parse(message.data)
            console.log(response);
            if (response.method === "create") {
                ws.setGameId(response.game.id)
            }
        }
    };

    const handleJoineGame = () => {
        const payload = {
            method: "join",
        }
        if (ws.gameId)
            ws.sendMessage(payload)

        ws.current.onmessage = (message) => {
            const response = JSON.parse(message.data)
            if (response.method === "join") {
                console.log(response);
                navigate('/lobby')
            }
        }
    };

    const handleInputChange = (event) => {
        ws.setGameId(event.target.value);
    };

    return (
        <section className="">
            <div className=" h-fit w-full pt-32 items-center justify-center">
                <div className="md:grid grid-cols-2 lg:block">
                    <div className="row-span-2 mx-auto  bg-white lg:bg-transparent w-72 lg:w-fit  aspect-square lg:aspect-auto flex justify-center items-center rounded-full ">
                        <div className="  w-fit mx-auto text-2xl font-extrabold lg:font-bold lg:text-6xl ">
                            Wolves and Villagers
                        </div>
                    </div>
                    <div className="mx-auto w-fit mt-16 lg:mt-20 ">
                        <input 
                            value={ws.gameId} 
                            onChange={handleInputChange}
                            onClick={handleJoineGame}
                            placeholder="Room Name" 
                            className="px-4 placeholder:text-neutral-800 text-neutral-800 lg:bg-[#d6a7a7d1] lg:w-[440px] w-72 h-16 lg:h-10 lg:text-center text-xl" 
                            type="text" 
                        />
                    </div>
                    <div className="w-72 lg:w-fit h-fit flex space-x-12 mt-12 lg:mt-24 mx-auto ">
                        <button onClick={handleCreateGame} className="text-black bg-red-500 py-3 w-32 lg:w-96 text-center">Create</button>
                        <button onClick={handleJoineGame} className=" text-black bg-red-500 py-3 w-32 lg:w-96 text-center">Join</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ServerSpace