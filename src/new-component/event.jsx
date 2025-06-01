import { useState } from "react"


const Event = () => {
    const [count, setcount] = useState(0)

    function handleClick() {
        setcount(count + 1)
    }

    return (
        <div>
            <button className='btn btn-primary' onClick={handleClick}>Push Time <span className="font-extrabold text-shadow-yellow-500 text-4xl">{count}</span> Now</button>
        </div>
    )
}

export default Event
