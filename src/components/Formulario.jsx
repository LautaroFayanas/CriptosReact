import styled from "@emotion/styled"
import { Error } from './Error'
import { useSelectMonedas } from "../hooks/useSelectMonedas"
import { monedas } from '../data/monedas'
import { useEffect, useState } from "react"

const InputSubmit = styled.input`
    background-color: #9497FF;
    border: none;
    width: 100%;
    padding: 10px;
    color: #fff;
    font-weight: 700;
    text-transform: uppercase;
    font-size: 20px;
    border-radius: 10px;
    transition: background-color .3s ease;
    &:hover{
        background-color: #7a7dfe;
        cursor: pointer;
    }
    
`

export const Formulario = ({setMonedas}) => {

    const [criptos, setCriptos] = useState([]);
    const [error, setError] = useState(false);
    const [moneda, SelectMonedas] = useSelectMonedas('Elegi tu Moneda', monedas);
    const [criptoMoneda, SelectCriptomoneda] = useSelectMonedas('Elegi tu Criptomoneda', criptos);

    useEffect(() => {
        const consultandoApi = async () => {
            const url = `https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=USD`;
            const respuesta = await fetch(url)
            const resultado = await respuesta.json()
            console.log(resultado.Data);

            const arrayCriptos = resultado.Data.map(cripto => {
                const objeto = {
                    id: cripto.CoinInfo.Name,
                    nombre: cripto.CoinInfo.FullName,
                }

                return objeto;

            })

            setCriptos(arrayCriptos);
        }

        consultandoApi();

    }, [])

    const handleSubmit = (e) => {
        e.preventDefault()

        if ([moneda, criptoMoneda].includes('')) {
            setError(true);
            return
        }

        setError(false)
        setMonedas({
            moneda,
            criptoMoneda
        })
    }


    return (
        <>
            {error && <Error>Todos los campos son obligatorios</Error>}

            <form
                onSubmit={handleSubmit}
            >
                <SelectMonedas />
                <SelectCriptomoneda />
                <InputSubmit
                    type='submit'
                    value='cotizar'
                />
            </form>

        </>

    )
}
