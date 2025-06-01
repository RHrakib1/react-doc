import { useState } from "react";
import Event from "./event";

const Button = () => {

    
    return (
        <div>
            <button type="submit" className="bg-gray-500 hover:bg-gray-600 text-white font-semibold py-2 px-4 rounded">Submit</button>
            <Event></Event>
        </div>
    )
}

export default Button;