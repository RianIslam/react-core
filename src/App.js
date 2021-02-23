import "./App.css";

function App() {
  const products =[
    {name:'photoshop', price:'$90.99'},
    {name:'Illustrator',price:'$55.55'},
    {name:'PDF Reader',price: '$56.99'}
  ]
  const nayok = ["ragim","karim"]
  const productNames = products.map(product => product)
  console.log(productNames)

  const NayksName = nayok.map(nayok => nayok);
  console.log(NayksName)
  return (
    <div className="App">
    <Product product={products[0]}></Product>
    <Product product={products[1]}></Product>
      <Person  job="Software Engineer"></Person>
      <Person name="Kabir Ahammed" job="Software"></Person>
    </div>
  );
}
function Product(props){
  const productStyle = {
    border : '1px solid gray',
    backgroundColor:'lightgray',
    borderRadius:'5px',
    height: '200px',
    weight: '200px',
    float : 'left'

  }
  return(
    <div style={productStyle}>
      <h3>{props.product.name}</h3>
      <h5>{props.product.price}</h5>
      <button>Buy Now</button>
    </div>
  )
}

function Person(props) {
  const someColor ={
    border: '2px solid blue',
    margin: '5px',
    width : '300px'
  }
  return (
    <div style={someColor}>
      <h1>Name:{props.name}</h1>
      <h4>Passion: {props.job}</h4>
    </div>
  );
}

export default App;
