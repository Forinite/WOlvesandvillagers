import { useState } from "react";
// import { players } from "../constants"
import { useWebSocket } from "../hooks/webSocketContext";
import RoomHeader from "./RoomHeader"

const Lobby = () => {
    const ws = useWebSocket();
    const [players, setPlayers] = useState([]);

    ws.current.onmessage = (message) => {
        const response = JSON.parse(message.data);

        console.log(response.game.players)
        setPlayers(response.game.players);
    }

  return (
    <section>
        <RoomHeader />
        <div className="hidden lg:block w-[80%] mx-auto">
            <div className="bg-[#074d47] flex font-bold">
                <div className="w-24 pl-4">Profile</div>
                <div className="w-48 pl-2">Name</div>
                <div className="pl-2">ID</div>
            </div>
        </div>

        {players.map((item) => (
            <div key={item.id} className="py-1 lg:py-[1px]">
                <div className="w-[80%] mx-auto">
                    <div className=" flex w-full  bg-[#0b5f58] p-2 rounded-xl lg:rounded-none">
                        <div className=" overflow-hidden bg-white h-12 lg:h-16 aspect-square rounded-full ">
                            {/* <img src={item.img} alt="" /> */}
                        </div>
                        <div  className="pl-2 lg:pl-8 lg:flex lg:items-center">
                            {/* <p className="font-bold lg:w-48">{item.playerName}</p>  */}
                            <p className="text-[9px] text-neutral-800 lg:text-[16px] lg:text-black lg:font-bold">{item.id}</p>
                        </div>

                    </div>
                </div>
            </div>
        ))}
    </section>
  )
}

export default Lobby