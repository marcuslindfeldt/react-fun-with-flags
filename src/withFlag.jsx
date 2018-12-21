import React from 'react';
import hoistNonReactStatics from 'hoist-non-react-statics';
import { Consumer } from './FlagContext';

const withFlag = WrappedComponent => {
  const WithFlag = ({ forwardedRef, ...props }) => (
    <Consumer>
      {({ flags }) => (
        <WrappedComponent
          ref={forwardedRef}
          checkFlag={flag => {
            const hasFlag = flags[flag];

            if (typeof flag === 'undefined') {
              // eslint-disable-next-line no-console
              console.error('Flag name does not exist', flag);
            }

            return !!hasFlag;
          }}
          {...props}
        />
      )}
    </Consumer>
  );

  return WithFlag;
};

const withFlagForwardRef = WrappedComponent => {
  const WithFlag = withFlag(WrappedComponent);

  const forwardRef = (props, ref) => <WithFlag {...props} forwardedRef={ref} />;

  const name = WrappedComponent.displayName || WrappedComponent.name;
  forwardRef.displayName = `withFlag(${name})`;

  hoistNonReactStatics(WithFlag, WrappedComponent);

  return React.forwardRef(forwardRef);
};

export const test = {
  withFlag,
};

export default withFlagForwardRef;
