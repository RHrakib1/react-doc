import DataUse from "./dataUse";
import Help from "./help";
import Rendaring from "./rendaring";

const Logical = () => {
    let isacess;

    const dataStore = false;

    if (dataStore) {
        isacess = <DataUse></DataUse>
    } else {
        isacess = <Help></Help>
    }


    return (
        <div>
            {isacess}
            <Rendaring></Rendaring>
        </div>
    )
}

export default Logical;