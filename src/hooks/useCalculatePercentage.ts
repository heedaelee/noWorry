import {PieChartProps} from 'components/chart/PieChart';
import {useMemo} from 'react';
import {WorryList} from 'types/common';

const useCalculatePercentage = (worryList: WorryList) => {
  const totalItemsCount = worryList.filter(
    itme => itme.worryStatus !== '현재 걱정',
  ).length;
  const notHappenedItemCount = useMemo(() => {
    return worryList.filter(item => item.worryStatus === '일어나지 않음')
      .length;
  }, [worryList]);

  const makeData = () => {
    const notHappenedRate = (notHappenedItemCount / totalItemsCount) * 100;
    /* 데이터set 만들기 */
    const data: PieChartProps['data'] = [
      //  일어남
      {
        id: '0',
        value: notHappenedRate,
      },
      //  일어나지 않음
      {
        id: '1',
        value: 100 - notHappenedRate,
      },
    ];

    return data;
  };
  const data = makeData();
  return {data, totalItemsCount, notHappenedItemCount};
};

export default useCalculatePercentage;
