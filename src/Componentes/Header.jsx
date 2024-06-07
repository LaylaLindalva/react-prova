import { DivLink, H1, Nav } from "../Style/Header";
import {Link }from "react-router-dom"


const Header = ()=>{
    return(
        <Nav style={{backgroundColor: '#152473'}}>
           <H1>CONTROL-CLEAN</H1>
            <DivLink>
            <Link to='/'></Link>
            <Link className='link' to='/'>Home</Link>
            <Link className='link' to='/ControleLimpeza'>Controle/Limpeza</Link>
            <Link className='link' to='/Relatorio'>Planilha</Link>
            <Link className='link' to='/FaleCononsco'>Contato</Link>
            </DivLink>
        </Nav>
        )
    }
    export default Header; 