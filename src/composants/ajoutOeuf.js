import React from 'react'

const AjoutOeuf = ({ oeuf, ajouoeuf, suppoeuf, toutoeuf, coont }) => {
    return (
        <div className="jumbotron">
            <h1>Générer des éléments du DOM</h1>
            <p>Lorem ipsum dolor sit amet.</p>
            <div className="d-flex"></div>
            <button onClick={ajouoeuf} className="rounded bg-primary ml-2 p-2 border-0 text-white">Ajouter un oeuf</button>
            <button onClick={suppoeuf} className="rounded bg-primary ml-2 p-2 border-0 text-white">Supprimer un oeuf</button>
            <button onClick={toutoeuf} className="rounded bg-primary ml-2 p-2 border-0 text-white">Tout supprimer</button>
            <span className="rounded bg-danger ml-2 p-2 border-0 text-white">Vous avez {coont} oeufs dans votre panier :)</span>
            <div className="mt-5">

                {oeuf.map((el, i) => {
                    return (
                        <img key={i} width={"120px"} src="./img/kisspng-easter-egg-drawing-holy-week-egg-hunt-sorbisches-osterei-5b3d8903bda329.5208584715307594277768.jpg" alt="" />
                    )
                })}


            </div>
        </div>
    )
}

export default AjoutOeuf