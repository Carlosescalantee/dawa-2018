import React, {Component} from 'react';
import classes from './Calculadora.css'

export default class Calculadora extends Component{

	state = {
		numero1: "",
		numero2: "",
		resultado: ""
	}
	onChangeNumber = (num) => {
		if (num.target.id == "number1"){
			this.setState({
				numero1: parseFloat(num.target.value)
			});
		} else if (num.target.id == "number2"){
			this.setState({
				numero2: parseFloat(num.target.value)
			});
		}		
	}

	//OPERACIONES
	suma = () => {
		this.setState({
			res: this.state.numero1 + this.state.numero2
		});
	}
	resta = () => {
		this.setState({
			res: this.state.numero1 - this.state.numero2
		});
	}
	multiplicacion = () => {
		this.setState({
			res: this.state.numero1 * this.state.numero2
		});
	}
	division = () => {		
			this.setState({
				res: this.state.numero1 / this.state.numero2
			});	
	}
	porcentaje = () => {
		this.setState({
			res: this.state.numero1/100 
		});
	}

	render(){
		return (
			<div className={classes.Calculadora}>
			
				<h2>Calculadora con React</h2>
				<h4>Ingrese un Numero:</h4>
				<input type="text"  id="number1" onChange={this.onChangeNumber} placeholder="Ingrese un Numero"/>
				<h4>Ingrese un Numero:</h4>
				<input type="text" id="number2" onChange={this.onChangeNumber} placeholder="Ingrese un Numero" />
				<br />
				<h3>Selecciona una Operacion</h3>
				

				<button onClick={this.suma}><b>+</b></button>
				<button onClick={this.resta}><b>-</b></button>
				<button onClick={this.multiplicacion}><b>x</b></button>
				<button onClick={this.division}><b>/</b></button>
				<button onClick={this.porcentaje}><b>%</b></button>
				
				<h3> Resultado: {this.state.res} </h3>

				
			</div>
		)
	}
}