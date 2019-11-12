import { FlagContextType } from './FlagContext';

export const loadLocalFlags = (): FlagContextType => {
  let localFlags = {};

  try {
    localFlags = JSON.parse(localStorage.getItem('react-fun-with-flags') || "{}");
    // eslint-disable-next-line no-empty
  } catch (e) {}

  return localFlags;
};

const saveLocalFlags = (flags: FlagContextType) => {
  try {
    localStorage.setItem('react-fun-with-flags', JSON.stringify(flags));
    // eslint-disable-next-line no-empty
  } catch (e) {}

  return flags;
};

export function enable(flag: string) {
  const localFlags = loadLocalFlags();

  saveLocalFlags({
    ...localFlags,
    [flag]: true,
  });
}

export function disable(flag: string) {
  const localFlags = loadLocalFlags();
  if (localFlags) {
    delete localFlags[flag];
  }
  saveLocalFlags(localFlags);
}
