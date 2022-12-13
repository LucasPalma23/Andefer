import './styles.scss'

type ProductProps = {
  name: string;
  image: JSX.Element;
  valor: string;
  total: string;
  desconto: string
}

export default function Produto(props:ProductProps) {
  return (
    <div className="container">
      <div className="container-product">
        <div className="image">
          {props.image}
        </div>
        <h3 className='product-name'>{props.name}</h3>
        <div className="section-value">
          <div className="valor">
            <h2>{props.valor}</h2>
            <p>
              à vista no boleto <br />
              <span>5% de desconto</span>
            </p>
          </div>
          <p className='obs'>
          ou <span>{props.total}</span> até <span>10x</span> de <span>{props.desconto}</span> sem juros
          </p>
        </div>
      </div>
    </div>
  )
}