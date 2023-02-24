/*
The MIT License (MIT)

Copyright (c) 2023 Sean Leitch | Keyelo
*/


function hideDivByDefault() { document.getElementById("div-encrypted").style.display = "none" }

function hideDivByDefault2() { document.getElementById("div-decrypted").style.display = "none" }

function showEncryptedText() {
    var e = $("#keyN1").val(),
        t = $("#keyN2").val(),
        n = document.getElementById("div-encrypted");
    document.getElementById("pShowKeyToUser").innerHTML = "Con las llaves: (" + e + "," + t + ")", "none" === n.style.display ? n.style.display = "block" : n.style.display = "none", encryptText()
}

function encryptText() {
    var e = new XMLHttpRequest;
    e.open("GET", "https://keyelo.github.io/Yonose/key/wydor.txt"), e.onload = function() {
        var t = e.responseText;
        var n = t + t + t,
            o = $("#keyN1").val(),
            l = $("#keyN2").val();
        "A" == l ? ENC_keyN2num = 1 : "B" == l ? ENC_keyN2num = 2 : "C" == l ? ENC_keyN2num = 3 : "D" == l ? ENC_keyN2num = 4 : "E" == l ? ENC_keyN2num = 5 : "F" == l ? ENC_keyN2num = 6 : "G" == l ? ENC_keyN2num = 7 : "H" == l ? ENC_keyN2num = 8 : "I" == l ? ENC_keyN2num = 9 : "J" == l ? ENC_keyN2num = 10 : "K" == l ? ENC_keyN2num = 11 : "L" == l ? ENC_keyN2num = 12 : "M" == l ? ENC_keyN2num = 13 : "N" == l ? ENC_keyN2num = 14 : "O" == l ? ENC_keyN2num = 15 : "P" == l ? ENC_keyN2num = 16 : "Q" == l ? ENC_keyN2num = 17 : "R" == l ? ENC_keyN2num = 18 : "S" == l ? ENC_keyN2num = 19 : "T" == l ? ENC_keyN2num = 20 : "U" == l ? ENC_keyN2num = 21 : "V" == l ? ENC_keyN2num = 22 : "W" == l ? ENC_keyN2num = 23 : "X" == l ? ENC_keyN2num = 24 : "Y" == l ? ENC_keyN2num = 25 : "Z" == l ? ENC_keyN2num = 26 : "\xd1" == l && (ENC_keyN2num = 27);
        var a = $("#cypher").val(),
            y = (3 * o + 7 * ENC_keyN2num) % t.length,
            r = "";
        for (i = 0; i < a.length; i++) {
            var s = a[i],
                d = s == s.toLowerCase();
            s = s.toLowerCase();
            var v = t.indexOf(s);
            if (-1 == v) r += s;
            else {
                var p = n[v = v + y + t.length];
                d && (p = p.toLowerCase()), r += p
            }
        }
        $("#finish").val(r)
    }, e.send()
}

function showDecryptedText() { decryptText(); var e = document.getElementById("div-decrypted"); "none" === e.style.display ? (decryptText(), e.style.display = "block") : e.style.display = "none" }

function decryptText() {
    var e = new XMLHttpRequest;
    e.open("GET", "https://keyelo.github.io/Yonose/key/wydor.txt"), e.onload = function() {
        var t = e.responseText;
        var n = t + t + t,
            o = $("#keyN1").val(),
            l = $("#keyN2").val();
        "A" == l ? keyN2num = 1 : "B" == l ? keyN2num = 2 : "C" == l ? keyN2num = 3 : "D" == l ? keyN2num = 4 : "E" == l ? keyN2num = 5 : "F" == l ? keyN2num = 6 : "G" == l ? keyN2num = 7 : "H" == l ? keyN2num = 8 : "I" == l ? keyN2num = 9 : "J" == l ? keyN2num = 10 : "K" == l ? keyN2num = 11 : "L" == l ? keyN2num = 12 : "M" == l ? keyN2num = 13 : "N" == l ? keyN2num = 14 : "O" == l ? keyN2num = 15 : "P" == l ? keyN2num = 16 : "Q" == l ? keyN2num = 17 : "R" == l ? keyN2num = 18 : "S" == l ? keyN2num = 19 : "T" == l ? keyN2num = 20 : "U" == l ? keyN2num = 21 : "V" == l ? keyN2num = 22 : "W" == l ? keyN2num = 23 : "X" == l ? keyN2num = 24 : "Y" == l ? keyN2num = 25 : "Z" == l ? keyN2num = 26 : "\xd1" == l && (keyN2num = 27);
        var a = $("#cypher").val(),
            y = 3 * o + 7 * keyN2num,
            a = $("#cypher").val(),
            r = -Math.abs(y);
        r %= t.length;
        var s = "";
        for (i = 0; i < a.length; i++) {
            var d = a[i],
                v = d == d.toLowerCase();
            d = d.toLowerCase();
            var p = t.indexOf(d);
            if (-1 == p) s += d;
            else {
                var c = n[p = p + r + t.length];
                v && (c = c.toLowerCase()), s += c
            }
        }
        $("#finish").val(s)
    }, e.send()
}

function copyText() {
    var e = document.getElementById("finish");
    e.select(), e.setSelectionRange(0, 99999), document.execCommand("copy")
}

function textCopiedAlert() {
    var e, t = document.getElementById("keyN1").value;
    alert("El texto encriptado se ha copiado al portapapeles \n\nRecuerda tu par de llaves \n \nLLAVES: (" + t + "," + document.getElementById("keyN2").value + ")")
}