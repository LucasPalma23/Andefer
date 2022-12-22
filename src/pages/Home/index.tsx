import imgLogoDefault from '../../assets/images/logo-default.svg'
import imgLogoBlue from '../../assets/images/logo-blue.svg'
import iconCartao from '../../assets/icons/icon-cartao.svg'
import iconCelular from '../../assets/icons/icon-celular.svg'
import iconLoja from '../../assets/icons/icon-loja.svg'
import iconDesconto from '../../assets/icons/icon-desconto.svg'
import imgVigas from '../../assets/images/vigas.svg'
import imgChapas from '../../assets/images/chapas.svg'
import imgBarraChata from '../../assets/images/barra-chata.svg'
import imgMenSection from '../../assets/images/men-section.svg'
import imgMap from '../../assets/images/map.svg'
import imgWpp from '../../assets/images/wpp.svg'
import imgInsta from '../../assets/images/insta.svg'
import imgFace from '../../assets/images/face.svg'

import Produto from '../../components/Produto'

import './styles.scss'

export default function Home() {
  return (
    <>
      <header>
        <nav>
      <div className="container-image">
        <img src={imgLogoDefault} alt="Logo da empresa" className='img-logo-header' />
      </div>
          <ul className='nav-list'>
            <div>
              <li>Início</li>
            </div>
            <div>
              <li>Produtos</li>
            </div>
            <div>
              <li>Sobre</li>
            </div>
            <div>
              <li>Contato</li>
            </div>
          </ul>
        </nav>
      </header>
      <div className="text-title">
        <img src={imgLogoBlue} alt="Logo da empresa" />
        <h1>FUTURO MILIONÁRIOJI0</h1>
      </div>
      <section className="section-main">
        <div className="text-section-main">
          <h2>
            ESTÁ A PROCURA <br />
            DE MATERIAIS DE <br />
            QUALIDADE POR <br />
            UM ÓTIMO <br />
            PREÇO?
          </h2>
          <p>
            Aqui você encontra os melhores <br />
            produtos com os melhores <br />
            preços.
          </p>
        </div>
      </section>
      <div className="section-client">
        <div className="section-icons">
          <div className="section-cartao">
            <img src={iconCartao} alt="" />
            <p>
              <span>Parcele em Até 10x</span>
              <br />
              Sem juros no cartão
            </p>
          </div>
          <div className="section-celular">
            <img src={iconCelular} alt="" />
            <p>
              <span>Estamos no WhatsApp</span>
              <br />
              Fale com a nossa equipe
            </p>
          </div>
          <div className="section-loja">
            <img src={iconLoja} alt="" />
            <p>
              <span>Retire Grátis</span>
              <br />
              Direto na nossa loja
            </p>
          </div>
          <div className="section-desconto">
            <img src={iconDesconto} alt="" />
            <p>
              <span>Descontos</span>
              <br />
              Para pagamentos à vista
            </p>
          </div>
        </div>
        <h1>SUA SATISFAÇÃO É NOSSA PRIORIDADE</h1>
      </div>
      <div className="divisao"></div>
      <h1 className='title-produtos'>DIVERSOS PRODUTOS POR UM ÓTIMO PREÇO</h1>
      <div className="container-products">
        <div className="produtos">
          <div className="product">
            <Produto
              name='Perfil Viga I.W.U-10,16cm X 6,76CM'
              image={<img src={imgVigas} />}
              valor='R$ 589,99'
              total='R$ 619,99'
              desconto='R$ 61,99'
            />
          </div>
          <div className="product">
            <Produto
              name='Perfil Viga I.W.U-10,16cm X 6,76CM'
              image={<img src={imgVigas} />}
              valor='R$ 589,99'
              total='R$ 619,99'
              desconto='R$ 61,99'
            />
          </div>
          <div className="product">
            <Produto
              name='Perfil Viga I.W.U-10,16cm X 6,76CM'
              image={<img src={imgVigas} />}
              valor='R$ 589,99'
              total='R$ 619,99'
              desconto='R$ 61,99'
            />
          </div>
          <div className="product">
            <Produto
              name='Perfil Viga I.W.U-10,16cm X 6,76CM'
              image={<img src={imgVigas} />}
              valor='R$ 589,99'
              total='R$ 619,99'
              desconto='R$ 61,99'
            />
          </div>
          <div className="product">
            <Produto
              name='Perfil Viga I.W.U-10,16cm X 6,76CM'
              image={<img src={imgVigas} />}
              valor='R$ 589,99'
              total='R$ 619,99'
              desconto='R$ 61,99'
            />
          </div>
          <div className="product">
            <Produto
              name='Perfil Viga I.W.U-10,16cm X 6,76CM'
              image={<img src={imgVigas} />}
              valor='R$ 589,99'
              total='R$ 619,99'
              desconto='R$ 61,99'
            />
          </div>
        </div>
      </div>
      <div className="divisao-main"></div>
      <section className="section-secundary">
        <div className="text-section-secundary">
          <div className="image-section-secundary"><img src={imgMenSection} alt="" /></div>
          <h1>
          ANDEFER, <br />
          UMA <br />
          EMPRESA <br />
          DISPOSTA A <br />
          CONSTRUIR <br />
          OS SEUS <br />
          SONHOS. <br />
          </h1>
        </div>
      </section>
      <div className="divisao-bottom">
        <img className='img-logo' src={imgLogoBlue} alt="" />
        <h2>
        ANDEFER <br />
        FERRO & AÇO
        </h2>
        <div className="line1"></div>
        <img src={imgMap} alt="" className="img-map" />
        <p>
        Rua 1, N° 36, Jardim Silvestre <br />
        Suzano/SP
        </p>
        <div className="line2"></div>
        <div className="redes-sociais">
          <img src={imgWpp} alt="" className='img-wpp'/>
          <img src={imgInsta} alt="" className='img-insta'/>
          <img src={imgFace} alt="" className='img-face'/>
        </div>
      </div>
    </>
  )
}
