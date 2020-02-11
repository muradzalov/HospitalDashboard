import React, { Component } from 'react';
import { Bar } from 'react-chartjs-2';

class CashChart extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <div className="cash-chart">

        <Bar
          data={this.props.cashData}
          options={{
            title: {
              display: true,
              text: '2019 Cash Performance / Liquidity',
              fontSize: 25
            },
            legend: {
              position: 'top'
            },
            scales: {
              yAxes: [{
                scaleLabel: {
                  display: true,
                  labelString: 'Cash / Liquidity Factor (dollars)',
                  fontSize: 14
                },
                ticks: {
                  max: 30000000,
                  min: -6000000,
                  stepSize: 4000000,
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

export default CashChart
