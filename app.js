App({
  onLaunch(options) {
    // 第一次打开
    // options.query == {number:1}
    console.info('App onLaunch 23');
  },
  onShow(options) {
    // 从后台被 scheme2 重新打开
    // options.query == {number:1}
  },
});