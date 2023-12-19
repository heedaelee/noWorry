import {useMemo} from 'react';

import {PieChartProps} from 'components/chart/PieChart';
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
    let notHappenedRate;
    if (totalItemsCount === 0) {
      /* 0/0 -> NAN 방지 하기 위해  0을 대입하고 계산을 피함*/
      notHappenedRate = 0;
    } else {
      notHappenedRate = (notHappenedItemCount / totalItemsCount) * 100;
    }
    /* 데이터set 만들기 */
    const data: PieChartProps['data'] = [
      //  일어나지않음: 파란색
      {
        id: '0',
        value: notHappenedRate,
      },
      //  일어남 : 회색
      {
        id: '1',
        value: 100 - notHappenedRate,
      },
    ];

    return data;
  };
  const dataForChart = makeData();
  return {dataForChart, totalItemsCount, notHappenedItemCount};
};

export default useCalculatePercentage;
