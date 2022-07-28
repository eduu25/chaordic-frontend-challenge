import Button from '../button/Button'
import style from './Header.css'

function Header(){
    return(
        <div className={style.Header}>
            <h4>uma seleção de produtos</h4>
            <br />
            <h1>especial para você</h1>
            <br />
            <h3>Todos os produtos dessa lista foram selecionados a partir da sua navegação. Aproveite!</h3>  
            <br/>
            <div className={style.BtnHeader}>
                <Button text='Conheça a Linx'/>   
                <Button text='Ajude o algoritmo'/>   
                <Button text='Seus produtos'/>   
                <Button text='Compartilhe'/>
            </div>    
        </div>
    )
}

export default Header