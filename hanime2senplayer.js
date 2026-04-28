// ===== 强制跳 SenPlayer（终极兜底）=====

let url = "";

try {

    // 👉 直接抓请求（最稳）
    if (typeof $request !== "undefined") {
        if ($request.url.includes(".mp4")) {
            url = $request.url;
        }
    }

    // 👉 如果是页面再兜底
    if (!url && typeof $response !== "undefined") {
        let body = $response.body || "";
        let m = body.match(/https?:\/\/[^"'\\]+\.mp4[^"'\\]*/);
        if (m) url = m[0];
    }

    if (url) {
        let scheme = "senplayer://play?url=" + encodeURIComponent(url) + "&referer=https://hanime1.me";

        $notify("已捕获视频", "跳转播放器", url);

        $openURL(scheme);
    }

} catch (e) {
    console.log("error: " + e);
}

$done({});