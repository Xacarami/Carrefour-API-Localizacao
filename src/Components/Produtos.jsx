import React, { useState, useEffect } from "react";
import axios from "axios";
import logoSemLetra from "../assets/Carrefour-c-logo.png";

import "./Navegacao.css";
import "./Produtos.css";
import { NavLink } from "react-router-dom";

const Produtos = () => {

  // Recebe a array dos produtos disponíveis no mercado
  const [filter, setFilter] = useState([]);
    // Um Toggle de se a tela está ou não carregando
  const [loading, setLoading] = useState(false);
    // Armazena o nome do mercado escrito no CEP
  const [mercado, setMercado] = useState(null);
    // Armazena o cep. O padrão é de São Paulo
  const [cepFeito, setCepFeito] = useState("02225030");
    // Recebe o cep digitado
  const [cepCompletado, setCepCompletdo] = useState("02225030");


    // Função feita sempre que se digita
  const digitandoCep = (e) => {
    setCepCompletdo(e.target.value);
  };

    // Função usada quando se aperta em enviar o cep.
  const passarCep = () => {
    return (
      setCepFeito(cepCompletado)
    )
  };

    // Lê a Api de quais mercados estão próximos do cep digitado ou padrão
    // E envia o nome do mercado encontrado para o state Mercado

  useEffect(() => {
    axios.get(`${baseURLCep}`).then((response) => {
      setMercado(response.data[0].sellers[0].name);
    });
  }, [cepFeito]);

  const baseURLCep = `https://mercado.carrefour.com.br/api/checkout/pub/regions?country=BRA&postalCode=${cepFeito}`;


  
  // Lê a Api do mercado escolhido, voltando Api dos produtos disponíveis
  
  let componentMounted = true;
  useEffect(() => {
    const getProdutos = async () => {
      setLoading(true);
      const response = await fetch(
        `https://mercado.carrefour.com.br/api/catalog_system/pub/products/search?fq=${mercado}`
      );
      if (componentMounted) {

        // setData(await response.clone().json());
        setFilter(await response.json());
        setLoading(false);
      }
      return () => {
        componentMounted = false;
      };
    };
    getProdutos();
  }, []);

    // Quando a tela estiver carregando, será renderizado

  const Loading = () => {
    return (
      <>
        <div className="loadingTextoImagem">
          <span className="escritoCarregando">Carregando...</span>
          <div className="d-flex justify-content-center .flex-column">
            <div className="spinner-borderPersonalizado" role="status">
              <img className="imagemLogoCarregando" src={logoSemLetra} alt="" />
            </div>
          </div>

        </div>
      </>
    );
  };

    // Só será renderizado quando a página terminar de carregar

  const MostrarProdutos = () => {
    return (
      <>
        {filter.map((produto) => {

            // Troca o preço de . para ",", categorias de espaço para - (útil para a url se tirar o mercado)
            // E o troca o espaço do nome do produto para - para a Url poder usar seu nome
          let preco = `${produto.items[0].sellers[0].commertialOffer.Installments[11].Value}`;
          let precoComVirgula = preco.replace(".", ",");
          let link = `${produto.categories[1]}`;
          let linkComTraco = link.replace(/ /g, "-");
          let nomeDoProduto = `${produto.productName}`;
          let produtoComTraco = nomeDoProduto.replace(/ /g, "-");

            // Montagem padrão dos produtos
          return (
            <>
              <div className="col-md-2Personalizado">
                <div
                  className="cardPersonalizado"
                  styles="width: 18rem;"
                  key={produto.productId}
                  >
                  <NavLink to={`/${produto.productId}/${mercado}`}>
                    <div className="container-img">
                      <img
                        src={produto.items[0].images[0].imageUrl}
                        className="card-img-top"
                        alt="..."
                      />
                    </div>
                    </NavLink>
                  <div className="card-bodyPersonalizado">
                    <h5 className="card-titlePersonalizado">
                      {produto.productName}
                    </h5>
                  </div>
                  <div className="card-footerPersonalizado">
                    <p className="card-text precoPersonalizado">
                      R$ {precoComVirgula}
                    </p>
                  </div>
                  <div className="card-footerBotaoPersonalizado">
                    <NavLink
                      to={`/${produto.productId}/${mercado}`}
                      className="btn btn-outline-primary"
                    >
                      Ver Produto
                    </NavLink>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </>
    );
  };

  return (
    <div>

        {/* Campo de se digitar o cep escolhido */}

      <div className="procurarCep">
        <p>Digite seu cep</p>
        <div className="procurarCepInterativo">
          <input type="number" placeholder="Digite seu CEP" onChange={digitandoCep} value={cepCompletado} />
          <div className="botao-cep">
            <button
              className="btnPersonalizado btn-primary"
              onClick={() => passarCep()}
            >
              Buscar
            </button>
          <div className="mensagem-atualizacao">
            <p id="cep-atualizado">Cep Atualizado!</p>

          </div>
          </div>
        </div>
      </div>

      {/* Lógica: ta carregando? renderizado Loading. Não tá? Então renderiza os produtos */}

      <div className="rowPersonalizado justify-content-center">
        {loading ? <Loading /> : <MostrarProdutos />}
      </div>
    </div>
  );
};

export default Produtos;
