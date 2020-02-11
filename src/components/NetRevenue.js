import React, { Component } from 'react';
import { Line } from 'react-chartjs-2';

class NetRevenueChart extends Component {
  constructor(props) {
    super(props)
    this.state = {
      netRevenueData: {}
    }
  }

  render() {
    return (
      <div className="net-chart">

        <Line
          data={this.props.netRevenueData}
          options={{
            title: {
              display: true,
              text: '2019 Net Revenue & Denials',
              fontSize: 25
            },
            legend: {
              position: 'top'
            },
            scales: {
              yAxes: [{
                scaleLabel: {
                  display: true,
                  labelString: 'Net Revenue (dollars)',
                  fontSize: 14
                },
                ticks: {
                  max: 18000000,
                  min: 0,
                  stepSize: 2000000,
                  userCallback: function (value, index, values) {
                    value = value.toString();
                    value = value.split(/(?=(?:...)*$)/);
                    value = value.join(',');
                    return `$${value}`;
                  }
                }
              }]
            }
          }}
        />

      </div>
    )
  }
}

export default NetRevenueChart
