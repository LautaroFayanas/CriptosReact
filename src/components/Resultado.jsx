import styled from "@emotion/styled"

const Contenedor = styled.div`
    color: #FFF;
    font-family: 'lato';
    align-items: start;
    gap: 1rem;
    display: flex;
    margin-top: 30px;
`

const Imagen = styled.img`
    width: 120px;
    display: block;
`

const Texto = styled.p`
    font-size: 18px;
    span{
        font-weight: 700;
    }
`

const Precio = styled.p`
    font-size: 24px;
    span{
        font-weight: 700;
    }
    

`

export const Resultado = ({ resultado }) => {
    const { PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE } = resultado
    return (
        <Contenedor>
            <Imagen src={`https://cryptocompare.com/${IMAGEURL}`} alt='cripto' />

            <div>
                <Precio> El precio es de: <span> {PRICE} </span> </Precio>
                <Texto> Precio mas alto del dia: <span> {HIGHDAY} </span> </Texto>
                <Texto> Precio mas bajo del dia: <span> {LOWDAY} </span> </Texto>
                <Texto> Variacion ultimas 24hs: <span> {CHANGEPCT24HOUR} </span> </Texto>
                <Texto> Ultima actualizacion: <span> {LASTUPDATE} </span> </Texto>
            </div>

        </Contenedor>
    )
}
