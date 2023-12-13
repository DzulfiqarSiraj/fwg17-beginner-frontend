import React from 'react'



const App = ()=>{
    let [greetings, setGreetings] = React.useState('Greetings')

    const morningButton = ()=> {
        setGreetings(
            'Good Morning'
        )
    }

    const nightButton = ()=> {
        setGreetings(
            'Good Night'
        )
    }
    return (
        <>
            <div className='wrapper'>
                <div className='text-lg font-semibold'>{greetings}</div>
                <div className='flex gap-5'>
                    <button className='border border-red-500 rounded-lg p-5' onClick={morningButton}>Morning</button>
                    <button className='border border-blue-500 rounded-md p-5' onClick={nightButton}>Night</button>
                </div>
            </div>
        </>
    )
}

export default App