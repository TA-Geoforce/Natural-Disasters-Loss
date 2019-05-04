import React, { Component } from "react";
import { Bar } from "@vx/shape";
import { Group } from "@vx/group";
import { scaleBand, scaleLinear } from "@vx/scale";
import { AxisLeft, AxisBottom } from "@vx/axis";
import PropTypes from 'prop-types';
import { ParentSize } from '@vx/responsive';
import {Text} from '@vx/text';

class Chart extends Component {
  constructor(props) {
    super(props);
  }


  numTicksForHeight(height) {
    if (height <= 300) return 3;
    if (300 < height && height <= 600) return 5;
    return 10;
  }

  render() {
    if (this.props.data && this.props.allMonthsIsChecked) {
      const margin = { top: 30, right: 20, bottom: 70, left: 60 };
      return(
        <div className="col-12 chart">
      <ParentSize>
        {({ width, height }) => {
          const innerWidth = width - margin.left - margin.right;
          const innerHeight = 500 - margin.top - margin.bottom;

      const x = d => d.month;
      const y = d => Math.round(d.probability *100);

      const xMax = innerWidth;
      const yMax = innerHeight - 120;

      const xScale = scaleBand({
        rangeRound: [0, xMax],
        domain: this.props.data.map(x),
        padding: 0.4
      });

      const text = "Tornadoes loss for the state of " + this.props.state
      const yScale = scaleLinear({
        rangeRound: [yMax, 0],
        // eslint-disable-next-line react/prop-types
        domain: [0, Math.max(...this.props.data.map(y))]
      });

      return (
        
        <svg width={innerWidth} height={innerHeight}>
          <Group left={margin.left} top={margin.top}>
          <Text x={innerWidth/2}  y={0}  dx={-10} dy={-10} width={innerWidth} verticalAnchor="middle" textAnchor="middle"
          style={{fill: 'white', fontSize: 20,
            fontFamily: 'Arial'}}>
            {text}
          </Text>

            <AxisLeft
              top={0}
              left={0}
              scale={yScale}
              hideZero
              numTicks= {10}// {this.numTicksForHeight(height)}
              label="Probability (%)"
              labelProps={{
                fill: 'white',
                textAnchor: 'middle',
                fontSize: 12,
                fontFamily: 'Arial'
              }}
              stroke={"white"}
              tickStroke="white"
              tickLabelProps={(value, index) => ({
                fill: 'white',
                textAnchor: 'end',
                fontSize: 10,
                fontFamily: 'Arial',
                dx: '-0.25em',
                dy: '0.25em'
              })}
              tickComponent={({ formattedValue, ...tickProps }) => (
                <text {...tickProps}>{formattedValue}</text>
              )}
    
            />
            <AxisBottom
              scale={xScale}
              top={yMax}
              label={"Months"}
              stroke={"white"}
              tickTextFill={"white"}
              tickStroke="white"
              labelProps={{
                fill: 'white',
                textAnchor: 'middle',
                fontSize: 12,
                fontFamily: 'Arial'
              }}
              tickLabelProps={(value, index) => ({
                fill: 'white',
                textAnchor: 'end',
                fontSize: 10,
                fontFamily: 'Arial',
                dx: '1.5em'
              })}
             
            />
            {this.props.data.map((d, i) => {
              const month = x(d);
              const barWidth = xScale.bandwidth();
              const barHeight =
                yMax - yScale(y(d));
              const barX = xScale(month);
              const barY = yMax - barHeight;
              return (
                <Bar
                  key={`bar-${month}`}
                  x={barX}
                  y={barY}
                  width={barWidth}
                  height={barHeight}
                  fill={d.losses === "more than $5,000,000"? "#542437": "#1a5624"}
                />
              );
            })}
          </Group>
        </svg>
      );
    }}
    </ParentSize>
    </div>
      );
    } else {
      return null;
    }
  }
}

Chart.propTypes = {
  data: PropTypes.Array,
  allMonthsIsChecked: PropTypes.bool,
  state:PropTypes.string
}

export default Chart;
