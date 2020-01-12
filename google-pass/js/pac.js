(function() {
    const rootKey = 'ZDgyOGY1ZjYtMDk2My00MTk4LWJiYzUtMGMxMTExMTF4eHh4';
    const sourceServer = 'aHR0cHM6Ly9vNDE3NXZ6MjcucW5zc2wuY29tL2QuanNvbj90PQ==';
    const visited = { "links": ["https://www.hao123.com/?tn=93006350_hao_pg", "https://www.baidu.com/s?wd=%E4%BC%9A%E5%91%98%E8%A7%86%E9%A2%91%E5%9C%A8%E7%BA%BF%E8%A7%A3%E6%9E%90&rsv_spt=1&rsv_iqid=0xa2b11e9b0000c0eb&issp=1&f=8&rsv_bp=1&rsv_idx=2&ie=utf-8&rqlang=cn&tn=baiduhome_pg&rsv_enter=1&oq=git%2520resolve&rsv_t=a836%2B4RM508%2B3KOSqhpnfuk2acZ19VdDROn6vlNZ4l0IsrKhKlneLXsx0z6vPTQeebMT&rsv_pq=999644b7000128b4&inputT=7282248&rsv_sug3=34&rsv_sug1=30&rsv_sug7=100&bs=git%20resolve", "https://www.google.com.hk/", "http://tool.oschina.net/codeformat/js/", "http://123.hao245.com/"] };

    function testSpeed(str) {
        return new Promise((resolve, reject) => {
            const serverArr = str.split(':');
            const startTime = Date.now();
            $.ajax({
                url: "https://" + serverArr[1] + ":" + serverArr[2] + "/speed_test?size=100&t=" + startTime,
                timeout: 5000,
                success: () => {
                    const speed = Math.floor(1e5 / (Date.now() - startTime));
                    resolve(speed);
                },
                error: () => {
                    resolve(-1);
                }
            });
        });
    }


    function getAliveServer(rootServer) {
        return new Promise((resolve, reject) => {
            const e = m.offlineTime();
            const l = m.E(JSON.stringify(visited), m.P(atob(rootKey), e));
            $.ajax({
                type: "POST",
                tryCount: 0,
                retryLimit: 2,
                url: atob(rootServer) + "updateTaskRule2?uuid=" + atob(rootKey) + "&time=" + e,
                data: { D: l },
                success: function(body) {
                    const responseText = m.D(body, m.P(atob(rootKey), e));
                    try {
                        const result = JSON.parse(responseText);
                        const { proxyServer } = result;
                        const testList = proxyServer.map(proxy => {
                            return testSpeed(proxy);
                        });
                        Promise.all(testList).then(speeds => {
                            const maxSpeed = Math.max.apply(this, speeds);
                            if (maxSpeed === -1) {
                                reject();
                            } else {
                                const index = speeds.indexOf(maxSpeed);
                                resolve(proxyServer[index]);
                            }
                        });
                    } catch (e) {
                        reject();
                    }
                },
                error: reject
            });
        });
    }

    function getRootServer() {
        return new Promise(function(resolve, reject) {
            $.ajax({
                url: atob(sourceServer) + Date.now(),
                dataType: 'json',
                success: function(res) {
                    const RSS = res.RSS;
                    let maxItem = null;
                    let max = 0;
                    RSS.map(function(item) {
                        if (item.percentHigh > max) {
                            max = item.percentHigh;
                            maxItem = item;
                        }
                    });
                    resolve(btoa(atob(maxItem.name) + 'app/ext/'));
                },
                error: reject
            })
        });
    }

    window.getAliveServer = getAliveServer;
    window.getRootServer = getRootServer;
})();
