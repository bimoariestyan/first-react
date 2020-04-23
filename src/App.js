import React, { Component } from 'react';
import './App.css';
import MenuMakanan from './component/MenuMakanan/MenuMakanan';
import MenuMinuman from './component/MenuMinuman/MenuMinuman';

class App extends Component{
  constructor(){
    super();
    this.state = {
      namaResto: 'MasBims',
      namaPembeli: '',
      keterangan: '',
      jenisPembayaran: '',
      menuMakanan: [
        {nama: 'Ayam Bakar', harga: 15000, stock: 10},
         {nama: 'Ayam Geprek', harga: 15000, stock: 0}
      ],
      menuMinuman: [
        {id:1, nama: "Jus Melon", harga: "10000"},
        {id:2, nama: "Jus Semangka", harga: "10000"},
        {id:3, nama: "Jus Lemon", harga: "10000"},
        {id:4, nama: "Jus Mangga", harga: "10000"},
        {id:5, nama: "Jus Alpukat", harga: "10000"},
      ]
    }
  }

  handleGantiNama = (nama) => {
  this.setState({namaResto: nama})
  }

  handleChange = (event) => {
    var name = event.target.name
    var value = event.target.value
    this.setState({[name]: value})
  }

    render() {
      return(
        <div className="App">
        <h1>Cafe {this.state.namaResto} </h1>
        <button className="btn btn-primary" onClick={() => this.handleGantiNama('MasBims')}>Ganti Nama Resto</button>
        <div className="row" style={{marginTop: '10px'}}>
          <div className="col-md-4 offset-md-4">
            <form>
              <div className="form-group">
                <label>Nama Pembeli</label>
                <input className="form-control" name="namaPembeli" onChange={this.handleChange} value={this.state.namaPembeli}/>
                <small>Nama Pembeli: {this.state.namaPembeli}</small>
                </div>
                <div className="form-group">
                  <label>Keterangan</label>
                  <textarea className="form-control" name="keterangan" onChange={this.handleChange} value={this.state.keterangan}></textarea>
                  <small>Keterangan: {this.state.keterangan}</small>
                </div>
                <div className="form-group">
                  <label>Jenis Pembayaran</label>
                  <select className="form-control" name="jenisPembayaran" value={this.state.value} onChange={this.state.handleChange} >
                    <option value="cash">Cash</option>
                    <option value="kartuKredit">Kartu Kredit</option>
                    <option value="voucher">Voucher</option>
                  </select>
      <small>Jenis Pembayaran: {this.state.jenisPembayaran}</small>
                </div>
            </form>
          </div>
        </div>

        <h2>Menu Makanan</h2>
       <MenuMakanan 
       namaMenu={this.state.menuMakanan[0].nama}
       hargaMenu={this.state.menuMakanan[0].harga}
       stock={this.state.menuMakanan[0].stock} />

       <MenuMakanan
       namaMenu={this.state.menuMakanan[1].nama}
       hargaMenu={this.state.menuMakanan[1].harga}
       stock={this.state.menuMakanan[1].stock} />
          <h2>Menu Minuman</h2>
          {this.state.menuMinuman.map(menu =>
            <MenuMinuman key={menu.id} namaMenu={menu.nama} hargaMenu={menu.harga}/> 
            )}
        </div>
    );
  }
}

export default App;
