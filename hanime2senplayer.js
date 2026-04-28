// ===== Hanime 提取完整视频链接 =====

let finalUrl = "";

try {
    if (typeof $response !== "undefined") {
        let body = $response.body || "";

        // 抓所有 mp4
        let matches = body.match(/https?:\/\/[^"'\\]+\.mp4[^"'\\]*/g);

        if (matches && matches.length > 0) {

            // 优先 1080
            let best = matches.find(x => x.includes("1080")) 
                    || matches.find(x => x.includes("720")) 
                    || matches[0];

            finalUrl = best;
        }
    }

    // 输出
    if (finalUrl) {
        console.log("🎬 视频链接: " + finalUrl);

        $notify(
            "Hanime解析成功",
            "已获取完整视频链接",
            finalUrl
        );
    } else {
        console.log("❌ 未找到视频链接");
    }

} catch (e) {
    console.log("error: " + e);
}

$done({});