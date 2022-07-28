import { useEffect, useState } from 'react'
import Card from './componentes/cards/Card';
import Footer from './componentes/footer/Footer';
import Header from './componentes/header/Header';
import Form from './componentes/forms/Form'



function App() {
  const [produtos, setProdutos] = useState({});
  const [carregado, setCarregado] = useState(false);

  useEffect(() => {
    async function Api() {
      const rota =
        "https://frontend-intern-challenge-api.iurykrieger.vercel.app/products?page=1";
      const data = await fetch(rota);
      setProdutos(await data.json());
      setCarregado(carregado => carregado = true)
    } Api();
  }, []);

  return (
    <div className="App">
      <Header/>
      <Form/>
    <ul>
        {carregado === true
        ? produtos.products.map((produto) => {
            return <Card 
            img={produto.image} 
            title={produto.name} 
            descri={produto.description} 
            precoAnterior={produto.oldPrice} 
            precoAtual={produto.price} 
            parcelas={produto.installments.value} 
            qtParcelas={produto.installments.count}
             />
          
          }) 
          : ''}
      </ul>
      <Footer/>
    </div>
  )
}

export default App
