var queryString = document.currentScript.src.replace(/^[^\?]+\??/, '');
var params = parseQuery(queryString);
if (params['id']) {
    var url = ' http://localhost:3000/' + params['id'];
   
    if (params['token']) {
        url += "?token=" + params['token'];
        var iframe = document.createElement("iframe");
        iframe.setAttribute("frameBorder", "0");
        iframe.setAttribute("width", "100%");
        iframe.setAttribute("height", "100%");
        iframe.setAttribute("src", url);
        document.currentScript.parentNode.appendChild(iframe);
    } else {
        console.error("Token not defined in Embed script");
    }
} else {
    console.error("Id not defined in Embed script");
}
function parseQuery(query) {
    var Params = {};
    if (!query) return Params;
    var Pairs = query.split(/[;&]/);
    for (var i = 0; i < Pairs.length; i++) {
        var KeyVal = Pairs[i].split('=');
        if (!KeyVal || KeyVal.length !== 2) continue;
        var key = unescape(KeyVal[0]);
        var val = unescape(KeyVal[1]);
        val = val.replace(/\+/g, ' ');
        Params[key] = val;
    }
    return Params;
}