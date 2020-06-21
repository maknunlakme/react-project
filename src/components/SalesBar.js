import React, {Component} from "react";
import {Bar} from 'react-chartjs-2';
import {connect} from 'react-redux';
import {Jumbotron} from 'react-bootstrap';
import {setColor, isCurrentMonth, setLabelForMonth, currentDay} from '../helpers/Utils';

class SalesBar extends Component {

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
            datasets: []
        };

        // eslint-disable-next-line array-callback-return
        data.map((val) => {
            if (chartData.datasets.find((test) => test.label === val.product) === undefined) {
                chartData.datasets.push({
                    label: val.product,
                    backgroundColor: color.pop(),
                    data: []
                });
            }
        });

        // eslint-disable-next-line array-callback-return
        data.map((val) => {
            if (isCurrentMonth(val.date)) {
                const index = currentDay(val.date);
                // eslint-disable-next-line array-callback-return
                chartData.datasets.map((product) => {
                    if (product.label === val.product) {
                        const previous = product.data[index];
                        if (previous !== undefined) {
                            product.data[index] = previous + val.order_quantity;
                        } else {
                            product.data[index] = val.order_quantity;
                        }
                    }
                });
            }
        });

        this.setState(
            {
                labels: setLabelForMonth(),
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
                    <h1>Sales Bar Chart</h1>
                    <p>
                        The bar chart contains product wise order quantity grouped by dates for this month.
                        The x-axis contains the dates, y-axis contains the counts for different products
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

export default connect(mapStateToProps)(SalesBar)
