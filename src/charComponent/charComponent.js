import React from 'react';

class charComponent extends React.Component{
    
    render(){
        const style = {
            display : 'inline-block',
            padding : '16px',
            margin : '16px',
            border : '1px solid #eeeeee',
            textAlign : 'center'

        }
        return <div style = {style} onClick = {this.props.clicked}>
            {this.props.charecter}
        </div>
        }
}
export default charComponent;