import React from 'react';
import {ResponsivePie} from '@nivo/pie';
import styled from 'styled-components';

export interface PieChartProps {
  data: {id: string; value: number}[] | [];
}

const PieChart: React.FC<PieChartProps> = ({data}) => {
  const noData = data.length === 0;
  if (noData) {
    data = [
      //  일어남
      {
        id: '0',
        value: 0,
      }, //  일어나지 않음
      {
        id: '1',
        value: 100,
      },
    ];
  }

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
      <TextWrapper>
        <PieChartText>
          {noData ? `?` : `${data[0].value.toFixed(1)}`}
        </PieChartText>
        <Percent> {noData ? '' : '%'} </Percent>
      </TextWrapper>
    </>
  );
};

const TextWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-end;
  margin-top: -44px;
  font-style: normal;
`;
const PieChartText = styled.div`
  font-size: 44px;
  font-weight: 200;
`;
const Percent = styled.div`
  display: flex;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
`;

export default PieChart;
