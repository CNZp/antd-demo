import React, {Component} from 'react';
import echarts from 'echarts/lib/echarts';
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/grid';
import 'echarts/lib/chart/bar';

class ChartBar extends Component {

    componentDidMount(){

        let myChart = echarts.init(document.getElementById('main'));

        // 为echarts对象加载数据
        myChart.setOption(this.props.options);
    }
    render() {
        return (
            <div id="main" style={{width: "200px", height:"200px"}}></div>
        );
    }
}

export default ChartBar;