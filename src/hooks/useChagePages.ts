import {useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import {SetterOrUpdater, useRecoilState} from 'recoil';
import {pagesState} from 'store/pages';
import {PageType} from 'types/common';

type useChagePagesType = () => [PageType, (pagesParam: PageType) => void];
/**
 * @param
 * @return [pages, setPages, changePages]
 */
export const useChangePages: useChagePagesType = () => {
  const [pages, setPages] = useRecoilState(pagesState);
  const navigate = useNavigate();
  console.log('Page호출', pages);

  const changePageHandler = (pagesParam: PageType) => {
    if (pages !== pagesParam) {
      console.log('changePageHandler 호출', pagesParam);
      setPages(pagesParam);
      switch (pagesParam) {
        case 'list':
          navigate('/');
          break;
        case 'editor':
          navigate(`/register`);
          break;
        default:
          navigate(`/${pagesParam}`);
          break;
      }
    }
  };

  return [pages, changePageHandler];
};
