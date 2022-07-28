import style from './Form.componente.css'
import React from 'react'


const className  = () => {
  return (
    <div className={style.Form}>
    <form>
        <div>
            <label>Seu nome</label><br />
            <input type="text" placeholder="Nome" id="nome"/><br/><br />
            
            <label>Email</label><br />
            <input type="email" placeholder="Email" /><br/><br />

            <label>CPF</label><br />
            <input type="text" placeholder="CPF"/><br/>
        </div>
            <input type="radio" name="sexo"/>Masculino
            <input type="radio" name="sexo"/>Feminino
        <div>
            <input id={style.btnEnviar} type="submit" value="Enviar" />
        </div>
    </form>
</div>
  )
}

export default className 