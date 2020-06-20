import React, {Component} from "react";
import {Pie} from 'react-chartjs-2';
import {connect} from "react-redux";
import {getSalesData} from "../store/Actions";
import moment from 'moment'
import {Jumbotron} from "react-bootstrap";

class CustomerPie extends Component {

    constructor(props) {
        super(props);
        this.props.getSalesData();
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
            label: [],
            datasets: [{
                data: [],
                backgroundColor: []
            }]
        };

        console.log('show char data fist: ', chartData);

        // eslint-disable-next-line array-callback-return
        data.map((val) => {
            if (chartData.label.find((test) => test === val.customer_work_area) === undefined) {
                chartData.label.push(val.customer_work_area);
                chartData.datasets[0].data.push(0);
                chartData.datasets[0].backgroundColor.push(color.pop());
            }
        });

        // eslint-disable-next-line array-callback-return
        data.map((val) => {
            if ((val.date.slice(0, 4) === year) && (val.date.slice(5, 7) === month)) {
                // eslint-disable-next-line array-callback-return
                chartData.label.map((value, index) => {
                    if (value === val.customer_work_area) {
                        chartData.datasets[0].data[index]++;
                        console.log('previous value: ', chartData.datasets[0].data[index]);
                    }
                });
            }
        });

        const daysInMonth = moment(moment().format('YYYY-MM')).daysInMonth();
        let labelForMonth = Array.from(Array(daysInMonth), (d, i) => i + 1);

        console.log('days in month: ', daysInMonth, labelForMonth, color.pop());
        console.log('chart data pie pie pie: ', chartData, data);

        this.setState(
            {
                labels: chartData.label,
                datasets: chartData.datasets
            }
        )
    }

    componentDidMount() {
        //this.props.getSalesData();
        this.dataHandler();
    }

    render() {
        return (
            <div>
                <Jumbotron>
                    <h1>Customer Pie Chart</h1>
                    <p>
                        The pie chart contains working area wise customer counts for all customers.
                    </p>
                </Jumbotron>
                <Pie data={this.state}/>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        sales: state.salesData.sales,
    }
};

export default connect(mapStateToProps, {getSalesData})(CustomerPie)
