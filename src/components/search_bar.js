import React,{Component} from 'react';

//Class Based Component
//Three things mandatory 
//1. extends React.Component
//2. render()
//3. return JSX
//4. export when necessary
class SearchBar extends Component{
    constructor(props){
        super(props);
        this.state = { term : '' };
    }
    render(){
        //same way how we write event for any tag
        //whenever you write JS in JSX, use curly braces
        return (
            <div className="search-bar">
                <input 
                    value={this.state.term} onChange={event=>{this.onInputChange(event.target.value)}} />
                <br/> 
                You searched for : {this.state.term}
            </div>
        )
    }

    //Click handler, ES6 way to write funtion inside a class
    onInputChange(term){
        this.setState({term})
        this.props.onSearchTermChange({term})
        console.log(event.target.value);
    }

}



export default SearchBar;