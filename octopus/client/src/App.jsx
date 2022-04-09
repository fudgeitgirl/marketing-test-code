import React, {Component} from 'react';
import ProductImage from './components/productImage';
import Header from './components/header';
import ProductTitle from './components/productTitle';
import ProductDesc from './components/productDescription';
import ProductSpecs from './components/productSpecs';
import QuantityCounter from './components/quantityCounter';
import Footer from './components/footer';

class App extends Component{
	constructor(props){
		super(props);
		this.state = {
	      error: null,
	      isLoaded: false,
	      data: {}
	    };
	}
	componentDidMount() {
		//fetch product info from graphql and store in json object
	    fetch("http://127.0.0.1:8000/graphql", {
	    	method: 'POST',
	    	headers: {
	    		'Content-Type': 'application/json'
	    	},
	    	body: JSON.stringify({
	    		query: `query getProductById {
						  product(productId: 1) {
						    id
						    name
						    power
						    description
						    price
						    quantity
						    brand
						    weight
						    height
						    width
						    length
						    modelCode
						    colour
						    imgUrl
						  }
						}`
	    	})
	    })
	      .then(res => res.json())
	      .then(
	        (result) => {
	        	console.log(result.data)
	          this.setState({	          	
	            isLoaded: true,
	            data: result.data.product
	          });
	        },
	        (error) => {
	          this.setState({
	            isLoaded: true,
	            error
	          });
	        }
	      )
	   }
	
	render() {
		const { data } = this.state;
	    return (
	    	<div>
	    		<Header />
	    		<div className="container-fluid">
	    			<div className="row mb-cons">
	    				<div className="col-12 col-md-6 productImage">
			       			<ProductImage imgUrl={data.imgUrl} name={data.name} />
			       		</div>
			       		<div className="col-12 col-md-6 infoContainer">
				       		<ProductTitle name={data.name} power={data.power} quantity={data.quantity} />
				       		<QuantityCounter product={data}/>
				       	</div>
			       	</div>
			       <ProductDesc description={data.description} />
			       <ProductSpecs brand={data.brand} weight={data.weight} height={data.height} length={data.length} width={data.width} modelCode={data.modelCode} colour={data.colour} />
			       
			    </div>
			    <Footer />
		    </div>

	    )
	};
}

export default App;
