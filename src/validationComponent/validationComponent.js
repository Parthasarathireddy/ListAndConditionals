import React from 'react';

class ValidationComponent extends React.Component{
    render(){
        let validationMsg = null;
        if (this.props.userInputlength>5) {
            validationMsg = (<p>Text long enoguh</p>)
        }else{
            console.log(this.props.userInputlength);
            validationMsg = (<p>Text too short</p>)
        }
        return (
            <div>
                {validationMsg}
            </div>
        )
    }
}
export default ValidationComponent;