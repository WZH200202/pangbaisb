console.log("🔥 Hanime 脚本已触发");
$notify("Hanime", "脚本触发", $request ? $request.url : "no request");

let url = $request.url;

if (url.includes(".mp4")) {
    console.log("🎯 捕获MP4: " + url);

    let scheme = "senplayer://play?url=" + encodeURIComponent(url);
    $openURL(scheme);
}

$done({});