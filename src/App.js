import React, { Component } from 'react'
import './App.css'
import Header from './components/pokedex/Header'
import CardPanel from './components/pokedex/CardPanel'
import Footer from './components/pokedex/Footer'
import { GlobalProvider } from './context/GlobalContext'


//Global Provider enables acess to context of each cards

class App extends Component {
  render() {
    return (
      <>
        <GlobalProvider>
            <Header />
            <CardPanel />
            <Footer />
        </GlobalProvider>
      </>
    )
  }
}

export default App
