import React from 'react'

const ChangeName = ({nom,changeTitle,couleur,changeCouleur,bg,reset}) => {
    return (
        <div className="mt-5 p-4 jumbotron">

            <h1 onClick={reset} className='text-center p-2' style={couleur}>{nom === false ? "Titre modifié" : " Le titre a modifier?"}</h1>
            <p className="mt-3">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
            <ul>
                <li>Lorem, ipsum dolor.</li>
                <li>Lorem, ipsum dolor</li>
                <li>Lorem, ipsum dolor.</li>
                <li>Lorem, ipsum dolor.</li>
            </ul>
            <div className="d-flex justify-content-center">
                <button onClick={changeTitle} className=" p-2 m-2 rounded border-none btn bg-primary text-white font-weight-bold">Cliquez Title</button>
                <span onClick={changeCouleur} className=" p-2 m-2 rounded border-none btn bg-warning text-white rando font-weight-bold">ColorTitle</span>
                <span onClick={bg} className=" p-2 m-2 rounded border-none btn bg-danger text-white rand font-weight-bold">ColorBg</span>
            </div>
        </div>
    )
}

export default ChangeName