import React from "react";
import { CgSearch, CgUser } from "react-icons/cg";
import { BiCoin, BiBox, BiHeart, BiCart } from "react-icons/bi";
import { FaBars } from "react-icons/fa";
import {
  BsTruck,
  BsBasket2Fill,
  BsBoxSeam,
  BsCreditCard2Back,
} from "react-icons/bs";

import "./PopupDepart.css";
import "./Navegacao.css";
import "./NavegacaoTelaMedia.css";
import "./NavegacaoMobile.css"

import logo from "../assets/logo-carrefour-site.png";
import freteGratis from "../assets/frete-gratis.png";

import DetalhesDepart from "./minipaginas/DetalhesDepart";
import Televendas from "./minipaginas/Televendas";
import NossasLojas from "./minipaginas/NossasLojas";


const Navegacao = () => {

  return (
    <>
      <div className="header">
        <div className="promocao">
          <a
            href="https://mercado.carrefour.com.br/#crfimt=home|shop|bnf|header-topo_faz-carrefour-mercado_frete-gratis-acima-de-299_250522|1"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={freteGratis}
              alt="Promoção: Frete grátis nas comprar acima de R$299,99"
            />
          </a>
        </div>
        <div>
          <div className="servicosSuporte">
            <div className="shopping">
              <div className="abas">
                <a
                  href="https://www.carrefour.com.br/#crfimt=home|shop|seletor|shopping_4p_070122|1"
                  target="_blank"
                  rel="noreferrer"
                >
                  {<BsTruck />}
                  <p>SHOPPING</p>
                </a>
              </div>
            </div>
            <div className="mercado">
              <div className="abas">
                <a
                  href="https://mercado.carrefour.com.br/#crfimt=home|shop|seletor|mercado_4p_161020|2"
                  target="_blank"
                  rel="noreferrer"
                >
                  {<BsBasket2Fill />}
                  <p>MERCADO</p>
                </a>
              </div>
            </div>
            <div className="servicos">
              <div className="abas">
                <a
                  href="https://www.carrefour.com.br/alameda-servicos#crfimt=home|shop|seletor|servicos_4p_070122|3"
                  target="_blank"
                  rel="noreferrer"
                >
                  {<BsBoxSeam />}
                  <p>SERVIÇOS</p>
                </a>
              </div>
            </div>
            <div className="contatos">
              <div className="televendas">
                <p>Televendas</p>
                <div className="contatoTelevendas">
                  <Televendas />
                </div>
              </div>
              <div className="nossasLojas">
                <p>Nossas lojas</p>
                <div className="contatoTelevendas">
                  <NossasLojas />
                </div>
              </div>
              <a
                href="https://www.carrefour.com.br/atendimento"
                target="_blank"
                rel="noreferrer"
              >
                Atendimento
              </a>
              <a
                href="https://www.carrefour.com.br/click-e-retire?crfint=hm|header|click-e-retire|4|270520"
                target="_blank"
                rel="noreferrer"
              >
                Clique e Retire
              </a>
              <a
                href="https://www.carrefour.com.br/meucarrefour"
                target="_blank"
                rel="noreferrer"
              >
                Baixe o app
              </a>
            </div>
          </div>
        </div>



        {/* Pesquisa, conta e carrinho */}
        <div className="pesquisas">
          <div className="logo-carrefour">
          <button
          className="btn"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasWithBothOptions"
          aria-controls="offcanvasWithBothOptions"
          id="botaoMobile"
          >
            <p className="iconeTresBarras"><FaBars /></p>
        </button>


        <div
          className="offcanvas offcanvas-start"
          data-bs-scroll="true"
          tabindex="-1"
          id="offcanvasWithBothOptions"
          aria-labelledby="offcanvasWithBothOptionsLabel"
        >
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasWithBothOptionsLabel">
              Categorias
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body">
            <div className="sugestoes">
              <div className="selecoes-container">
                <div className="selecoes">
                  <div className="departamentoContainer">
                    <p id="todosDepartamentos">Todos os Departamentos</p>
                    <div className="opcoesDepartamentos">
                      <DetalhesDepart />
                    </div>
                  </div>

                  {/* <p onClick={() => console.log("clicou")} id='todosDepartamentos'>Todos os Departamentos</p> */}
                  <a
                    href="https://youtube.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Ofertas do Dia
                  </a>
                  <a
                    href="https://youtube.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Mundo Gamer
                  </a>
                  <a
                    href="https://youtube.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Smartphones
                  </a>
                  <a
                    href="https://youtube.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Pneus e Auto
                  </a>
                  <a
                    href="https://youtube.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Xiaomi
                  </a>
                  <a
                    href="https://youtube.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Notebooks
                  </a>
                  <a
                    href="https://youtube.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Eletrodomésticos
                  </a>
                  <a
                    href="https://youtube.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    TVs
                  </a>
                  <a
                    href="https://youtube.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Móveis
                  </a>
                  <a
                    href="https://youtube.com"
                    target="_blank"
                    rel="noreferrer"
                    id="cartao"
                  >
                    <BsCreditCard2Back id="cardIcon" />
                    Cartão Carrefour
                    {/* <p id='mensagemCartao'></p> */}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
            <a
              href="https://www.carrefour.com.br/"
              target="_blank"
              rel="noreferrer"
            >
              <img id="imagemLogoCarrefourComNome" src={logo} alt="logo" />
            </a>
          </div>
          <div className="divSearch">
            <input
              type="text"
              id="input-search"
              placeholder="Pesquisa por produtos ou marcas"
            />
            <button id="button-search">{<CgSearch />}</button>
          </div>
          <div className="varios-icones">
            <div className="user-container">
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                className="user-container-bemVindo"
              >
                <p className="icones">{<CgUser />}</p>
                <div className="textoIcones">
                  <p id="bemVindo">Bem-Vindo</p>
                  <p className="palavraNormal">Entre</p>
                </div>
              </a>
            </div>
            <div className="user-container">
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                className="user-container-meuCarrefour"
              >
                <p className="icones" id="moeda">
                  {<BiCoin />}
                </p>
                <div className="textoIcones">
                  <p className="palavraNormal">Meu</p>
                  <p className="palavraNormal">Carrefour</p>
                </div>
              </a>
            </div>
            <div className="user-container">
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                className="user-container-meusPedidos"
              >
                <p className="icones">{<BiBox />}</p>
                <div className="textoIcones">
                  <p className="palavraNormal">Meus</p>
                  <p className="palavraNormal">pedidos</p>
                </div>
              </a>
            </div>
            <div className="user-container">
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                className="user-container-minhasListas"
              >
                <p className="icones">{<BiHeart />}</p>
                <div className="textoIcones">
                  <p className="palavraNormal">Minhas</p>
                  <p className="palavraNormal">listas</p>
                </div>
              </a>
            </div>
            <div className="user-container">
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                className="user-container-carrinho"
              >
                <p className="icones">{<BiCart />}</p>
                <p id="numeroCarrinho">0</p>
              </a>
            </div>
          </div>
        </div>

        <div className="sugestoesDesktop">
          <div className="selecoes-container">
            <div className="selecoes">
              <div className="departamentoContainer">
                <p id="todosDepartamentos">Todos os Departamentos</p>
                <div className="opcoesDepartamentos">
                  <DetalhesDepart />
                </div>
              </div>

              {/* <p onClick={() => console.log("clicou")} id='todosDepartamentos'>Todos os Departamentos</p> */}
              <a href="https://youtube.com" target="_blank" rel="noreferrer">
                Ofertas do Dia
              </a>
              <a href="https://youtube.com" target="_blank" rel="noreferrer">
                Mundo Gamer
              </a>
              <a href="https://youtube.com" target="_blank" rel="noreferrer">
                Smartphones
              </a>
              <a href="https://youtube.com" target="_blank" rel="noreferrer">
                Pneus e Auto
              </a>
              <a href="https://youtube.com" target="_blank" rel="noreferrer">
                Xiaomi
              </a>
              <a href="https://youtube.com" target="_blank" rel="noreferrer">
                Notebooks
              </a>
              <a href="https://youtube.com" target="_blank" rel="noreferrer">
                Eletrodomésticos
              </a>
              <a href="https://youtube.com" target="_blank" rel="noreferrer">
                TVs
              </a>
              <a href="https://youtube.com" target="_blank" rel="noreferrer">
                Móveis
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                id="cartao"
              >
                <BsCreditCard2Back id="cardIcon" />
                Cartão Carrefour
                {/* <p id='mensagemCartao'></p> */}
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navegacao;
