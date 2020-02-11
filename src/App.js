import React, { Component } from 'react';
import './App.css';
import GrossRevenueChart from './components/GrossRevenue'
import NetRevenueChart from './components/NetRevenue'
import CashChart from './components/Cash'
import DenialsChart from './components/Denials'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      grossRevenueData: {},
      netRevenueData: {},
      cashData: {}
    }
    this.getGrossRevenueChartData = this.getGrossRevenueChartData.bind(this);
    this.getNetRevenueChartData = this.getNetRevenueChartData.bind(this);
    this.getCashChartData = this.getCashChartData.bind(this);
  }

  componentDidMount() {
    this.getGrossRevenueChartData();
    this.getNetRevenueChartData();
    this.getCashChartData();
  }

  getGrossRevenueChartData() {
    // Axios / external call go here & you can fill the state with the queried dataset
    this.setState({
      grossRevenueData: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June'],
        datasets: [{
          label: 'Accounts receivable for services rendered',
          data: [
            37909216.10, 40326488.05, 58144188.53, 30265763.93, 74398823.63, 52074421.70
          ],
          // backgroundColor: 'RGB(127, 205, 205)',
          borderWidth: 1,
          borderColor: '#777',
          hoverBorderWidth: 2,
          hoverBorderColor: 'black'
        }]
      }
    })
  }

  getNetRevenueChartData() {
    // Axios / external call go here & you can fill the state with the queried dataset
    this.setState({
      netRevenueData: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June'],
        datasets: [{
          label: 'Operating margin',
          data: [
            8653151.57, 12467528.65, 6308043.93, 9511793.17, 11840796.61, 10076359.79
          ],
          borderWidth: 1,
          borderColor: '#777',
          hoverBorderWidth: 2,
          hoverBorderColor: 'black',
          backgroundColor: 'rgb(102, 153, 0, 0.1)'
        },
        {
          label: 'Aggregate initial denials',
          data: [7050881.87, 10769962.98, 6229234.05, 4234635.65, 5008244.23, 3098535.43],
          type: 'bar',
          borderWidth: 1,
          borderColor: '#777',
          hoverBorderWidth: 2,
          hoverBorderColor: 'black',
          backgroundColor: 'rgba(255, 0, 0, 0.15)'
        }]
      }
    })
  }

  getCashChartData() {
    // Axios / external call go here & you can fill the state with the queried dataset
    this.setState({
      cashData: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June'],
        datasets: [{
          label: '2019 month-over-month cash performance',
          data: [
            23937306.77, 18259165.90, 21099535.39, 27038204.83, 24298242.65, 29234098.02
          ],
          // backgroundColor: 'RGB(127, 205, 205)',
          borderWidth: 1,
          borderColor: '#777',
          hoverBorderWidth: 2,
          hoverBorderColor: 'black'
        }, {
          label: 'Δ month-over-month liquidity',
          data: [2347298.00, -5678140.87, 2840369.49, 5938669.44, -2739962.18, 4935855.37],
          type: 'bar',
          backgroundColor: ['rgb(102, 153, 0, 0.3)', 'rgba(255, 0, 0, 0.3)', 'rgb(102, 153, 0, 0.3)', 'rgb(102, 153, 0, 0.3)', 'rgba(255, 0, 0, 0.3)', 'rgb(102, 153, 0, 0.3)'],
          borderWidth: 1,
          borderColor: '#777',
          hoverBorderWidth: 2,
          hoverBorderColor: 'black'
        }]
      }
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">

          <div className="charts-container">

            <Navbar />
            {/* <Sidebar /> */}
            <GrossRevenueChart grossRevenueData={this.state.grossRevenueData} />
            <NetRevenueChart netRevenueData={this.state.netRevenueData} />
            <CashChart cashData={this.state.cashData} />
            <DenialsChart />

          </div>

        </header>
      </div>
    )
  }
}

export default App;
