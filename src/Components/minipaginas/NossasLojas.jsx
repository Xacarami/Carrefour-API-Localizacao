import React from 'react'
import "./NossasLojas.css"

          // Arquivo criado para especificar o Popup quando
          // se coloca o mouse em "Nossas Lojas"

function NossasLojas() {

  return (
    <div>
		<div className='escrito'>
        <a href='https://www.carrefour.com.br/localizador-de-lojas' target="_blank" rel='noreferrer'>
            Encontre uma Loja
        </a>
        <a href='https://www.carrefour.com.br/grupo-carrefour' target="_blank" rel='noreferrer'>
		    Grupo Carrefour
        </a>
            <a href='https://www.carrefour.com.br/institucional/ofertas-das-lojas' target="_blank" rel='noreferrer'>
		    Ofertas das Lojas
        </a>
		</div>
    </div>
  )
}

export default NossasLojas