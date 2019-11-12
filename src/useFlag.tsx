import { useContext } from 'react';
import FlagContext from './FlagContext';
import flagCheck from './flagCheck';

const useFlag = (flag: string) => {
  const flags = useContext(FlagContext);
  return flagCheck(flags, flag);
};

export default useFlag;
