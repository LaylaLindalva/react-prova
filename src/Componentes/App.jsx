import {BrowserRouter, Routes, Route} from "react-router-dom"
import Contato from "./Contato"
import ControleLimpeza from "./ControleDeLimpeza"
import Rodape from "./Footer"
import Header from "./Header"
import Home from "./Home"
import Relatorio from "./Planilha"


const App = ()=>{
    return( 
    <BrowserRouter>
    <Header/>
    <Routes>
        <Route  path="/" element={<Home/>}/>
        <Route  path="/ControleLimpeza" element={<ControleLimpeza/>} />
        <Route path="/Relatorio" element={<Relatorio/>}/>
        <Route path="/FaleCononsco" element={<Contato/>}/>
    </Routes>
    <Rodape/>
    </BrowserRouter>
    )
}
export default App;