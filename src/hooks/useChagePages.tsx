import {useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import {SetterOrUpdater, useRecoilState} from 'recoil';
import {pagesState} from 'store/pages';
import {PageType} from 'types/common';

type useChagePagesType = () => [PageType, SetterOrUpdater<PageType>];
/**
 * @param
 * @return [pages, setPages, changePages]
 */
export const useChangePages: useChagePagesType = () => {
  const [pages, setPages] = useRecoilState(pagesState);

  const navigate = useNavigate();
  useEffect(() => {
    changePages(pages);
  }, [pages]);

  const changePages = (page: PageType) => {
    switch (page) {
      case 'list':
        navigate('/');
        break;
      case 'editor':
        navigate(`/${page}`);
        break;
      case 'register':
        navigate(`/${page}`);
        break;
      default:
        navigate('/');
        break;
    }
  };

  return [pages, setPages];
};
