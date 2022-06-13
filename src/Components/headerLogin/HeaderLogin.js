
import './HeaderLogin.css'
import '../nav/Nav'
import logotipo from '../header/logotipo.svg'
import {useState} from "react";
import { Link } from 'react-router-dom'

function Header() { 
    /*Creacion Hook*/
    const[button, setButton]=useState({
        nombre:'',
        apellido:''
    });
    
    /*Constantes que funcionas con eventos*/
    const click=e=>{
        console.log("Afecto button")
        const {target}=e;
        const{name,value}=target;

        const newValor={
            ...button,
            [name]:value,

        };
        setButton(newValor);

        
    }
    return (
    <header>
        <script src="https://kit.fontawesome.com/d5d81529d3.js" crossOrigin="anonymous"></script>
        <section className="logo-index">
      
            <img src={logotipo} alt="Logotipo" className="logotipo"></img>

        <div class="user">
            <i class="fa-solid fa-circle-user user user-icon"></i>
            <p>Beatriz Pinzon</p>
            <div class="down-arrow">
                <section class="arrow-dropdown">
                <div class="down-arrow">
                  <input type="checkbox" id="chk-setting"></input>
                  <label for="chk-setting" class="btn-dropdown">
                      <i class="fa-solid fa-caret-down  fa-1x down-arrow"></i>
                  </label>
                  <div class="items">
                  <Link to="/dashboard/ajustes"class="item">Ajustes</Link>
                  <Link to="/dashboard/perfil"class="item">Perfil</Link>
                  <Link to="/login" class="item">Log out</Link>
                </div>
                </div>
                </section>
            </div>
        </div>
        </section>


        <div className="barra">
        <div className="linea-proof"></div>   
           
        </div>

    </header>
    
    
    ) }
export default Header;