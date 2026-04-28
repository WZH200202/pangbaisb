// ===== hanime1 → SenPlayer 自动跳转 =====

let body = $response.body;

// 尝试匹配 m3u8
let m3u8Match = body.match(/https?:\/\/[^"'\\]+\.m3u8[^"'\\]*/i);

if (m3u8Match) {
    let videoUrl = m3u8Match[0];

    // 去掉转义符
    videoUrl = videoUrl.replace(/\\u0026/g, "&").replace(/\\/g, "");

    let scheme = "senplayer://play?url=" + encodeURIComponent(videoUrl);

    // 通知（可删）
    $notify("Hanime 捕获成功", "点击跳转播放器", videoUrl);

    // 唤起播放器
    $openURL(scheme);
}

$done({});
