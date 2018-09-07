import React, { Component } from 'react';
import Button from 'antd/lib/button';
import './App.css';
import ChartBar from './cmpt/chartBar'

class App extends Component {
    render() {
        return (
            <div className="App">
                <ChartBar options={ {
                    tooltip: {
                        show: true
                    },
                    legend: {
                        data:['销量']
                    },
                    xAxis : [
                        {
                            type : 'category',
                            data : ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
                        }
                    ],
                    yAxis : [
                        {
                            type : 'value'
                        }
                    ],
                    series : [
                        {
                            "name":"销量",
                            "type":"bar",
                            "data":[5, 20, 40, 10, 10, 20]
                        }
                    ]
                }}/>
                <br/>
                <Button type="primary">Button</Button>
            </div>
        );
    }
}

export default App;
