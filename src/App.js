import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NavBarMenu from './components/navMenu';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Pure Triumph</h1>
        </header>
        <NavBarMenu />
        <div className="container">
        <h1>
          Welcome to Triumph!
        </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed semper porta dictum. Fusce gravida faucibus quam, quis convallis orci rhoncus quis. Praesent sodales risus neque, ut suscipit sapien bibendum at. Aliquam erat volutpat. Pellentesque sit amet elementum est. Ut id ligula nec turpis ultrices varius eu non risus. Nulla metus lacus, ultrices in tortor ac, dignissim fringilla lacus. Sed gravida enim dolor. Donec nec blandit justo, commodo suscipit est. Cras et diam id ligula hendrerit pellentesque quis a felis. Sed tempus lectus tortor, vehicula accumsan nulla sagittis ut. Duis et nisi nisi.
        </p>
        <p>
          Integer commodo vitae orci eu aliquam. Maecenas eleifend metus arcu, nec pulvinar metus condimentum sit amet. Nunc rhoncus purus nec neque feugiat facilisis. Etiam efficitur tincidunt purus, ut molestie velit laoreet nec. Maecenas nec commodo mauris. Praesent porttitor porttitor diam nec sodales. Suspendisse potenti. Phasellus porttitor tellus ut ultricies consectetur. Aenean non tellus venenatis, hendrerit arcu ac, euismod mi. Morbi porta sodales magna ac semper. Sed vel ligula nunc. Integer maximus at orci non vestibulum. Aliquam a bibendum risus, eu tempor nisl.
        </p>
        <p>
          Nullam venenatis consequat dolor ut malesuada. Donec id est a diam imperdiet hendrerit. Proin cursus arcu ante, non egestas metus volutpat sit amet. Nunc blandit, mi in commodo mattis, diam lorem tempor ipsum, eu cursus quam justo condimentum ante. Aenean sit amet urna sem. Donec dui nulla, condimentum ac neque in, porttitor elementum sem. Nunc egestas scelerisque libero, quis fringilla metus blandit vitae. Ut risus metus, fringilla sit amet felis at, rhoncus eleifend eros. Nulla facilisi. Aliquam erat volutpat. Fusce facilisis ultricies vehicula. Aliquam et eros diam. Proin quam dui, auctor consequat ornare eu, luctus gravida sem. Suspendisse gravida augue quis lobortis bibendum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Quisque ultricies non erat sit amet blandit.
        </p>
        <p>
          Phasellus sit amet bibendum nibh. Quisque fringilla commodo fringilla. Phasellus ac arcu sed nunc lacinia mollis. Etiam tortor enim, imperdiet non risus ut, condimentum dignissim eros. Praesent massa ex, vehicula at tellus eget, malesuada faucibus eros. Nam et ultricies velit. Integer eu faucibus enim. Etiam turpis orci, vulputate eget odio non, pretium commodo sem. Praesent gravida ac quam placerat consectetur. Suspendisse fringilla massa eu mauris rhoncus, vel commodo tellus fermentum. Proin ullamcorper eget diam vel consequat.
        </p>
        <p>
          Vestibulum porttitor laoreet diam vitae feugiat. Pellentesque elementum rhoncus nunc, id iaculis sapien cursus id. Vivamus blandit erat ut ante consectetur, id aliquet nibh malesuada. Duis aliquet purus ac dignissim laoreet. Donec sit amet tincidunt quam. Nam nisi erat, laoreet a porta ultricies, finibus vel ipsum. Etiam vitae pellentesque neque, ac vehicula tortor. Phasellus eget enim in augue pellentesque tempor a eget tellus. Vestibulum orci nisl, sollicitudin vel lacinia at, elementum vel risus. Nunc fringilla sodales elit vel vestibulum. Sed semper ex vel justo fermentum, ac consectetur metus condimentum. In mi erat, ultricies ac leo sit amet, sollicitudin egestas nulla.
        </p>
        </div>
        <div className="footer">
          <p>Footer</p>
        </div>
      </div>
    );
  }
}

export default App;
