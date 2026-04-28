// ===== Hanime → 调用 insav 播放 =====

let url = $request.url;

if (url.includes("1080p")) {

    console.log("🎯 捕获MP4: " + url);

    // 👇 关键：写入 BoxJS 变量（insav会读取）
    $prefs.setValueForKey(url, "insav_video_url");

    // 👇 触发 insav（通过通知点击）
    $notify("Hanime", "点击调用播放器", "1080P已捕获", {
        "open-url": "insav://play"
    });
}

$done({});