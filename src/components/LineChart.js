import React from 'react'
import { VictoryChart , VictoryAxis , VictoryLine , VictoryScatter ,VictoryTheme} from 'victory-native'
const LineChart = ({mileageChartData}) => {
  return (
    <VictoryChart padding={{ top: 30, right: 50, bottom: 50, left: 50 }} 
                domainPadding={20} width= {370} theme={VictoryTheme.material} >
                <VictoryAxis
                    style={{ 
                    ticks : {stroke: "transparent"} ,
                    grid : {stroke : 'transparent'}}}
                    
                />
        
                 <VictoryAxis dependentAxis  
                 tickLength={0}
                 style={{ axis: { stroke: "transparent" } ,
                 ticks : {stroke: "transparent"},
                 grid: { stroke: '#CED8DE' , strokeDasharray : [0,0] }}}
                //  tickValues={mileageYTickValues.map((item)=>item[0].y)}
                //  tickFormat={mileageYTickValues.map((item) => `${item[0].y}`)}
                 />
                    <VictoryScatter
                        size={5}
                        style={{ data: { fill: "#EB655F" },
                         }}
                        data={mileageChartData}
                        x="month"
                        y="mileage"
                    />
                    <VictoryLine
                        style={{
                        data: { stroke: "#EB655F" },
                        parent: { padding : 100}
                        }}
                        x = "month"
                        y = "mileage"
                        data={mileageChartData}
                        interpolation="cardinal"
                    />
                    {/* {mileageYTickValues.map((line, index) => {
                    return(
                    
                    <VictoryLine
                    key={index}
                    style={{ data: { stroke: "gray",strokeWidth : 0.5 } }}
                    data={line}
                    />
                )})} */}
                </VictoryChart>
  )
}

export default LineChart