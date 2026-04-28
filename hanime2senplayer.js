// ===== 带分辨率识别 =====

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
        let scheme = "senplayer://play?url=" + encodeURIComponent(url);

        $notify("Hanime", "当前分辨率：" + quality, url);
        $openURL(scheme);
    }

} catch (e) {}

$done({});