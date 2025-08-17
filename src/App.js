import './App.css';
import axios from 'axios';
import React from 'react';

class App extends React.Component {
  state = { quote: ''};
    componentDidMount() {
        this.getAdvice();
    }

    getAdvice = () => {
        const url = ` https://hindi-quotes.vercel.app/random`;
        axios.get(url)
            .then((response) => {
                const { quote } = response.data;
                console.log('Successful API request');
                this.setState({quote});
            })
            .catch((error)=>{
                alert("Error retrieving data");
            });
    };
  render(){
    return (
      <div className="App">
        <div className='card'>
          <h1 className='heading'>{this.state.quote}</h1>
          <button onClick={this.getAdvice} className='btn'>Get Advice</button><span>@Srikant</span>
        </div>
      </div>
    );
  }
}

export default App;
