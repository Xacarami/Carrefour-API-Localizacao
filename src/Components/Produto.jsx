import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { BsFillCartCheckFill } from "react-icons/bs";
import logoSemLetra from "../assets/Carrefour-c-logo.png";
import "./Produto.css"

function Produto() {
  const { id } = useParams();
  const { mercado } = useParams();
  const [escolhido, setEscolhido] = useState([]);
  const [loading, setLoading] = useState(false);

  const [data, setData] = useState([]);
  const [state, setState] = useState(data);
  const [filter, setFilter] = useState(data);
  // const [loading, setLoading] = useState(false);
  const [post, setPost] = useState(null);
  let componentMounted = true;

  useEffect(() => {
    const getProduto = async () => {
      setLoading(true);
      const response = await fetch(
        `https://mercado.carrefour.com.br/api/catalog_system/pub/products/search?fq=${mercado}`
      );
      // setProduto(await response.json());
      setFilter(await response.json());
      setLoading(false);
    };
    getProduto();
  }, []);

  // const [cepFeito, setCepFeito] = useState("02225030");
  // const [cepCompletado, setCepCompletdo] = useState("");

  // useEffect(() => {
  //   axios.get(`${baseURLCep}`).then((response) => {
  //     setPost(response.data[0].sellers[1].name);
  //   });
  // }, [cepFeito]);

  // const baseURLCep = `https://mercado.carrefour.com.br/api/checkout/pub/regions?country=BRA&postalCode=${cepFeito}`;

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

  // console.log(id)

  const MostrarProduto = () => {
    return (
      <>
        {filter.map((produto) => {
          if (produto.productId == id) {
            console.log("Opa");
            let preco = `${produto.items[0].sellers[0].commertialOffer.Installments[11].Value}`;
            let precoComVirgula = preco.replace(".", ",");
            return (
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
            console.log("deu nao");
          }
        })}
      </>
    );
  };

  return (
    <>
      <div>
        <div className="container">
          <div className="row">
            {loading ? <Loading /> : <MostrarProduto />}
          </div>
        </div>
      </div>
    </>
  );
}

export default Produto;
