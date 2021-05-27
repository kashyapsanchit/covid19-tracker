import React from 'react'

import Cards from './Components/Cards/Cards.js'
import Chart from './Components/Chart/Chart.js'
import CountryPicker from './Components/CountryPicker/CountryPicker.js'
import styles from './App.module.css'
import { fetchData } from './api/index.js'



class App extends React.Component {
state = {
  data: {},
  country: '',
}



async  componentDidMount() {
    const fetchedData = await fetchData();

    this.setState({data: fetchedData })
  }
  
handleCountryChange = async (country) => {
  const fetchedData = await fetchData(country);
  
  
  this.setState({data: fetchedData, country: country })


}




  render() {
    const { data, country } = this.state;

    return (
      <div className={styles.container}>
        <Cards  data = {data}/>
        <Chart data={data} country= {country}/>
        <CountryPicker handleCountryChange={this.handleCountryChange}/>
      </div>
    )
  }
}

export default App
