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

  console.log('호출', pages);
  const navigate = useNavigate();

  useEffect(() => {
    switch (pages) {
      case 'list':
        navigate('/');
        break;
      case 'editor':
        navigate(`/register`);
        break;
      default:
        navigate(`/${pages}`);
        break;
    }
  }, [navigate, pages]);

  return [pages, setPages];
};
