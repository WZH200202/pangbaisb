// ===== Hanime → SenPlayer（最终稳定版）=====

// 构建播放器URL
function buildPlayerUrl(videoUrl) {
    return "SenPlayer://x-callback-url/play?url=" + encodeURIComponent(videoUrl);
}

// 主逻辑
let url = $request.url;

if (url.includes(".mp4") && url.includes("1080p")) {

    console.log("🎯 捕获MP4: " + url);

    let playUrl = buildPlayerUrl(url);

    console.log("🚀 播放URL: " + playUrl);

    $notify("Hanime", "点击播放", "1080P", {
        "open-url": playUrl
    });
}

$done({});