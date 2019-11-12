import { FlagContextType } from './FlagContext';

export default (flags: FlagContextType, flag: string) => {
  const hasFlag = flags[flag];

  if (typeof flag === 'undefined') {
    // eslint-disable-next-line no-console
    console.error('Flag name does not exist:', flag, 'existing flags:', flags);
  }

  return !!hasFlag;
};
