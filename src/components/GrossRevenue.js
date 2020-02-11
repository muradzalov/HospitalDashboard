import React, { Component } from 'react';
import { Line } from 'react-chartjs-2';

class GrossRevenueChart extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <div className="gross-chart">

        <Line
          data={this.props.grossRevenueData}
          options={{
            responsive: true,
            title: {
              display: true,
              text: '2019 Gross Revenue',
              fontSize: 25
            },
            legend: {
              position: 'top'
            },
            scales: {
              yAxes: [{
                scaleLabel: {
                  display: true,
                  labelString: 'Gross Revenue (dollars)',
                  fontSize: 14
                },
                ticks: {
                  max: 80000000,
                  min: 0,
                  stepSize: 10000000,
                  userCallback: function (value, index, values) {
                    value = value.toString();
                    value = value.split(/(?=(?:...)*$)/);
                    value = value.join(',');
                    return `$${value}`;
                  }
                }
              }]
            },
            tooltips: {
              mode: 'label',
              label: 'mylabel',
              callbacks: {
                label: function (tooltipItem, data) {
                  return `$${tooltipItem.yLabel.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`;
                },
              },
            }
          }}
        />

      </div>
    )
  }
}

export default GrossRevenueChart
