import React, { Component } from 'react';

class MenuMinuman extends Component {
    render(){
        return (
           <div style={{ border: '1px solid black', width: 300, margin: 'auto' }}>
            <p>Nama Menu: {this.props.namaMenu}</p>
            <p>Harga: {this.props.hargaMenu}</p>
          </div> 
        )
    }
}

export default MenuMinuman;