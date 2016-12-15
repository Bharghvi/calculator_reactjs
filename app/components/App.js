var React = require('react');
var ReactDOM = require('react-dom');
var s = [];

var KeyFunc = React.createClass({

	getInitialState: function(){
		return {active: false};
	},

	click: function(){

	 var active = !this.state.active;

	 this.setState({active: active});

	 this.props.result(this.props.value);
	},

	render: function(){

		return <p className= {this.state.active ? 'active' : ''} onClick = {this.click}>
		{this.props.value}</p>;
	}
});

var App = React.createClass({

	getInitialState: function(){
		return {total: ['0']};
	},

	peep: function(stack){
		var x = stack.pop();
		stack.push(x);
		return x;
	},


	result: function(value){
		

		if((value === '+') || (value === '/') || (value === '*') || (value === '-') || (value === '0') || (value === '1') ||(value === '2') ||(value === '3') ||(value === '4') ||(value === '5') ||(value === '6') ||(value === '7') ||(value === '8') ||(value === '9'))
		{	
			s.push(value);
			console.log(s);
			this.setState({total: s});
		}
		else if((value === '='))
		{
			var z = [];
			var y = s.join("");
			z = eval(y).toFixed(4);
			this.setState({total: z});
			s=[];
		}
		else if((value === 'AC')){
			this.setState({total: ['0']});
			s= [];
		}
		else{
			var bs = s.pop();
			this.setState({total: s});
		};

	},

	render: function(){

		var zero = this.props.arr.map(b => <KeyFunc value={b} result={this.result} />);

		return(
			<div>
				<h1>CALCULATOR</h1>

				<p id='answer'>{this.state.total}</p>
				<div>
					<span><p className='op'>{zero[7]}</p></span>
					<span><p className='op'>{zero[8]}</p></span>
					<span><p className='op'>{zero[9]}</p></span>
					<span><p className='op'>{zero[10]}</p></span>
				</div>
				<div>
					<span><p className='op'>{zero[4]}</p></span>
					<span><p className='op'>{zero[5]}</p></span>
					<span><p className='op'>{zero[6]}</p></span>
					<span><p className='op'>{zero[11]}</p></span>
				</div>
				<div>
					<span><p className='op'>{zero[1]}</p></span>
					<span><p className='op'>{zero[2]}</p></span>
					<span><p className='op'>{zero[3]}</p></span>
					<span><p className='op'>{zero[12]}</p></span>
				</div>
				<div>
					<span><p className='op'>{zero[15]}</p></span>
					<span><p className='op'>{zero[0]}</p></span>
					<span><p className='op'>{zero[16]}</p></span>
					<span><p className='op'>{zero[13]}</p></span>
				</div>
				<div><p  id = 'ans2'>{zero[14]}</p></div>
			</div>
		)
	}
});

module.exports = App;