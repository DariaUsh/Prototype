import React from 'react';

class Button extends React.Component {
    onClick = () => {
        console.log('click');
    }


    render() {
        return (
            <div className="product-button">
              <button onClick={this.onClick}>Add to cart</button>
            </div>
          );
    }   
}

export default Button;