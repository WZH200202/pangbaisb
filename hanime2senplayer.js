// ===== Hanime + Pear 播放器 =====

const $ = new Env('Hanime Pear');

// ===== 复制自 pear.js 的核心函数 =====
const PLAYER_MAP = {
    "SenPlayer": { scheme: "SenPlayer://x-callback-url/play?url=", needEncode: true }
};

function buildPlayerUrl(videoUrl) {
    let scheme = "SenPlayer://x-callback-url/play?url=";
    return scheme + encodeURIComponent(videoUrl);
}

// ===== 主逻辑 =====
let url = $request.url;

if (url.includes(".mp4") && url.includes("1080p")) {

    console.log("🎯 捕获MP4: " + url);

    let playUrl = buildPlayerUrl(url);

    console.log("🚀 播放URL: " + playUrl);

    $notify("Hanime", "点击播放", "", {
        "open-url": playUrl
    });
}

$done({});