import React, { Component } from 'react';
import { Bar } from 'react-chartjs-2';

class DenialsChart extends Component {
  constructor(props) {
    super(props)
    this.state = {

      denialsData: {
        labels: ["January", "February", "March", "April", "May", "June"],
        datasets: [{
          type: 'bar',
          label: 'Cardiac Surgery',
          data: [20, 22, 18, 18, 20, 19],
          backgroundColor: 'rgba(180, 180, 180, 0.4)',
          fill: false
        }, {
          type: 'bar',
          label: 'Emergency Room',
          backgroundColor: 'rgba(255, 180, 180, 0.4)',
          data: [33, 30, 26, 25, 20, 18],
          borderColor: 'black',
          fill: false
        }, {
          type: 'bar',
          label: 'Infusion Series',
          backgroundColor: 'rgba(220, 220, 220, 0.4)',
          data: [10, 8, 12, 14, 15, 12],
          borderColor: 'black',
          fill: false
        }, {
          type: 'bar',
          label: 'Oncology',
          backgroundColor: 'rgba(102, 153, 0, 0.3)',
          data: [6, 10, 11, 5, 13, 19],
          borderColor: 'black',
          fill: false
        }, {
          type: 'bar',
          label: 'Telemetry',
          backgroundColor: 'rgba(60, 60, 60, 0.4)',
          data: [13, 10, 8, 8, 10, 14],
          borderColor: 'black',
          fill: false
        }, {
          type: 'bar',
          label: 'Wound Care',
          backgroundColor: 'rgba(255, 165, 0, 0.4)',
          data: [18, 20, 25, 30, 22, 18],
          borderColor: 'black',
          fill: false
        }]
      }
    }
  }

  render() {
    return (
      <div className="denials-chart">

        <Bar
          data={this.state.denialsData}
          options={{
            title: {
              display: true,
              text: '% Composition of Aggregate Denials by Department',
              fontSize: 25
            },
            scales: {
              xAxes: [{
                stacked: true
              }],
              yAxes: [{
                stacked: true,
                scaleLabel: {
                  display: true,
                  labelString: 'Contribution to Aggregate Denials (%)',
                  fontSize: 14
                }
              }]
            }
          }}
        />

      </div>
    )
  }
}

export default DenialsChart
