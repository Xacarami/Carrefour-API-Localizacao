import React, { useState, useEffect } from "react";
import axios from "axios";
import logoSemLetra from "../assets/Carrefour-c-logo.png";

import "./Navegacao.css";
import "./Produtos.css";
import { NavLink } from "react-router-dom";

const Produtos = () => {
  const [data, setData] = useState([]);
  const [state, setState] = useState(data);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);
  const [mercado, setMercado] = useState(null);
  let componentMounted = true;

  useEffect(() => {
    const getProdutos = async () => {
      setLoading(true);
      const response = await fetch(
        `https://mercado.carrefour.com.br/api/catalog_system/pub/products/search?fq=${mercado}`
      );
      if (componentMounted) {
        setData(await response.clone().json());
        setFilter(await response.json());
        setLoading(false);
        // console.log(response);
      }
      return () => {
        componentMounted = false;
        // console.log(filter);
      };
    };
    getProdutos();
  }, []);

  const [cepFeito, setCepFeito] = useState("02225030");
  const [cepCompletado, setCepCompletdo] = useState("");

  const digitandoCep = (e) => {
    setCepCompletdo(e.target.value);
  };
  const passarCep = () => {
    return setCepFeito(cepCompletado);
  };

  useEffect(() => {
    axios.get(`${baseURLCep}`).then((response) => {
      setMercado(response.data[0].sellers[1].name);
    });
  }, [cepFeito]);

  const baseURLCep = `https://mercado.carrefour.com.br/api/checkout/pub/regions?country=BRA&postalCode=${cepFeito}`;

  // const baseURLProduct = `https://mercado.carrefour.com.br/api/catalog_system/pub/products/search?fq=${post}`;

  // console.log(produto)

  // useEffect(() => {
  //   axios.get(`${baseURLProduct}`).then((response) => {
  //     let juntin = [];
  //     let i = 0;
  //     do {
  //       juntin.push(response.data[i]);
  //       setProduto(juntin);
  //       i++;
  //     } while (i < 10);
  //   });
  // });

  const Loading = () => {
    return (
      <>
        <span className="escritoCarregando">Carregando...</span>
        <div className="d-flex justify-content-center .flex-column">
          <div className="spinner-borderPersonalizado" role="status">
            <img className="imagemLogoCarregando" src={logoSemLetra} alt="" />
          </div>
        </div>
      </>
    );
  };

  const MostrarProdutos = () => {
    return (
      <>
        {filter.map((produto) => {
          let preco = `${produto.items[0].sellers[0].commertialOffer.Installments[11].Value}`;
          let precoComVirgula = preco.replace(".", ",");
          let link = `${produto.categories[1]}`;
          let linkComTraco = link.replace(/ /g, "-");
          let nomeDoProduto = `${produto.productName}`;
          let produtoComTraco = nomeDoProduto.replace(/ /g, "-");

          return (
            <>
              <div className="col-md-2Personalizado">
                  <div
                    className="cardPersonalizado"
                    styles="width: 18rem;"
                    key={produto.productId}
                    >
                    <NavLink to={`/${produto.productId}/${mercado}`}>
                    <img
                      src={produto.items[0].images[0].imageUrl}
                      className="card-img-top"
                      alt="..."
                    />
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
      <div className="procurarCep">
        <p>Digite seu cep</p>
        <div className="procurarCepInterativo">
          <input type="number" placeholder="Digite seu CEP" onChange={digitandoCep} value={cepCompletado} />
          <button
            className="btnPersonalizado btn-primary"
            onClick={() => passarCep()}
          >
            Buscar
          </button>
        </div>
      </div>

      <div className="rowPersonalizado justify-content-center">
        {loading ? <Loading /> : <MostrarProdutos />}
      </div>
    </div>
  );
};

export default Produtos;
