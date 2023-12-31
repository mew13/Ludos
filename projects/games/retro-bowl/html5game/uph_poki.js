function poki_init_raw() {
    console.log("Poki wrapper init");
    var o = document.getElementById("gm4html5_div_id");
    return o && !o.frames && (o.frames = []), 0
}

function poki_script_closure_raw(o, i, r, t) {
    return function(a) {
        window.gml_Script_gmcallback_poki_closure(o, i, r, a, t)
    }
}

function poki_is_blocked() {
    return !window.PokiSDK_OK
}

function poki_gameplay_start() {
    PokiSDK && PokiSDK.gameplayStart()
}

function poki_gameplay_stop() {
    PokiSDK && PokiSDK.gameplayStop()
}

function poki_happy_time(o) {
    PokiSDK && PokiSDK.happyTime(o)
}

function poki_commercial_break_raw(o) {
    PokiSDK ? PokiSDK.commercialBreak().then((function() {
        o(!0)
    })) : setTimeout((function() {
        o(!1)
    }), 0)
}

function poki_rewarded_break_raw(o) {
    PokiSDK ? PokiSDK.rewardedBreak().then(o) : setTimeout((function() {
        o(!1)
    }), 0)
}
console.log("Poki wrapper load");
var inst = {};

function poki_loadbar(o, i, r, t, a, e) {
    function n(o) {
        return window.gml_Script_gmcallback_poki_loadbar ? window.gml_Script_gmcallback_poki_loadbar(inst, null, o, a, t, i, r, e ? e.width : 0, e ? e.height : 0) : void 0
    }

    function l(o, i) {
        var r = n(o);
        return "number" == typeof r ? r : i
    }

    function _(o, i) {
        var r = n(o);
        if ("number" == typeof r) {
            for (r = r.toString(16); r.length < 6;) r = "0" + r;
            return "#" + r
        }
        return "string" == typeof r ? r : i
    }
    window.PokiSDK && (0 == window.PokiSDK_loadState && (window.PokiSDK_loadState = 1, PokiSDK.gameLoadingStart()), PokiSDK.gameLoadingProgress({
        percentageDone: a / t
    }), a >= t && 2 != window.PokiSDK_loadState && (window.PokiSDK_loadState = 2, PokiSDK.gameLoadingFinished()));
    var c, d, k, u, f = _("background_color", "#FFFFFF"),
        p = _("bar_background_color", "#FFFFFF"),
        S = _("bar_foreground_color", "#242238"),
        g = _("bar_border_color", "#242238"),
        m = l("bar_width", Math.round(.6 * i)),
        w = l("bar_height", 20),
        b = l("bar_border_width", 2),
        P = l("bar_offset", 10);
    if (o.fillStyle = f, o.fillRect(0, 0, i, r), null != e) {
        var s = (u = n("image_rect")) && u.constructor == Array ? u : k;
        s || (s = [0, 0, e.width, e.height]), c = s[3] + P + w;
        var D = r - c >> 1;
        o.drawImage(e, s[0], s[1], s[2], s[3], i - s[2] >> 1, D, s[2], s[3]), d = D + s[3] + P
    } else d = r - w >> 1;
    var K = i - m >> 1;
    o.fillStyle = g, o.fillRect(K, d, m, w);
    var h = K + b,
        y = d + b,
        F = m - 2 * b,
        v = w - 2 * b;
    o.fillStyle = p, o.fillRect(h, y, F, v);
    var R = Math.round(F * a / t);
    o.fillStyle = S, o.fillRect(h, y, R, v)
}