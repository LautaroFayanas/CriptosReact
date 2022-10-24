import {useState} from 'react'
import styled from '@emotion/styled'

const Label = styled.label`
    color: white;
    display: block;
    font-family: 'lato';
    font-size: 24px;
    font-weight: 700;
    margin: 15px 0;
`
const Select = styled.select` 
    width: 100%;
    font-size: 18px;
    padding: 14px;
    border-radius: 10px;
    margin-bottom: 20px;
`

export const useSelectMonedas = (label, opciones) => {

    const [ state , setState ] = useState('')

    const SelectMonedas = () => (
        <>
            <Label>{label}</Label>
            
            <Select
            value={state}
            onChange={ e => setState(e.target.value)}
            >
                <option value=''>Seleccione</option>

                {opciones.map(opcion => (
                    <option key={opcion.id} value={opcion.id} >
                        {opcion.nombre}
                    </option>
                ))}
            </Select>
        </>
    )

    return [ state , SelectMonedas ];

}
