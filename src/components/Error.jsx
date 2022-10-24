import styled from "@emotion/styled"

const Texto = styled.div`
    
    background-color: #b73212;
    color: #fff;
    padding: 15px;
    font-size: 24px;
    text-transform: uppercase;
    font-family: 'lato';
    font-weight: 700;
    text-align: center;
    border-radius: 10px;

`

export const Error = ({children}) => {
  return (
    <Texto>
        {children}
    </Texto>
  )
}
