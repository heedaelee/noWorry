import {Dispatch, SetStateAction, useState} from 'react';

type useToggleType = (
  initialValue: boolean,
) => [boolean, Dispatch<SetStateAction<boolean>>];

const useBoolean: useToggleType = initialValue => {
  const [value, setValue] = useState(initialValue);
  return [value, setValue];
};

export default useBoolean;
