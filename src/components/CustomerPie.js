import React, {Component} from "react";
import {Pie} from 'react-chartjs-2';
import {connect} from 'react-redux';
import {Jumbotron} from 'react-bootstrap';
import {isCurrentMonth, setColor} from '../helpers/Utils';

class CustomerPie extends Component {

    constructor(props) {
        super(props);
        this.state = {
            labels: [],
            datasets: []
        };
    }

    dataHandler() {
        const color = setColor();
        const data = [...this.props.sales];
        let chartData = {
            label: [],
            datasets: [{
                data: [],
                backgroundColor: []
            }]
        };

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
            if (isCurrentMonth(val.date)) {
                // eslint-disable-next-line array-callback-return
                chartData.label.map((value, index) => {
                    if (value === val.customer_work_area) {
                        chartData.datasets[0].data[index]++;
                    }
                });
            }
        });

        this.setState(
            {
                labels: chartData.label,
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

export default connect(mapStateToProps)(CustomerPie)
