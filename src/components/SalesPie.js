import React, {Component} from "react";
import {Pie} from 'react-chartjs-2';
import {connect} from 'react-redux';
import {Jumbotron} from 'react-bootstrap';
import {isCurrentMonth, setColor} from "../helpers/Utils";

class SalesPie extends Component {

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
            if (chartData.label.find((test) => test === val.product) === undefined) {
                chartData.label.push(val.product);
                chartData.datasets[0].data.push(0);
                chartData.datasets[0].backgroundColor.push(color.pop());
            }
        });

        // eslint-disable-next-line array-callback-return
        data.map((val) => {
            if (isCurrentMonth(val.date)) {
                // eslint-disable-next-line array-callback-return
                chartData.label.map((product, index) => {
                    if (product === val.product) {
                        chartData.datasets[0].data[index] += val.order_quantity;
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
                    <h1>Sales Pie Chart</h1>
                    <p>
                        The pie chart contains product wise comparison of
                        order quantities of all sold products for this month.
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

export default connect(mapStateToProps)(SalesPie)
