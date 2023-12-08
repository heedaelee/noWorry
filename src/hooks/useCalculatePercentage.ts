import {PieChartProps} from 'components/chart/PieChart';
import {useMemo} from 'react';
import {WorryList} from 'types/common';

const useCalculatePercentage = (worryList: WorryList) => {
  const totalItemsCount = worryList.length;
  const notHappenedItemCount = useMemo(() => {
    return worryList.filter(item => item.worryStatus === '일어나지 않음')
      .length;
  }, [worryList]);

  const makeData = () => {
    const percentage = (notHappenedItemCount / totalItemsCount) * 100;

    /* 데이터set 만들기 */
    const data: PieChartProps['data'] = [
      //  일어남
      {
        id: '0',
        value: percentage,
      },
      //  일어나지 않음
      {
        id: '1',
        value: 100 - percentage,
      },
    ];

    return {data};
  };
  return makeData();
};

export default useCalculatePercentage;
