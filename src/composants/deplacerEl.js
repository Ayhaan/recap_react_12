import React from 'react'

const DeplacerEl = ({ style, bouger, cont,zero }) => {
    return (
        <div className=" jumbotron">
            <h1 className={"text-center"}>Déplacer l'élement</h1>
            <div className="d-flex justify-content-center mt-3">
                <div className="blue m-4 rounded">
                    <div className={`rouge ${style === true ? "rounded" : "d-none"}`}></div>
                </div>

                <div className="blue m-4 rounded">
                    <div className={`rouge ${style === true ? "d-none" : "rounded"}`}></div>
                </div>
            </div>
            <div className="d-flex justify-content-center   mt-3">
                <button onClick={bouger} className="text-white font-weight-bold rounded border-0 bg-danger p-2 rounded">Changer de place</button>
            </div>
            <div className="d-flex justify-content-center mt-4">
                <p className="text-white font-weight-bold p-2 rounded bg-warning rounded jaune">Vous avez cliqué {cont} fois</p>
            </div>
            <div className=" d-flex justify-content-center mt-2">
                <button onClick={zero} className=" text-white font-weight-bold btn p-2 rounded bg-primary rounded jaune">Reset</button>
            </div>
        </div>
    )
}

export default DeplacerEl