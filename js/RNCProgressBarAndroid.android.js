/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow
 */

'use strict';

import React from 'react';

import ProgressBarAndroidNativeComponent from './RNCProgressBarAndroidNativeComponent';

import type {ViewProps} from 'react-native/Libraries/Components/View/ViewPropTypes';

export type ProgressBarAndroidProps = $ReadOnly<{|
  ...ViewProps,

  /**
   * Style of the ProgressBar and whether it shows indeterminate progress (e.g. spinner).
   *
   * `indeterminate` can only be false if `styleAttr` is Horizontal, and requires a
   * `progress` value.
   */
  ...
    | {|
        styleAttr: 'Horizontal',
        indeterminate: false,
        progress: number,
      |}
    | {|
        typeAttr:
          | 'Horizontal'
          | 'Normal'
          | 'Small'
          | 'Large'
          | 'Inverse'
          | 'SmallInverse'
          | 'LargeInverse',
        indeterminate: true,
      |},
  /**
   * Whether to show the ProgressBar (true, the default) or hide it (false).
   */
  animating?: ?boolean,
  /**
   * Color of the progress bar.
   */
  color?: ?string,
  /**
   * Used to locate this view in end-to-end tests.
   */
  testID?: ?string,
|}>;

/**
 * React component that wraps the Android-only `ProgressBar`. This component is
 * used to indicate that the app is loading or there is activity in the app.
 *
 * Example:
 *
 * ```
 * render: function() {
 *   var progressBar =
 *     <View style={styles.container}>
 *       <ProgressBar styleAttr="Inverse" />
 *     </View>;

 *   return (
 *     <MyLoadingComponent
 *       componentView={componentView}
 *       loadingView={progressBar}
 *       style={styles.loadingComponent}
 *     />
 *   );
 * },
 * ```
 */
const ProgressBarAndroid = (
  props: ProgressBarAndroidProps,
  forwardedRef: ?React.Ref<typeof ProgressBarAndroidNativeComponent>,
) => {
  return <ProgressBarAndroidNativeComponent {...props} ref={forwardedRef} />;
};

const ProgressBarAndroidToExport = React.forwardRef(ProgressBarAndroid);

ProgressBarAndroidToExport.defaultProps = {
  styleAttr: 'Normal',
  indeterminate: true,
  animating: true,
};

export default (ProgressBarAndroidToExport: ProgressBarAndroidNativeComponent);
