import React from 'react'
import "./Televendas.css"


		// Arquivo criado para ter uma PopUp quando o mouse está
		// em cima de "Televendas"

function Televendas() {
	return (

					<div className='escrito'>
						<p>Compre pelo telefone</p>
						<h3>3004-2222</h3>
						<p>Para regiões metropolitanas</p>
						<h3>0800-718-2222</h3>
						<p>Para demais regiões</p>
						<div className='miniLetra'>
							<p >Horário de atendimento:</p>
							<p>De segunda a domingo, das 08 às 21h</p>
						</div>
					</div>

	)
}

export default Televendas