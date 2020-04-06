import React from 'react';
import unicorn from './unicorn.jpg';

class Image extends React.Component {
    render() {
        return (
            <div className="product-image">
              <img src={unicorn} className="image" alt="logo" width="200"/>
            </div>
          );
    }   
}

export default Image;