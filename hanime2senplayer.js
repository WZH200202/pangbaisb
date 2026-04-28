// ===== Hanime HTML解析版 =====

let body = $response.body;

// 提取1080p mp4
let match = body.match(/https:\/\/vdownload\.hembed\.com\/.*1080p.*\.mp4.*/);

if (match) {

    let url = match[0];

    console.log("🎯 提取到视频:", url);

    let playUrl = "SenPlayer://x-callback-url/play?url=" + encodeURIComponent(url);

    $notify("Hanime", "点击播放", "1080P", {
        "open-url": playUrl
    });
}

$done({});