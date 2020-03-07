import React, { useState } from 'react'

const Calculette = () => {
    // Niveau 1 
    const [input1, setInput1] = useState("")
    const [input2, setInput2] = useState("")
    const [select, setSelect] = useState("+")
    const [resultat, setResultat] = useState("...")

    let recup = (ev) => {
        setSelect(ev.target.value)
    }
    let changer = (ev) => {
        setInput1(ev.target.value)
    }
    let changer2 = (ev) => {
        setInput2(ev.target.value)
    }
    let egal = () => {
        switch (select) {
            case "+":
                let resultat1 = parseFloat(input1) + parseFloat(input2)
                setResultat(resultat1)
                break;
            case "-":
                let resultat2 = parseFloat(input1) - parseFloat(input2)
                setResultat(resultat2)
                break;
            case "*":
                let resultat3 = parseFloat(input1) * parseFloat(input2)
                setResultat(resultat3)
                break;
            case "/":
                let resultat4 = parseFloat(input1) / parseFloat(input2)
                setResultat(resultat4)
                break;
            default:
                alert("Zuut")
        }
    }

    // Niveau2

    let [input3, setInput3] = useState(0)
    let [ope, setOpe] = useState("")
    let [preval, setPreval] = useState("")
    let [newVal, setNewVal] = useState("")
    let [resultaat, setResultaat] = useState("")

    // let inp3 = (ev) => {
    //     // ev.preventdefault()
    //     setInput3(ev.target.value)
    // }
    let btn = (num) => {
        // newVal += num
        // setInput3(newVal)
        if (resultaat) {
            newVal = num
            setNewVal(newVal)
        } else {
            newVal += num
            setNewVal(newVal)
        }
        setInput3(newVal)
    }
    let operateur = (ope1) => {
        // setPreval(newVal)
        // setNewVal('')
        // // setInput3(newVal)
        // setOpe(ope1)
        // setInput3(ope)
        setPreval(newVal)
        setNewVal('')
        setResultaat('')
        setOpe(ope1)
        setInput3(ope1)

    }
    let resul = () => {
        switch (ope) {
            case "+":
                resultaat = parseFloat(preval) + parseFloat(newVal)
                setResultaat(resultaat)
                setInput3(resultaat)
                break;
            case "-":
                resultaat = parseFloat(preval) - parseFloat(newVal)
                setResultaat(resultaat)
                setInput3(resultaat)
                break;
            case "*":
                resultaat = parseFloat(preval) * parseFloat(newVal)
                setResultaat(resultaat)
                setInput3(resultaat)
                break;
            case "/":
                resultaat = parseFloat(preval) / parseFloat(newVal)
                setResultaat(resultaat)
                setInput3(resultaat)
                break;
            default:
        }

    }
    // console.log(input3)

    let reset = () => {
        setInput3(0)
        setPreval('')
        setNewVal('')
        setOpe("")
        setResultaat('')
    }

    return (
        <div className="exo6  jumbotron p-3 exo ">
            <h2>Création de calculatrice</h2>
            <h2>Niveau1</h2>

            {/* Niveau1 */}
            <div className="calulette">
                <input value={input1} onChange={changer} type="text" />
                <select onChange={recup} value={select} name="operator" className="btn ope">
                    <option value="+">+</option>
                    <option value="-">-</option>
                    <option value="*">*</option>
                    <option value="/">/</option>
                </select>
                <input onChange={changer2} value={input2} type="text" />
                <button onClick={egal} className="btn">
                    <p className="p-1 m-0 equal">=</p>
                </button>
                <span id="resultat" className="ml-2">{resultat}</span>
            </div>

            {/* Niveau 2 */}
            <h2 className="mt-5">Niveau2</h2>
            <div className="row ">
                <div className="p-4 m-3 calculette">
                    <div>
                        <input readOnly value={input3} className="rounded text-right ml-2 mt-2 input" type="text" />
                    </div>
                    <div className="mt-2">
                        <button className="button btn-primary rounded" onClick={() => btn(9)} >9</button>
                        <button className="button btn-primary rounded" onClick={() => btn(8)} >8</button>
                        <button className="button btn-primary rounded" onClick={() => btn(7)}>7</button>
                        <button className="button btn-warning rounded" onClick={() => operateur("+")}>+</button>
                    </div>
                    <div className="mt-2">
                        <button className="button btn-primary rounded" onClick={() => btn(6)}>6</button>
                        <button className="button btn-primary rounded" onClick={() => btn(5)}>5</button>
                        <button className="button btn-primary rounded" onClick={() => btn(4)}>4</button>
                        <button className="button btn-warning rounded" onClick={() => operateur("-")}>-</button>
                    </div>
                    <div className="mt-2">
                        <button className="button btn-primary rounded" onClick={() => btn(3)}>3</button>
                        <button className="button btn-primary rounded" onClick={() => btn(2)}>2</button>
                        <button className="button btn-primary rounded" onClick={() => btn(1)}>1</button>
                        <button className="button btn-warning rounded" onClick={() => operateur("*")}>*</button>
                    </div>
                    <div className="mt-2">
                        <button className="button btn-primary rounded btnc" onClick={reset}>C</button>
                        <button className="button btn-primary rounded" onClick={() => btn(0)}>0</button>
                        <button className="button btn-primary rounded">.</button>
                        <button className="button btn-warning rounded" onClick={() => operateur("/")}>/</button>
                    </div>
                    <div className="mt-2 ">
                        <button className="egal rounded" onClick={() => resul()}>=</button>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Calculette