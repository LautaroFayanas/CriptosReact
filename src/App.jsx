import styled from "@emotion/styled"
import { useState , useEffect } from "react"
import { Formulario } from "./components/Formulario"
import { Resultado } from "./components/Resultado"
import ImagenCripto from './img/imagen-criptos.png'
import { Spiner } from "./components/Spiner"

const Contenedor = styled.div`
  max-width:900px;
  margin: auto;
  width:90%;
  @media (min-width: 992px){
    display: grid;
    grid-template-columns: repeat(2,1fr);
    column-gap: 2rem;
  }
`

const Imagen = styled.img`
  max-width:400px;
  width:80%;
  margin:100px auto 0 auto;
  display:block;
`

const Heading = styled.h1`
  color:white ;
  font-family: 'lato';
  text-align: center;
  font-weight: 700;
  margin-top: 80px;
  margin-bottom: 50px;
  font-size: 34px;
`

function App() {

  const [ monedas , setMonedas ] = useState({});
  const [ resultado , setResultado ] = useState({});
  const [ cargando , setCargando ] = useState(false);

  useEffect(() => {

    if(Object.keys(monedas).length > 0){

      const { moneda , criptoMoneda } = monedas

      const cotizarCripto = async () => {

        setCargando(true)
        setResultado({})

        const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptoMoneda}&tsyms=${moneda}` ;
        const respuesta = await fetch(url) ;
        const resultado = await respuesta.json();

        setResultado(resultado.DISPLAY[criptoMoneda][moneda]);

        setCargando(false)
      }

      cotizarCripto()
    }
  }, [monedas])
  

  return (
    <Contenedor>
      <Imagen
        src={ImagenCripto}
      />

      <div>
        <Heading>Cotiza Criptomonedas Al Instante</Heading>
        <Formulario
        setMonedas={setMonedas}
        />
       { cargando && <Spiner /> }
       { resultado.PRICE && <Resultado resultado={resultado} /> }
      </div>
    </Contenedor>
  )
}

export default App
