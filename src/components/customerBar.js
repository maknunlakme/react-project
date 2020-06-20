import React, {Component} from "react";
import {Bar} from 'react-chartjs-2';
import {connect} from "react-redux";
import {getSalesData} from "../store/Actions";
import moment from 'moment'
import {Jumbotron} from "react-bootstrap";

class CustomerBar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            labels: [],
            datasets: []
        };
    }

    dataHandler() {
        const color = ['green', 'orange', 'blue', 'pink', 'yellow', 'red', 'purple', 'teal', 'tomato', 'violet', 'gold'];
        const year = moment().format('YYYY');
        const month = moment().format('MM');
        const data = [...this.props.sales];
        console.log('this year month: ', year, month);
        console.log('data handler: ', data);
        let chartData = {
            datasets: []
        };

        // eslint-disable-next-line array-callback-return
        data.map((val) => {
            if (chartData.datasets.find((test) => test.label === val.district) === undefined) {
                chartData.datasets.push({
                    label: val.district,
                    backgroundColor: color.pop(),
                    data: []
                });
            }
        });

        // eslint-disable-next-line array-callback-return
        data.map((val) => {
            if ((val.date.slice(0, 4) === year) && (val.date.slice(5, 7) === month)) {
                // eslint-disable-next-line array-callback-return
                chartData.datasets.map((district) => {
                    if (district.label === val.district) {
                        const previous = district.data[parseInt(val.date.slice(8, 10))-1];
                        if (previous !== undefined) {
                            district.data[parseInt(val.date.slice(8, 10))-1] = previous + 1;
                        } else {
                            district.data[parseInt(val.date.slice(8, 10))-1] = 1;
                        }
                        console.log('previous value: ', val.district, val.date, previous);
                    }
                });
            }
        });

        const daysInMonth = moment(moment().format('YYYY-MM')).daysInMonth();
        let labelForMonth = Array.from(Array(daysInMonth), (d, i) => i + 1);

        console.log('days in month: ', daysInMonth, labelForMonth, color.pop());
        console.log('chart data: ', chartData);

        this.setState(
            {
                labels: labelForMonth,
                datasets: chartData.datasets
            }
        )
    }

    componentDidMount() {
        this.dataHandler();
    }

    render() {
        return (
            <div>
                <Jumbotron>
                    <h1>Customer Bar Chart</h1>
                    <p>
                        The bar chart contains district wise customer counts grouped by dates for this month.
                        The x-axis contains the dates, y-axis contains the counts for different districts
                        with different colors
                    </p>
                </Jumbotron>
                <Bar
                    data={this.state}
                    width={100}
                    height={30}
                />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        sales: state.salesData.sales,
    }
};

export default connect(mapStateToProps)(CustomerBar)
