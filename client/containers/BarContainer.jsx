import React, {Component} from 'react';
import Chart from 'react-apexcharts';

const cachedata = 700;
const nocachedata = 50000;

class BarContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      options : {
        chart: {
          background: "#f4f4f4",
          foreColor: "#333"
        },
        xaxis: {
          categories: [
            "DB query",
            "Cache query",
          ]
        },
        plotOptions: {
          bar: {
            horizontal: true
          }
        }
      },
      series: [
        {
          name: "Speed",
          data: [
            cachedata,
            nocachedata,
          ]
        }
      ],
    }
  }

  render() {
    return <Chart 
      options = {this.state.options}
      series={this.state.series}
      type="bar"
      height="450"
      width="100%"
    />
  }
}

export default BarContainer;