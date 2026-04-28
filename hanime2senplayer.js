// ===== Hanime → SenPlayer（稳定跳转+分辨率）=====

let url = "";
let quality = "";

try {
    if (typeof $response !== "undefined") {
        let body = $response.body || "";

        let matches = body.match(/https?:\/\/[^"'\\]+\.mp4[^"'\\]*/g);

        if (matches && matches.length > 0) {

            let best = matches.find(x => x.includes("1080")) 
                    || matches.find(x => x.includes("720")) 
                    || matches[0];

            url = best;

            if (url.includes("1080")) quality = "1080P";
            else if (url.includes("720")) quality = "720P";
            else if (url.includes("480")) quality = "480P";
        }
    }

    if (url) {

        // ✅ 必加 referer（否则很多时候播放失败）
        let scheme = "senplayer://play?url=" 
            + encodeURIComponent(url) ;

        $notify("Hanime", "跳转 SenPlayer（" + quality + "）", url);

        // ✅ 延迟一下再跳（提高成功率）
        setTimeout(() => {
            $openURL(scheme);
        }, 300);
    }

} catch (e) {
    console.log("error: " + e);
}

$done({});