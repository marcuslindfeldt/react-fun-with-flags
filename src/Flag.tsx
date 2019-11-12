import { FunctionComponent } from 'react';
import useFlag from './useFlag';

export type FlagProps = {
  name: string;
  children: (flagState: boolean) => any;
};

const Flag: FunctionComponent<FlagProps> = ({ name, children }) => {
  const flag = useFlag(name);
  return children(flag);
};

export default Flag;
