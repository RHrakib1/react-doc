import img from '../assets/usAVApC.jpeg'
const dataStore = {
    name: 'Red Dragon',
    age: 35,
    url: img

}


const DataUse = () => {
    return (
        <div >
            <h1 className='text-6xl text-red-800 p-5 text-center font-bold'>{dataStore.name}</h1>
            <img className='w-64 h-64 rounded-2xl' src={dataStore.url} alt="nao re vai nai" />
            <p>{dataStore.age}</p>
        </div>
    )
}

export default DataUse;