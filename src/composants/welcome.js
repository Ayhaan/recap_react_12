import React from 'react'

const Welcome = ({ contenue, changer, valeur, ajour, enterwelcome}) => {

    return (
        <div className="jumbotron p-5 ">
            <h1>Welcome <span>{contenue}</span> </h1>
            <h1>{}</h1>
            <p>Lorem ipsum dolor sit amet.</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid voluptatem nihil reprehenderit
            corporis, eos harum.</p>
            <input onKeyPress={enterwelcome} value={valeur} onChange={changer} type="text" className="mt-5 rounded-pill p-2" placeholder="Qui êtes-vous?" />
            <button onClick={ajour} className="btn p-2 bg-primary border-dark rounded-circle ml-2">GO</button>
        </div>
    )
}

export default Welcome