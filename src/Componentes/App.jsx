import {BrowserRouter, Routes, Route} from "react-router-dom"
import { useState } from "react"
import Contato from "./Contato"
import ControleLimpeza from "./ControleDeLimpeza"
import Rodape from "./Footer"
import Header from "./Header"
import Home from "./Home"
import Planilha from "./Planilha"


const App = ()=>{

    const [list, setLista] = useState([]);

    function salvaDados(dado) {
        let novaLista = [...list];
        novaLista.push(dado);
        setLista(novaLista);
    }

    return( 
    <BrowserRouter>
    <Header/>
    <Routes>
        <Route  path="/" element={<Home/>}/>
        <Route  path="/ControleLimpeza" element={<ControleLimpeza saveDados={salvaDados} />} />
        <Route path="/Relatorio" element={<Planilha list={list}/>}/>
        <Route path="/FaleCononsco" element={<Contato/>}/>
    </Routes>
    <Rodape/>
    </BrowserRouter>
    )
}
export default App;