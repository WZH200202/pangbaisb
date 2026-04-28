let url = $request.url;

if (url.includes("1080p") && !$prefs.valueForKey("hanime_played")) {

    $prefs.setValueForKey("1", "hanime_played");

    let play = "senplayer://play?url=" + encodeURIComponent(url);

    $notify("Hanime", "点击打开 SenPlayer", "1080P 已捕获", {
        "open-url": play
    });
}

$done({});