import React, { useState } from 'react';
import ChangeName from './composants/changeName'
import NavBar from './composants/navBar'
import Welcome from './composants/welcome'
import DeplacerEl from './composants/deplacerEl'
import AjoutOeuf from './composants/ajoutOeuf'
import Calculette from './composants/calculette'
import TodoList from './composants/todolist'

import {
  BrowserRouter as Router,
  Link,   // Permet de creer des 'a' en react. La nav directement
  Switch,   // Elle englope les "route"
  Route,    // se sont les routes utiliser pour switcher entre les composants/documents
} from 'react-router-dom'

const App = () => {

  // exo1
  const [nom, setNom] = useState(true);
  let changerNom = () => {
    nom === true ? setNom(false) : setNom(true);
  }
  // exo1 btn bonus
  const [couleur, setCouleur] = useState({ color: "black", backgroundColor: "rgba(233,236,239,255" })
  let changerCouleur = () => {
    let couleurX = { color: `rgb(${Math.round(Math.random() * 255)},${Math.round(Math.random() * 255)},${Math.round(Math.random() * 255)})`, backgroundColor: couleur.backgroundColor }
    setCouleur(couleurX)
  }
  // exo1 btn bonus
  let changeBg = () => {
    let couleurBg = { backgroundColor: `rgb(${Math.round(Math.random() * 255)},${Math.round(Math.random() * 255)},${Math.round(Math.random() * 255)})`, color: couleur.color }
    setCouleur(couleurBg)
  }
  let reset = () => {
    let reseet = { color: "black", backgroundColor: "rgba(233,236,239,255" }
    setNom(true)
    setCouleur(reseet)
  }

  // exo2
  const [nav, setNav] = useState([false, false, false, false, false, false, false])

  let colorClick = (i) => {
    let copieNav = [false, false, false, false, false, false, false]
    if(copieNav[i] === false) {
      copieNav.splice(i, 1, true)
    }
    setNav(copieNav)
  } 

  // exo3
  const [welc, setWelc] = useState("...")
  const [enteer, setEnter] = useState("")

  let ajouter = (ev) => {
    setEnter(ev.target.value)
  }
  let ajour = () => {
    if (enteer !== "") {
      setWelc(enteer)
      setEnter('')
    } else {
      alert("attention")
    }
  }
  let enterwelc = (ev) => {
    if (ev.key === 'Enter') {
      if (enteer !== "") {
        setWelc(enteer)
        setEnter('')
      } else {
        alert("attention")
      }
    }
  }
  // exo4
  const [deplacer, setDeplacer] = useState(true)
  const [cont, setCont] = useState(0)
  let bouger = () => {
    deplacer === true ? setDeplacer(false) : setDeplacer(true)
    setCont(cont + 1)
  }
  let zero = () => {
    setDeplacer(true)
    setCont(0)
  }
  // exo5
  const [oeuf, setOeuf] = useState([])
  const [coont, setCoont] = useState(0)

  let ajouoeuf = () => {
    let oeufcopie = [...oeuf]
    oeufcopie.push(
      (1),
    )
    setCoont(coont + 1)
    setOeuf(oeufcopie)
  }

  let suppoeuf = () => {
    if (coont === 0) {
      return null
    }
    let oeufcopie = [...oeuf]
    oeufcopie.pop()
    setCoont(coont - 1)
    setOeuf(oeufcopie)
  }
  let toutoeuf = () => {
    setOeuf([])
    setCoont(0)
  }
 
  return (
    <div className="container mt-3">
      <h1 className='text-center bg-primary p-3 text-white font-weight-bold'>Recap React !</h1>
      <Router>
        <div className="mt-5 d-flex justify-content-between flex-wrap">
          <Link className={` ${nav[0] === false ? "" : "bg-primary text-white"}`} onClick={() => colorClick(0)} to="exo1">Exercice 1</Link>
          <Link className={` ${nav[1] === false ? "" : "bg-primary text-white"}`} onClick={() => colorClick(1)} to="exo2">Exercice 2</Link>
          <Link className={` ${nav[2] === false ? "" : "bg-primary text-white"}`} onClick={() => colorClick(2)} to="exo3">Exercice 3</Link>
          <Link className={` ${nav[3] === false ? "" : "bg-primary text-white"}`} onClick={() => colorClick(3)} to="exo4">Exercice 4</Link>
          <Link className={` ${nav[4] === false ? "" : "bg-primary text-white"}`} onClick={() => colorClick(4)} to="exo5">Exercice 5</Link>
          <Link className={` ${nav[5] === false ? "" : "bg-primary text-white"}`} onClick={() => colorClick(5)} to="exo6">Exercice 6</Link>
          <Link className={` ${nav[6] === false ? "" : "bg-primary text-white"}`} onClick={() => colorClick(6)} to="exo7">Exercice 7</Link>
        </div>

        <div className="mt-5">
          <Switch>
            <Route path='/exo1'>
              <ChangeName nom={nom} changeTitle={changerNom} couleur={couleur} changeCouleur={changerCouleur} bg={changeBg} reset={reset} />
            </Route>
          </Switch>

          <Switch>
            <Route path='/exo2'>
              <NavBar />
            </Route>
          </Switch>

          <Switch>
            <Route path='/exo3'>
              < Welcome contenue={welc} changer={ajouter} valeur={enteer} ajour={ajour} enterwelcome={enterwelc} />
            </Route>
          </Switch>

          <Switch>
            <Route path='/exo4' >
              <DeplacerEl style={deplacer} bouger={bouger} cont={cont} zero={zero} />
            </Route>
          </Switch>

          <Switch>
            <Route path='/exo5'>
              <AjoutOeuf oeuf={oeuf} ajouoeuf={ajouoeuf} suppoeuf={suppoeuf} toutoeuf={toutoeuf} coont={coont} />
            </Route>
          </Switch>

          <Switch>
            <Route path='/exo6'>
              <Calculette />
            </Route>
          </Switch>

          <Switch>
            <Route path='/exo7'>
              <TodoList />
            </Route>
          </Switch>

        </div>

      </Router>
    </div>




  );
}

export default App;
