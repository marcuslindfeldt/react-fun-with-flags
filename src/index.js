import { enable, disable } from './localStorage';

export { default as Flag } from './Flag';
export { default as FlagProvider } from './FlagProvider';
export { default as FlagEnabled } from './FlagEnabled';
export { default as FlagDisabled } from './FlagDisabled';

global.ReactFunWithFlags = {
  enable,
  disable,
};
