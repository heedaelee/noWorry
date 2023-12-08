import React from 'react';
import {ResponsivePie} from '@nivo/pie';

export interface PieChartProps {
  data: {id: string; value: number}[];
}

const PieChart: React.FC<PieChartProps> = ({data}) => {
  return (
    <>
      <ResponsivePie
        data={data}
        startAngle={90}
        endAngle={-90}
        sortByValue={true}
        innerRadius={0.85}
        colors={['#2663D6', '#CCCCCC']}
        enableArcLinkLabels={false}
        enableArcLabels={false}
        animate={true}
        // tooltip={ () => null}
      />
      <div
        style={{
          marginTop: '-44px',
          fontSize: '44px',
          fontStyle: 'normal',
          fontWeight: 200,
          textAlign: 'center',
        }}>
        {`${data[0].value.toFixed(1)}%`}
      </div>
    </>
  );
};

export default PieChart;
