// ===== Hanime 自动刷新链接 + 播放 =====

let url = "";

try {

    if (typeof $response !== "undefined") {
        let body = $response.body || "";

        // 抓所有 mp4
        let matches = body.match(/https?:\/\/[^"'\\]+\.mp4[^"'\\]*/g);

        if (matches && matches.length > 0) {

            // 每次都重新选（避免用旧的）
            let best = matches.find(x => x.includes("1080")) 
                    || matches.find(x => x.includes("720")) 
                    || matches[0];

            url = best;
        }
    }

    if (url) {

        let scheme = "senplayer://play?url=" + encodeURIComponent(url) + "&referer=https://hanime1.me";

        $notify("Hanime", "已刷新视频链接（1080P）", url);

        // 👉 直接播放（实时新链接）
        $openURL(scheme);
    }

} catch (e) {
    console.log("error: " + e);
}

$done({});