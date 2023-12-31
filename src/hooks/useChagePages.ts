import {useNavigate} from 'react-router-dom';
import {useRecoilState} from 'recoil';
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

  const changePageHandler = (pagesParam: PageType) => {
    if (pages !== pagesParam) {
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
