import {useEffect} from 'react';

const useListenBackButton = (callback: () => void) => {
  useEffect(() => {
    console.log('실행되나?');
    const handleBackButton = () => {
      callback();
    };

    window.addEventListener('popstate', handleBackButton);

    return () => {
      console.log('클린업 실행되나');
      window.removeEventListener('popstate', handleBackButton);
    };
  }, [callback]);
};

export default useListenBackButton;
