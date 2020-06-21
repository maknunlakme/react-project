import React, {Component} from "react";
import {Bar} from 'react-chartjs-2';
import {connect} from 'react-redux';
import {Jumbotron} from 'react-bootstrap';
import {currentDay, isCurrentMonth, setColor, setLabelForMonth} from '../helpers/Utils';

class CustomerBar extends Component {

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
            if (isCurrentMonth(val.date)) {
                const index = currentDay(val.date);
                // eslint-disable-next-line array-callback-return
                chartData.datasets.map((district) => {
                    if (district.label === val.district) {
                        const previous = district.data[index];
                        if (previous !== undefined) {
                            district.data[index] = previous + 1;
                        } else {
                            district.data[index] = 1;
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
