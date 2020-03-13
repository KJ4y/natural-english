import axios from 'axios'

/*--------------------------------------------------------------------------------
计算TK值：
// a:翻译的内容
// uq:tkk的值
--------------------------------------------------------------------------------*/
function vq(a, uq = '439973.520058499') {
    if (null !== uq)
        var b = uq;
    else {
        b = sq('T');
        var c = sq('K');
        b = [b(), c()];
        b = (uq = window[b.join(c())] || "") || ""
    }
    var d = sq('t');
    c = sq('k');
    d = [d(), c()];
    c = "&" + d.join("") + "=";
    // c = d.join("") + "=";
    d = b.split(".");
    b = Number(d[0]) || 0;
    for (var e = [], f = 0, g = 0; g < a.length; g++) {
        var l = a.charCodeAt(g);
        128 > l ? e[f++] = l : (2048 > l ? e[f++] = l >> 6 | 192 : (55296 == (l & 64512) && g + 1 < a.length && 56320 == (a.charCodeAt(g + 1) & 64512) ? (l = 65536 + ((l & 1023) << 10) + (a.charCodeAt(++g) & 1023),
                    e[f++] = l >> 18 | 240,
                    e[f++] = l >> 12 & 63 | 128) : e[f++] = l >> 12 | 224,
                e[f++] = l >> 6 & 63 | 128),
            e[f++] = l & 63 | 128)
    }
    a = b;
    for (f = 0; f < e.length; f++)
        a += e[f],
        a = tq(a, "+-a^+6");
    a = tq(a, "+-3^+b+-f");
    a ^= Number(d[1]) || 0;
    0 > a && (a = (a & 2147483647) + 2147483648);
    a %= 1000000;
    return c + (a.toString() + "." + (a ^ b))
}
// 参数：a 为你要翻译的原文
// 其他外部函数：
function sq(a) {
    return function () {
        return a
    }
}

function tq(a, b) {
    for (var c = 0; c < b.length - 2; c += 3) {
        var d = b.charAt(c + 2);
        d = "a" <= d ? d.charCodeAt(0) - 87 : Number(d);
        d = "+" == b.charAt(c + 1) ? a >>> d : a << d;
        a = "+" == b.charAt(c) ? a + d & 4294967295 : a ^ d
    }
    return a
}

/*--------------------------------------------------------------------------------
请求TKK值：
--------------------------------------------------------------------------------*/
(() => {
    // var url = 'https://bird.ioliu.cn/v1?url=https://translate.google.cn/';
    // var url = 'https://translate.google.cn';
    var url = 'http://49.234.207.163';


    axios.get(url, {
            transformResponse: [(data) => {
                var tkkval = data.slice(data.indexOf("tkk") + 5, data.indexOf("',experiment"));
                return tkkval;
            }],
        })
        .then((response) => {
            vq('', response.data.toString());
        })
        .catch(function (error) {
            console.log(error);
        });
})();

/*--------------------------------------------------------------------------------
计算URL地址：
--------------------------------------------------------------------------------*/

function url(q) {
    var tk = vq(q);
    // var url =
    //     "https://bird.ioliu.cn/v1?url=https://translate.google.cn/translate_a/single?client=webapp&sl=en&tl=zh-CN&hl=zh-CN&dt=t&dt=ex&dt=md&q=" +
    //     q +
    //     tk;
    var url =
        "http://49.234.207.163/translate_a/single?client=webapp&sl=en&tl=zh-CN&hl=zh-CN&dt=t&dt=ex&dt=md&q=" +
        q +
        tk;
    return url
}
function googleTTS(q) {
    var tk = vq(q);
    var len = q.length + 1;
    // var url =
    //     "https://translate.google.cn/translate_tts?ie=UTF-8&tl=en&client=t&q=" +
    //     q +
    //     tk;
    var url =
        'https://translate.google.cn/translate_tts?ie=UTF-8&tl=en&total=1&idx=0&prev=input&client=webapp' +
        "&textlen=" + len + "&q=" + q + tk;
    return url
}

function tencentTTS(q) {
    var url =
        "https://m.fanyi.qq.com/ttsfile?language=1&platform=H5&text=" +
        q
    return url
}

function baiduTTS(q) {
    var url =
        "https://fanyi.baidu.com/gettts?lan=en&spd=3&source=web&text=" +
        q
    return url
}

function sougouTTS(q) {
    var url =
        "https://fanyi.sogou.com/reventondc/synthesis?speed=1&lang=en&from=translatewap&text=" +
        q
    return url
}


export default {
    url,
    googleTTS,
    tencentTTS,
    baiduTTS,
    sougouTTS
}