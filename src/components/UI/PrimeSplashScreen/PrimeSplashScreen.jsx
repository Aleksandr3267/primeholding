import { memo } from 'react';

function PrimeSplashScreen() {
  return (
    <div id="fuse-splash-screen">
      <div
        id="spinner"
      >
        <div className="bounce1" />
        <div className="bounce2" />
        <div className="bounce3" />
      </div>
    </div>
  );
}

export default memo(PrimeSplashScreen);
