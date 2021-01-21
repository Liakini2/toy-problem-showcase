

import React, {Component} from 'react';

class Palindrome extends Component{
    constructor(){
        super()
        this.state = {
            userInput: '',
            palindrome: '',
        }
    }

    UpdateUserInfo = (value) =>{
        this.setState ({
            userInput: value
        })
    }

    CheckForPalindrome = (userInput) =>{
        let forwards = userInput
        let reverse = userInput
        reverse = reverse.split('')
        reverse = reverse.reverse()
        reverse = reverse.join('')
        if (forwards === reverse){
            this.setState ({palindrome: 'true'})
        } else {
            this.setState ({palindrome: 'false'})
        }
    }

    render(){
        return(
            <div className='puzzleBox filterStringPB'>
                <h4>"Palindrome"</h4>
                <input className='inputLine'
                onChange={(e)=>this.UpdateUserInfo(e.target.value)}/>
                <button className='confirmationButton'
                onClick={()=>this.CheckForPalindrome(this.state.userInput)}>
                    Palindrome
                </button>
                <span className='resultsBox'>Palindrome: {this.state.palindrome}</span>
            </div>
        )
    }
}

export default Palindrome;