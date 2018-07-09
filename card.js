import React from 'react';
import ReactDOM from 'react-dom';

class App extends React Component {
    constructor(props){
        super(props);
        this.state = {
            heading:"here we have heading",
            users:[]
        }
    }

    componentWillMount(){
        console.log("componentWillMount")
    }
    componentDidMount(){
        getUSers(6, users){
            this.setState{
                users;
            }
        }
    }
    render(){
        return (
            <div>
                <div class="row">
                <div class="col-lg-12">
                <div class="card-title">

                </div>

                </div>
                </div>
        )
    }
}

export default App;