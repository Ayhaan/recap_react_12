import React, { useState } from 'react'
import Ajouter from './_todoAjou'
import Filtre from './_todofiltre'


const TodoList = () => {
    let [list, setList] = useState("")
    let [tableau, setTableau] = useState([])
    // let [index, setIndex] = useState()

    // Value input changer
    let onChange = (ev) => {
        ev.preventDefault()
        setList(ev.target.value)
    }

    // Ajouter les elements ecris dans le input dans le tableau
    let ajouter = () => {
        let copieTableau = [...tableau]  //Ceci est une copie du tableau exctament mais pas pourJS
        if (list !== "") {
            copieTableau.push({
                texte: list,
                don: false,
                etat: "block",
                input: false
            })
        } else {
            alert('Veuillez remplir le champ!')
            return null
        }
        setList('')
        setTableau(copieTableau)

    }
    let ajouEnter = (e) => {
        let copieTableau = [...tableau]  //Ceci est une copie du tableau exctament mais pas pourJS
        if (e.key === 'Enter') {
            if (list !== "") {
                copieTableau.push({
                    texte: list,
                    don: false,
                    etat: "block",
                    input: false
                })
            } else {
                alert('Veuillez remplir le champ!')
                return null
            }
            setList('')
            setTableau(copieTableau)
        }
    }

    // Fonction qui supprime la tâche
    const listDelete = (i) => {
        let array = [...tableau]
        // let index = array.indexOf(el)
        array.splice(i, 1)
        setTableau(array)

    }
    // Filtre Fonction qui valide ta tâche
    let listValid = (i) => {
        let array = [...tableau]
        array[i].don = !array[i].don
        setTableau(array);
    }
    // Filtre Fonction qui edit la tâche
    let changeedit = (ev, i) => {
        let copieTableau = [...tableau]
        copieTableau[i].texte = ev.target.value
        setTableau(copieTableau)
    }
    let click = (i) => {
        let copieTableau=[...tableau];
        copieTableau[i].input = !copieTableau[i].input
        setTableau(copieTableau)        
    }
    let clickEnter =(ev, i) =>{
        let copieTableau = [...tableau]
        if (ev.key === 'Enter') {
            copieTableau[i].input = !copieTableau[i].input
        } else {
            copieTableau[i].texte = ev.target.value     
        }
        setTableau(copieTableau)
    }
    // Filtres
    let doo = () => {
        let copieTableau = [...tableau]
        copieTableau.forEach(el => {
            if (el.don) {
                el.etat = "block"
            } else {
                el.etat = 'none'
            }
        });
        setTableau(copieTableau)
    }
    let todoo = () => {
        let copieTableau = [...tableau]
        copieTableau.forEach(el => {
            if (el.don) {
                el.etat = "none"
            } else {
                el.etat = 'block'
            }
        });
        setTableau(copieTableau)
    }
    let aall = () => {
        let copieTableau = [...tableau]
        copieTableau.forEach(el => {
            if (el.don) {
                el.etat = "block"
            } else {
                el.etat = 'block'
            }
        });
        setTableau(copieTableau)
    }
    let vider = () => {
        setTableau([])
    }

    // Faire apparaitre le tableau dans la Todo
    const toDO = () => {
        return tableau.map((el, i) => {
            if (!el.input) {
                return (
                    <li onDoubleClick={() => click(i)} key={i} style={{ display: el.etat }} className={`${!el.don ? "bg-white p-2 text-secondary p-2 border rounded m-0 p-0'" : "bg-primary p-2 text-white p-2 border rounded m-0 p-0'"}`}>
                        <span >{el.texte}</span>
                        <button onClick={() => listDelete(i)} className="btn btn-danger float-right mr-2 pb-1 "><i className="fas fa-trash-alt "></i></button>
                        <button onClick={() => click(i)} className="btn btn-success float-right mr-2 pb-1"><i className="fas fas fa-save"></i></button>
                        <button onClick={() => listValid(i)} className="btn btn-primary float-right mr-2 pb-1"><i className="fas fa-check-circle"></i></button>
                    </li>
                )
            } else {
                return (
                    <li onDoubleClick={() => click(i)} key={i} style={{ display: el.etat }} className={`${!el.don ? "bg-white p-2 text-secondary p-2 border rounded m-0 p-0'" : "bg-primary p-2 text-white p-2 border rounded m-0 p-0'"}`}>
                        <input value={el.texte} onChange={(ev) => changeedit(ev, i)} onKeyPress={(ev) =>clickEnter(ev, i)} type="text" name="" id="" />
                        <button onClick={() => listDelete(i)} className="btn btn-danger float-right mr-2 pb-1 "><i className="fas fa-trash-alt "></i></button>
                        <button onClick={() => click(i)} className="btn btn-success float-right mr-2 pb-1"><i className="fas fas fa-save"></i></button>
                        <button onClick={() => listValid(i)} className="btn btn-primary float-right mr-2 pb-1"><i className="fas fa-check-circle"></i></button>
                    </li>
                )

            }
        })
    }
    // onKeyPress={save} onChange={savechange} onDoubleClick={() => listEdit(i)}
    return (
        <div className={"jumbotron"} >
            {/* <h6 className='text-center bg-primary p-2 text-white font-weight-bold'>Ma ToDoList</h6> */}
            <Ajouter enter={ajouEnter} list={list} change={onChange} ajou={ajouter} deelete={listDelete} />
            <h5 className="text-primary p-2 border rounded m-0 font-weight-bold text-center mt-3">Ma Todo List</h5>
            <Filtre fait={doo} afaire={todoo} tout={aall} vider={vider} />
            <ul className=" mt-2 p-0">
                {toDO()}
            </ul>
            <div className="text-center">
                <button onClick={vider} className="btn btn-danger mt-3 w-50 ">Clear List </button>

            </div>
        </div>
    )
}

export default TodoList