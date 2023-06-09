import React, { Component } from "react";
import "./index.css";
import Swal from "sweetalert2";
class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Error:", error);
    console.error("Error Info:", errorInfo);
  }

  render() {
    if (this.state.hasError) {
      function connectMetamask (){
        Swal.fire({
          icon: 'error',
          title: 'Metamask Not Installed!! ',
      })
      }
      return (
        <div className="App">
               <header className="nevbar">
                    <span></span>
                    <h1>SUMOBOT SWAP</h1>
                    <button onClick={connectMetamask}>
                         Connect
                    </button>
               </header>

               <div className="container">

                         <div className="value">
                              <h2> Raise ETH Amount : 0.0 ETH </h2>
                         </div>
                         <div className="box">
                              <h2> SUMOBOT (ERC20) </h2>
                              <div className="minibox1">
                                   <button>ETH</button>
                                   <input
                                        type="number"
                                        
                                        className="form-input"
                                        placeholder="0"
                                        
                                   />
                              </div>
                              <div className="minibox1">
                                   <button>SUMO</button>
                                   <input
                                        type="number"
                                        
                                        className="form-input"
                                        placeholder="0"
                                        
                                   />
                              </div>
                              <div className="minibox3">
                                   <h4>Your Balances</h4>
                                   <br />
                                   <div className="para">
                                        <p>0.0 ETH</p>
                                        <p>0.0 ERC 20</p>
                                   </div>
                              </div>
                              <div className="minibox4">
                                   
                                   <button >Swap</button>
                                   
                              </div>
                         </div>
                    
               </div>

          
          </div>
      ) // Replace with your custom error message or component
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
