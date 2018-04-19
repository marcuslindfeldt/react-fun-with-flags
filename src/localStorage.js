export const loadLocalFlags = () => {
  let localFlags = {};

  try {
    localFlags = JSON.parse(localStorage.getItem('react-fun-with-flags'));
    // eslint-disable-next-line no-empty
  } catch (e) {}

  return localFlags;
};

const saveLocalFlags = flags => {
  try {
    localStorage.setItem('react-fun-with-flags', JSON.stringify(flags));
    // eslint-disable-next-line no-empty
  } catch (e) {}

  return flags;
};

export function enable(flag) {
  const localFlags = loadLocalFlags();

  saveLocalFlags({
    ...localFlags,
    [flag]: true,
  });
}

export function disable(flag) {
  const localFlags = loadLocalFlags();
  if (localFlags) {
    delete localFlags[flag];
  }
  saveLocalFlags(localFlags);
}
