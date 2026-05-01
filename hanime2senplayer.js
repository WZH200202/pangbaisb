// ===== Hanime → SenPlayer（MP4直链优化版）=====

let url = "";

try {

    // 1️⃣ 从 HTML 抓所有 mp4
    if (typeof $response !== "undefined") {
        let body = $response.body || "";

        let matches = body.match(/https?:\/\/[^"'\\]+\.mp4[^"'\\]*/g);

        if (matches && matches.length > 0) {
            // 👉 优先选1080
            let best = matches.find(x => x.includes("1080")) 
                    || matches.find(x => x.includes("720")) 
                    || matches[0];

            url = best;
        }
    }

    // 2️⃣ request兜底
    if (!url && typeof $request !== "undefined") {
        if ($request.url.includes(".mp4")) {
            url = $request.url;
        }
    }

    // 3️⃣ 跳播放器
    if (url) {
        let scheme = "senplayer://play?url=" + encodeURIComponent(url);

     $notify("发现视频", "点击播放", "", {
  "open-url": scheme
});
console.log("最终URL: " + scheme );
    }

} catch (e) {
    console.log("error: " + e);
}

// 必须放行页面
$done({});