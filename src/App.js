import logo from './logo.svg';
import './App.css';

import { Parallax } from 'react-parallax';

import styles from './styles.module.css'

function ParallaxComponent(props){
  const{url,title} = props;
  return(
    <Parallax bgImage={url} strength={950}>
      <div className='parallax-container'>
        <div className='parallax-title'>{title}</div>
      </div>
    </Parallax>
  )
}

function App() {
  return (
    <div style={{ width: '100%', height: '100%', background: '#252525' }}>
      <section className="container">
        <div className="character c1"></div>
      </section>
      <section className="container">
        <div className="character c2"></div>
      </section>
      <section className="container">
        <div className="character c3"></div>
      </section>
      <section className="container">
        <div className="character c4"></div>
      </section>
      <section className="container">
        <div className="character c5"></div>
      </section>
      <section className="container">
        <div className="character c6"></div>
      </section>
      <section className="container">
        <div className="character c7"></div>
      </section>
      <section className="container">
        <div className="character c8"></div>
      </section>
      <section className="container">
        <div className="character c9"></div>
      </section>
      <section className="container">
        <div className="character c10"></div>
      </section>
      <section className="container">
        <div className="character c11"></div>
      </section>
      <section className="container">
        <div className="character c12"></div>
      </section>
      <section className="container">
        <div className="character c13"></div>
      </section>
      <section className="container">
        <div className="character c14"></div>
      </section>
      <section className="container">
        <div className="character c15"></div>
      </section>
      <section className="container">
        <div className="character c16"></div>
      </section>
      <section className="container">
        <div className="character c17"></div>
      </section>
      <section className="container">
        <div className="character c18"></div>
      </section>
      <section className="container">
        <div className="character c19"></div>
      </section>
    </div>
  );
}

export default App;