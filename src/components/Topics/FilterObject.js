

import React, {Component} from 'react';

class FilterObjects extends Component{
    constructor(){
        super()
        this.state = {
            unFilteredArray : [
                {
                    toy: 'Barbie',
                    color: 'Pink',
                    career: "doctor",
                    owned: 5,
                },
                {
                    toy: 'Hot Wheels',
                    color: 'Red',
                    owned: 4,
                    age: 3,
                }, 
                {
                    toy: 'Legos',
                    number: 350,
                }
            ],
            userInput: '',
            filteredArray: [],
        }
    }

    UpdateUserInput = (value) =>{
        this.setState({
            userInput: value
        })
    }

    UpdateFilteredArray = (prop) =>{
        let arr = this.state.unFilteredArray
        let filteredArray = []

        for(let i=0; i < arr.length; i++){
            if(arr[i].hasOwnProperty(prop)){
                filteredArray.push(arr[i])
            } 
        }
        this.setState({filteredArray: filteredArray})
    }

    render(){
        return(
            <div className='puzzleBox filterObjectPB'>
                <h4>"Filter Object"</h4>
                <span className='puzzleText'>Unfiltered Array: {JSON.stringify(this.state.unFilteredArray, null, 10)}</span>
                <input className='inputLine'
                onChange={ (e) => this.UpdateUserInput(e.target.value)}/>
                <button className='confirmationButton'
                onClick={()=>this.UpdateFilteredArray(this.state.userInput)}
                >Filter</button>
                <span className='resultsBox filterObjectRB'>FilteredArray: {JSON.stringify(this.state.filteredArray, null, 10)}</span>
            </div>
        )
    }
}

export default FilterObjects;