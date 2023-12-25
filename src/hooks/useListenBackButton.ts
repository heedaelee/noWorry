import {useEffect} from 'react';

const useListenBackButton = (callback: () => void) => {
  useEffect(() => {
    const handleBackButton = () => {
      callback();
    };

    window.addEventListener('popstate', handleBackButton);

    return () => {
      window.removeEventListener('popstate', handleBackButton);
    };
  }, [callback]);
};

export default useListenBackButton;
