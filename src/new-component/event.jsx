

const Event = () => {

    function handleClick() {
        alert('Dont wast your time please')
    }

    return (
        <div>
            <button className='btn btn-primary' onClick={handleClick}>Push It</button>
        </div>
    )
}

export default Event
