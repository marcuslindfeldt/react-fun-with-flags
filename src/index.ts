import { enable, disable } from './localStorage';

export { default as Flag } from './Flag';
export { default as FlagProvider } from './FlagProvider';
export { default as FlagEnabled } from './FlagEnabled';
export { default as FlagDisabled } from './FlagDisabled';
export { default as withFlag } from './withFlag';

type ReactFunWithFlags = {
  enable: (flag: string) => void;
  disable: (flag: string) => void;
};

declare global {
  interface Window {
    ReactFunWithFlags: ReactFunWithFlags;
  }
}

window.ReactFunWithFlags = {
  enable,
  disable,
};
