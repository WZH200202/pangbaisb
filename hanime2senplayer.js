// ===== hanime / insav 风格 → SenPlayer =====

let body = $response.body;

// 1️⃣ 先尝试抓 m3u8
let m3u8 = body.match(/https?:\/\/[^"'\\]+\.m3u8[^"'\\]*/i);

if (m3u8) {
    let url = m3u8[0]
        .replace(/\\u0026/g, "&")
        .replace(/\\/g, "");

    let scheme = "senplayer://play?url=" + encodeURIComponent(url);

    $notify("已抓到视频流", "跳转播放器", url);
    $openURL(scheme);

} else {

    // 2️⃣ 尝试抓 mp4（备用）
    let mp4 = body.match(/https?:\/\/[^"'\\]+\.mp4[^"'\\]*/i);

    if (mp4) {
        let url = mp4[0];

        let scheme = "senplayer://play?url=" + encodeURIComponent(url);

        $notify("抓到MP4", "跳转播放器", url);
        $openURL(scheme);
    }
}

$done({});