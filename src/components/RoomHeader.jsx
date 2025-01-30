import CircularGameTimer from "./Timer"

const RoomHeader = () => {
  return (
    <div className="pt-4">
        <div className=" mx-auto w-24 aspect-square bg-white rounded-full">
            <div>
              <CircularGameTimer/>
            </div>
        </div>
        <p className="w-fit text-lg mx-auto mt-4 font-bold mb-12">Room ID: 1234-5678-9876</p>
    </div>
  )
}

export default RoomHeader