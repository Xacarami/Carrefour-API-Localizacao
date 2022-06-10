import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from 'react-router-dom';
import { IoArrowBackSharp } from "react-icons/io5";
import { BsFillCartCheckFill } from "react-icons/bs";
import logoSemLetra from "../assets/Carrefour-c-logo.png";
import carina from "../assets/fale-com-Carina.jpg";
import "./Produto.css"

function Produto() {

        // Arquivo criado para cada produto encontrado na Api


    // Pega o id do produto na Url
  const { id } = useParams();
    // Pega da Url e prova que mudou de mercado
  const { mercado } = useParams();
    // um Toggle de se está ou não carregando a página
  const [loading, setLoading] = useState(false);
    // Guarda a array do mercado, lido da api
  const [filter, setFilter] = useState([]);


  let componentMounted = true;

      // Lê a Api, retornando para o Filter os Produtos
      // disponíveis nesse mercado (retorna todos, mais
      // abaixo fará um "selecionador")

  useEffect(() => {
    const getProduto = async () => {
      setLoading(true);
      const response = await fetch(
        `https://mercado.carrefour.com.br/api/catalog_system/pub/products/search?fq=${mercado}`
      );
      setFilter(await response.json());
      setLoading(false);
    };
    getProduto();
  }, []);

      // Dá a função de voltar a página no Icone de seta
  const navigate = useNavigate();
  const voltarTela = () => {
    navigate(-1);
  }

      // É executado quando a tela estiver carregando
  const Loading = () => {
    return <>
    <span className="escritoCarregando">Carregando...</span>
    <div className="d-flex justify-content-center .flex-column">
      <div className="spinner-borderPersonalizado" role="status">
    <img className="imagemLogoCarregando" src={logoSemLetra} alt=""/>
  </div>
</div>
    </>;
  };


      // É executado quando a página carrega
  const MostrarProduto = () => {
      // Pega e renderiza as informações do produto
      // específico, diferenciado pela sua ID

    return (
      <>
        {filter.map((produto) => {
            // O id selecionado na api é o mesmo clicado? Se sim, vai para o return
          if (produto.productId == id) {
            let preco = `${produto.items[0].sellers[0].commertialOffer.Installments[11].Value}`;
            let precoComVirgula = preco.replace(".", ",");
            return (

                // Estrutura como título, local, tamanho do produto
              <>
                <div className="col-md-6">
                  <img
                    src={produto.items[0].images[0].imageUrl}
                    alt={produto.productName}
                    height="350px"
                    width="auto"
                  />
                </div>
                <div className="col-md-6 border my-5Personalizado">
                    <div className="col-md-12 ms-2">
                        <h1 className="display-6Personalizado nomeProduto">{produto.productName}</h1>
                        <p className="leadPersonalizado">Marca: {produto.brand}</p>
                        <h3 className="display-6-2Personalizado fw-bold my-3">
                            R$ {precoComVirgula}
                        </h3>
                        <button type="button" className="btn btn-primary botaoComprar"><span className="iconeCart"><BsFillCartCheckFill /></span> Adicionar ao Carrinho</button>
                    </div>
                </div>
                        <div>
                            <p className="descricaoTitulo">Descrição do Produto</p>
                            <p className="descricaoCompleta">{produto.description}</p>
                        </div>
              </>
            );
          } else {
          }
        })}
      </>
    );
  };

  return (
    <>
      <div>
      <button className="setaDeVoltarTela" onClick={voltarTela}><IoArrowBackSharp /></button>
        <div className="container">
          <div className="row">
            {/* Lógica em que, se a página terminar de carregar, renderizará o produto */}
            {loading ? <Loading /> : <MostrarProduto />}
          </div>
        </div>
            {loading ? "" :
          <>
            {/* Banner da AI Carina */}
          <a
          href={`https://api.whatsapp.com/send?phone=551130042222&text=Ol%C3%A1!%20Eu%20sou%20a%20Carina%2C%20assistente%20virtual%20do%20Carrefour.%20Precisa%20de%20ajuda%3F%20Manda%20um%20Oi%20pra%20mim`}
          target="_blank"
          rel="noreferrer"
        >
              <img src={carina} alt="Fale com a Carina" className="imagemCarina"/>
            </a>
            
            <p className="mensagemFinal">Desenvolvido por Xacarami para concorrer ao TechDay do Carrefour + Digital Innovation One</p>
          </>
  }

      </div>
    </>
  );
}

export default Produto;
