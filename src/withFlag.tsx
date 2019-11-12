import React, { useContext } from 'react';
import hoistNonReactStatics from 'hoist-non-react-statics';
import FlagContext from './FlagContext';
import flagCheck from './flagCheck';

const withFlag = (WrappedComponent: any) => {
  const WithFlag = ({ forwardedRef, ...props }: any) => {
    const flags = useContext(FlagContext);

    return (
      <WrappedComponent
        ref={forwardedRef}
        checkFlag={(flag: string) => flagCheck(flags, flag)}
        {...props}
      />
    );
  };

  return WithFlag;
};

const withFlagForwardRef = (WrappedComponent: any) => {
  const WithFlag = withFlag(WrappedComponent);

  const ForwardedComponent = React.forwardRef((props: any, ref: any) => (
    <WithFlag {...props} forwardedRef={ref} />
  ));

  const name = WrappedComponent.displayName || WrappedComponent.name;
  ForwardedComponent.displayName = `withFlag(${name})`;

  hoistNonReactStatics(ForwardedComponent, WrappedComponent);

  return ForwardedComponent;
};

export const test = {
  withFlag,
};

export default withFlagForwardRef;
