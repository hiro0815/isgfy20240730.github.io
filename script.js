function modoru() {
    window.location.href = `index.html?loading=false`;
}

$(window).on('load', function () {
    const urlParams = new URLSearchParams(window.location.search);
    const value = urlParams.get('loading');
    if (value == "false") {
        document.getElementById('splash').style.display = 'none';
    }
    else {
        $("#splash-logo").delay(1200).fadeOut('slow');//ロゴを1.2秒でフェードアウトする記述

        //=====ここからローディングエリア（splashエリア）を1.5秒でフェードアウトした後に動かしたいJSをまとめる
        $("#splash").delay(1500).fadeOut('slow', function () {//ローディングエリア（splashエリア）を1.5秒でフェードアウトする記述

            $('body').addClass('appear');//フェードアウト後bodyにappearクラス付与

        });
        //=====ここまでローディングエリア（splashエリア）を1.5秒でフェードアウトした後に動かしたいJSをまとめる

        //=====ここから背景が伸びた後に動かしたいJSをまとめたい場合は
        $('.splashbg').on('animationend', function () {
            //この中に動かしたいJSを記載
        });
        //=====ここまで背景が伸びた後に動かしたいJSをまとめる
    }

});

const form = document.forms['checklist'];
const qs1 = document.getElementsByName('question1');
const qs2 = document.getElementsByName('question2');
const qs3 = document.getElementsByName('question3');
const btn1 = document.getElementById('button1');
const btn2 = document.getElementById('button2');
const btn3 = document.getElementById('button3');
const score_1 = document.getElementById("score-1");
const message_1_1 = document.getElementById("message1-1");
const message_1_2 = document.getElementById("message1-2");
const mobile = document.getElementById("Mobile-Home-Appliances");
const score_2 = document.getElementById("score-2");
const message_2_1 = document.getElementById("message2-1");
const message_2_2 = document.getElementById("message2-2");
const computer = document.getElementById("Personal-Computers-and-Home-Appliances");
const score_3 = document.getElementById("score-3");
const message_3_1 = document.getElementById("message3-1");
const message_3_2 = document.getElementById("message3-2");
const cloud = document.getElementById("Cloud-Services");


console.log("qs1:", qs1);
console.log("qs2:", qs2);
console.log("qs3:", qs3);

const mes1 = {
    0: '<span style="color:red;">Unacceptable!!</span>',
    20: '<span style="color:red;">Poor!!</span>',
    25: '<span style="color:red;">Poor!!</span>',
    40: '<span style="color:lightblue;">Fair!!</span>',
    50: '<span style="color:lightblue;">Fair!!</span>',
    60: '<span style="color:green;">Good!!</span>',
    75: '<span style="color:green;">Good!!</span>',
    80: '<span style="color:gold;">Excellent!!</span>',
    100: '<span style="color:gold;">Perfect!!</span>'
};

const mes2 = {
    0: '危機感を持ちながら学んでいきましょう。 (詳細は矢印をクリック！)',
    20: '真剣に学んでいきしょう。 (詳細は矢印をクリック！)',
    25: '真剣に学んでいきしょう。 (詳細は矢印をクリック！)',
    40: '何をすべきかもう１度考えてみよう！ (詳細は矢印をクリック！)',
    50: '何をすべきかもう１度考えてみよう！ (詳細は矢印をクリック！)',
    60: 'いい感じです！学んでいきましょう！ (詳細は矢印をクリック！)',
    75: 'いい感じです！学んでいきましょう！ (詳細は矢印をクリック！)',
    80: '惜しい！あともう少し！この調子で100％目指して学んでいきましょう！ (詳細は矢印をクリック！)',
    100: '対策方法を完全に熟知していてすごい！周りの人にも広めてあげてください！ (詳細は矢印をクリック！)',
};

if (btn1 != null) {
    btn1.addEventListener('click', () => {
        let num = 0;
        for (const i of qs1) {
            if (i.checked) {
                num += parseInt(i.value);
            }
        }
        score_1.innerHTML = '<span class="score-1">' + num + '</span>%';
        message_1_1.innerHTML = mes1[num];
        message_1_2.innerHTML = mes2[num];
        mobile.innerHTML = '<img class="arrow-img" src="img/arrow.jpg" alt="矢印">'
        console.log("点数：", num);
    });
}

if (btn2 != null) {
    btn2.addEventListener('click', () => {
        let num = 0;
        for (const i of qs2) {
            if (i.checked) {
                num += parseInt(i.value);
            }
        }
        score_2.innerHTML = '<span class="score-2">' + num + '</span>%';
        message_2_1.innerHTML = mes1[num];
        message_2_2.innerHTML = mes2[num];
        computer.innerHTML = '<img class="arrow-img" src="img/arrow.jpg" alt="矢印">'
        console.log("点数：", num);
    });
}

if (btn3 != null) {
    btn3.addEventListener('click', () => {
        let num = 0;
        for (const i of qs3) {
            if (i.checked) {
                num += parseInt(i.value);
            }
        }
        score_3.innerHTML = '<span class="score-2">' + num + '</span>%';
        message_3_1.innerHTML = mes1[num];
        message_3_2.innerHTML = mes2[num];
        cloud.innerHTML = '<img class="arrow-img" src="img/arrow.jpg" alt="矢印">'
        console.log("点数：", num);
    });
}

// // ここからスクロールのJS
//スクロールした際の動きを関数でまとめる
function PageTopCheck() {
    console.log("スクロールの４");
    var winScrollTop = $(this).scrollTop();
    var secondTop = $("#area-2").offset().top - 150; //#area-2の上から150pxの位置まで来たら
    if (winScrollTop >= secondTop) {
        $('.js-scroll').removeClass('scroll-view');//.js-scrollからscroll-viewというクラス名を除去
        $('.js-pagetop').addClass('scroll-view');//.js-pagetopにscroll-viewというクラス名を付与
    } else {//元に戻ったら
        $('.js-scroll').addClass('scroll-view');//.js-scrollからscroll-viewというクラス名を付与
        $('.js-pagetop').removeClass('scroll-view');//.js-pagetopからscroll-viewというクラス名を除去
    }

}

//クリックした際の動き
$('.scroll-top a').click(function () {

    var elmHash = $(this).attr('href'); //hrefの内容を取得
    if (elmHash == "#area-2") {//もし、リンク先のhref の後が#area-2の場合
        var pos = $(elmHash).offset().top;
        $('body,html').animate({ scrollTop: pos }, pos); //#area-2にスクロール
    } else {
        $('body,html').animate({ scrollTop: 0 }, 500); //それ以外はトップへスクロール。数字が大きくなるほどゆっくりスクロール
    }
    return false;//リンク自体の無効化
});

// 画面をスクロールをしたら動かしたい場合の記述
$(window).scroll(function () {
    PageTopCheck();/* スクロールした際の動きの関数を呼ぶ*/
});

// // ページが読み込まれたらすぐに動かしたい場合の記述
$(window).on('load', function () {
    PageTopCheck();/* スクロールした際の動きの関数を呼ぶ*/
});
// // ここまでスクロールのJS