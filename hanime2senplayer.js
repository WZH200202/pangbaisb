// ===== Hanime → SenPlayer（MP4直链专用）=====

let url = $request.url;

if (url.includes(".mp4")) {
    let scheme = "senplayer://play?url=" + encodeURIComponent(url);

    $notify("Hanime", "MP4直链捕获", url);
    $openURL(scheme);
}

$done({});