import { players } from "../constants"
import RoomHeader from "./RoomHeader"

const GameRoom = () => {
  return (
    <section>
        <div>
            <RoomHeader />
            <div className="">
                <div className="lg:overflow-hidden lg:hover:overflow-y-scroll  lg:h-[500px] grid grid-cols-3 lg:grid-cols-4 justify-between gap-4 p-2 items-center  w-[80%] lg:w-[70%] bg-[#32786a] h-full overflow-hidden mx-auto rounded-xl">
                    
                    {players.map((item) => (
                            <div key={item.id} className="w-[100%] h-40 lg:h-72 bg-blue-100">
                                <div className="overflow-hidden mt-6 mx-auto lg:w-24 w-14 rounded-full aspect-square bg-white">
                                    <img src={item.img} alt="" />
                                </div>
                                <p className=" mt-2 lg:mt-8 text-center lg:text-[16px] font-bold text-xs h-4">{item.playerName}</p>
                                <div className=" w-full ">
                                    <p className=" relative w-full text-xl font-semibold  text-right lg:top-20  top-6 right-2">{item.numberVotes}</p>
                                </div>
                                
                        </div>
                    ))}

                </div>
            </div>
            
        </div>
        
    </section>
  )
}

export default GameRoom