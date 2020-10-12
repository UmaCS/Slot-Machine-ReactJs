import React from 'react';

class Machine extends React.Component{
    render(){
        const props = this.props;

        return <div>
            {props.s1}{props.s2}{props.s3}
            <p>{props.s1 === props.s2 && props.s2 === props.s3 ? "YOU WIN!" : "You Lose!"}</p>
        </div>
    }
}
export default Machine;