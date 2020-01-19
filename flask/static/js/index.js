// 変数について
// var a;
// a = 20;
// console.log(a);
// -------------------------------------------
// 変数宣言の省略した書き方
// var a = 20;
// console.log(a);
// var a = "Hello World";
// console.log(a);
// -------------------------------------------
// 変数の再代入について
// var a = 20;
// a = 100;
// console.log(a);
// -------------------------------------------
// 演算について
// 足し算
// var a = 1 + 1;
// console.log(a);
// 引き算
// var a = 1 - 1;
// console.log(a);
// 掛け算
// var a = 1 * 3;
// console.log(a);
// 割り算
// var a = 12 / 3;
// console.log(a);
// 余り
// var a = 12 % 5;
// console.log(a);
// -------------------------------------------
// インクリメント、デクリメントについて
// 後置インクリメント演算子
// var num1 = 7;
// var num2;
// num2 = num1++;
// console.log(num1); /* 8を表示 */
// console.log(num2); /* 7を表示 */
// -------------------------------------------
// 後置きインクリメント演算子の厳密な動き
// var num1 = 7;
// var num2;
// num2 = num1;
// num1 = num1 + 1;
// console.log(num1); /* 8を表示 */
// console.log(num2); /* 7を表示 */
// -------------------------------------------
// 前置インクリメント演算子
// var num1 = 7;
// var num2;
// num2 = ++num1;
// console.log(num1); /* 8を表示 */
// console.log(num2); /* 8を表示 */
// -------------------------------------------
// 前置インクリメント演算子の厳密な動き
// var num1 = 7;
// var num2;
// num1 = num1 + 1;
// num2 = num1;
// console.log(num1); /* 8を表示 */
// console.log(num2); /* 8を表示 */
// -------------------------------------------
// インクリメント代入演算子
// var i = 1;
// i += 1;
// console.log(i); // 2が表示される
// +=という書き方で左の値に右の値を足して代入という動きになります。
// -------------------------------------------
// インクリメント代入演算子の厳密な動き
// var i = 1;
// i = i + 1;
// console.log(i); // 2が表示される
// -------------------------------------------
// typeについて
// typeは、データの型を意味します。
// 分かりやすく説明すると、データの種類になります。
// データの種類
// 数値、文字列、未定義、Null、未定義、関数オブジェクト などが代表する型になります。
// 型を判定したい場合は、typeof 値; でtypeを確認する事ができます。
// 数値
// var a = 1;
// console.log(typeof a);
// // 文字列
// var b = "こんにちは";
// console.log(typeof b);
// // 未定義
// var c;
// console.log(typeof c);
// // 値がない状態
// var d = null;
// console.log(typeof d);
// // 真偽値
// var e = 20 === 10;
// var f = 30 !== "20";
// console.log(e);
// console.log(f);
// console.log(typeof e);
// console.log(typeof f);
// // 関数オブジェクト
// var g = function() {};
// console.log(typeof g);
// -------------------------------------------
// 比較演算子（True or False）について
// // 左辺より右辺が大きい
// var x = 20 < 10;
// console.log("20 < 10は" + x);
// // 左辺より右辺が大きいか同じ
// var x = 20 <= 20;
// console.log("20 <= 20は" + x);
// // 左辺が右辺よりも大きい
// var x = 20 > 30;
// console.log("20 > 30は" + x);
// // 左辺が右辺より大きいか同じ
// var x = 20 >= 30;
// console.log("20 >= 30は" + x);
// // 左辺と右辺の値が同じ
// var x = 100 == "100";
// console.log("100 == 100は" + x);
// // 左辺と右辺の値と型がおなじ
// var x = 100 === "100";
// console.log("100 === 100は" + x);
// // 左辺と右辺が異なる
// var x = 50 != "100";
// console.log("50 != 100は" + x);
// // 左辺と右辺の値と型が異なる
// var x = 200 !== 100;
// console.log("200 !== 100は" + x);
// -------------------------------------------
// 論理演算子（or and not）について
// or
// var x = 20;
// var y = x < 40 || x > 30;
// console.log("真偽値は" + y);
// and
// var x = 100;
// var y = x < 200 && x > 50;
// console.log("真偽値は" + y);
// not
// notは値の否定（~でない）を返す。True, Falseが反転する。
// var x = 10;
// var y = !(x > 20);
// console.log("真偽値は" + y);
// // -------------------------------------------
// 配列（Array）について
// 配列という値の扱いは、値が多い場合や、ある値の塊から特定の値を取り出したい時などに配列を使用します。
// 配列は、[]を使用して値を扱います。
// var a = [1, 2, 3];
// 配列の中身は、値と呼びます。
// console.log(a);
// -------------------------------------------
// 配列（Array）へのアクセス
// 配列の中身はインデックスという番号がふられています。
// 一番左から、0,1,2,3...という風にインデックスがふられています。
//                     0         1           2           3
// var first_name = ["sato", "watanabe", "yamasaki", "wakamatu"];
// 配列の中身の取り出し方、参照のやり方は、配列が代入されている変数[]という書き方をして、[]の中にインデックス番号を指定してあげると、取り出してくれます。
// console.log(first_name[0]);
// -------------------------------------------
// 配列（Array）の値の更新
// var first_name = ["sato", "watanabe", "yamasaki", "wakamatu"];
// first_name[0] = "mikihito";
// console.log(first_name);
// -------------------------------------------
// 配列（Array）の先頭に値を追加
// var first_name = ["sato", "watanabe", "yamasaki", "wakamatu"];
// first_name.unshift("mikihito");
// console.log(first_name);
// -------------------------------------------
// 配列（Array）の末尾に値を追加
// var first_name = ["sato", "watanabe", "yamasaki", "wakamatu"];
// first_name.push("mikihito");
// console.log(first_name);
// -------------------------------------------
// 配列（Array）の先頭の値を削除
// var first_name = ["sato", "watanabe", "yamasaki", "wakamatu"];
// first_name.shift();
// console.log(first_name);
// -------------------------------------------
// 配列（Array）の末尾の値を削除
// var first_name = ["sato", "watanabe", "yamasaki", "wakamatu"];
// first_name.pop();
// console.log(first_name);
// -------------------------------------------
// 連想配列（Object）について
// 連想配列はデータと文字列を関連づけて管理できるため、データの管理がしやすいというメリットがあります。
// 連想配列は、{}を使用して値を扱います。
// {}の中身は、{key:value}という形になります。
// var my_profile = {
//   first_name: "sato",
//   last_name: "mikihito",
//   age: "23",
//   city: "miyazaki"
// };
// console.log(my_profile);
// -------------------------------------------
// 連想配列（Object）へのアクセス
// var my_profile = {
//   first_name: "sato",
//   last_name: "mikihito",
//   age: "23",
//   city: "miyazaki"
// };
// console.log(my_profile["last_name"]);
// -------------------------------------------
// 連想配列（Object）の値の更新
// var my_profile = {
//   first_name: "sato",
//   last_name: "mikihito",
//   age: "23",
//   city: "miyazaki"
// };
// my_profile["last_name"] = "taketosi";
// console.log(my_profile);
// -------------------------------------------
// 連想配列（Object）の値の追加
// var my_profile = {
//   first_name: "sato",
//   last_name: "mikihito",
//   age: "23",
//   city: "miyazaki"
// };
// my_profile["country"] = "japan";
// console.log(my_profile);
// -------------------------------------------
// 連想配列（Object）の値の削除
// var my_profile = {
//   first_name: "sato",
//   last_name: "mikihito",
//   age: "23",
//   city: "miyazaki"
// };
// delete my_profile["city"];
// console.log(my_profile);
// -------------------------------------------
// 関数とは
// 定められた一連の処理を定義すること。
// 定められた一連の処理を「関数」として定義して、その関数を呼び出すと一連の処理が実行されるという仕組みです。
// -------------------------------------------
// 関数宣言
// 今回は、値の合計値を算出してくれる関数を作成します。
// function add() {
//     処理
// }
// -------------------------------------------
// returnとは(戻り値)
// function add() {
//   var x = 1;
//   var y = 2;
//   return x + y;
// }
// console.log(add());
// -------------------------------------------
// 引数とは
// function add(x, y) {
//   return x + y;
// }
// console.log(add(1, 5));
// -------------------------------------------
// if文とは
// ifとは
// var x = 100;
// if (x > 50) {
//   console.log("xは50より大きい");
// }
// -------------------------------------------
// elseとは
// var x = 10;
// if (x > 50) {
//   console.log("xは50より大きい");
// } else {
//   console.log("xは50より小さい");
// }
// -------------------------------------------
// if elseとは
// var x = 30;
// if (x > 50) {
//   console.log("xは50より大きい");
// } else if (x === 30) {
//   console.log("xは30");
// } else {
//   console.log(false);
// }
// -------------------------------------------
// swhich文
// if文の省略した書き方
// var x = 30;
// switch (x) {
//   case x > 50:
//     console.log("xは50より大きい");
//     break;
//   case 30:
//     console.log("xは30");
//     break;
//   default:
//     console.log(false);
// }
// -------------------------------------------
// while文（繰り返し処理）とは
// while文は指定した条件式が真の間、処理を繰り返し実行します
// 繰り返し回数が決まっていない場合はwhile文
// var x = 0;
// while (x < 10) {
//   console.log("xは10ではない");
//   x = x + 1;
// }
// // -------------------------------------------
// for文とは（繰り返し処理）とは
// 繰り返し回数が決まっている場合はfor文、、、だけど公式でforがあればwhileがいらない子らしい。。。
// var lists = ["佐藤", "伊藤", "鈴木", "木村", "田中", "高橋"];

// for (var i = 0; i < lists.length; i++) {
//   console.log(lists[i]);
// }
// -------------------------------------------
// DOM操作
// DOMからidがtitleの要素を取得してみよう。
// var h1 = document.getElementById("title");
// console.log(h1);
// -------------------------------------------
// DOMのid="title"のテキストを取得してみよう。
// var h1 = document.getElementById("title");
// var title = h1.textContent;
// console.log(title);
// -------------------------------------------
// DOMのid = "title"のテキストを変更してみよう。
// var h1 = document.getElementById("title");
// h1.textContent = "テキスト変更";
// console.log(h1);
// -------------------------------------------
// DOMのid = "title"のテキストにCSSを追加してみよう。
// var h1 = document.getElementById("title");
// h1.style.borderBottom = "solid 10px red";
// -------------------------------------------
// DOMからclassがflex_domの要素を取得してみよう。
// var class_elements = document.getElementsByClassName("flex_dom");
// console.log(class_elements);
// idの時は、htmlファイルの中にid名が被ることはないので、そのまま変数名を実行すれば要素が取得できたが、
// classは同じ名前がある可能性があるので下記のようにインデックスを指定しなければいけない。
// console.log(class_elements[0]);
// -------------------------------------------
// DOMからタグの要素を取得してみよう。
// var tag = document.getElementsByTagName("div");
// console.log(tag);
// -------------------------------------------
// DOMからsec3のh3タグを指定して要素を取得しよう。
// var selector = document.querySelector(".sec3 h3");
// console.log(selector);
// -------------------------------------------
// DOMから指定したセレクタの要素を全て取得しよう.今回は、sec1__flex__boxを指定
// var all_selector = document.querySelectorAll(".sec1__flex__box");
// console.log(all_selector);
// -------------------------------------------
// DOMからclassがflex_domの要素に新しく子要素を取得してみよう。
// var div = document.createElement("div");
// div.textContent = "最後の子要素として追加";
// document.getElementsByClassName("flex_dom")[0].appendChild(div);
// -------------------------------------------
//特定の子要素削除
// classがsec1の子要素にあるclassがflex_domの要素を削除
// var sec1 = document.getElementsByClassName("sec1");
// var flex_dom = document.getElementsByClassName("flex_dom");
// sec1[0].removeChild(flex_dom[0]);
// -------------------------------------------
// 関数とメソッドの違い
// 先ほどのdocument.getElementById()のducumentとgetElementByIdについて説明します。
// documentはオブジェクトの一種で、documentという箱と認識してくれれば大丈夫です。
// getElementById()はdocumentオブジェクトの中にある関数（メソッド）という認識になります。
// ここでは、関数とメソッドの違いについて説明します。
// 関数
// function showlog() {
//   console.log("これは関数です");
// }
// showlog();

// メソッド
// var obj = {
//   showlog: function () {
//     console.log("これはメソッドです");
//   }
// };
// obj.showlog();
// -------------------------------------------
// windowオブジェクトとは
// Windowオブジェクトは、画面上に表示されているすべてのオブジェクトの親となるオブジェクトであり、JavaScriptのオブジェクト階層の最上位に位置する。
// クライアントサイドJavaScriptの階層構造で最上位に位置するオブジェクトが Windowオブジェクトで、クライアントサイドJavaScriptが起動するタイミングで自動的に生成されます。
// ドキュメントを表示するウィンドウに対応するのがWindowオブジェクトで、HTMLドキュメントに対応するのがDocumentオブジェクトになります。
// console.log(window);
// -------------------------------------------
// documentオブジェクトとは
// ドキュメントを表示するウィンドウに対応するのがWindowオブジェクトで、HTMLドキュメントに対応するのがDocumentオブジェクトになります。
// console.log(document);
// -------------------------------------------
// windowオブジェクトの省略
// windowオブジェクトは、javascriptでは特殊な扱い担っており、windowオブジェクトの下層のプロパティにアクセスする際は、windowは省略できます。
// つまり、console.log()も本来window.console.log()という書き方になるということです。
// window.console.log("どうだ");
// -------------------------------------------
// 属性の取得 (存在しない場合はnullもしくは空文字を返す)
// var sec4_class = document.getElementsByClassName("sec4_src");
// var img_src = sec4_class[0].getAttribute("src");
// console.log(img_src);
// -------------------------------------------
// classの追加
// var id_title = document.getElementById("title");
// id_title.classList.add("hogehoge");
// classの削除
// id_title.classList.remove("hogehoge");
// -------------------------------------------
// イベントリスナーを利用したタイトル変更
// var title_change = document.getElementById("change_button");
// title_change.addEventListener("click", function() {
//   var h1 = document.getElementById("title");
//   h1.textContent = "タイトルチェンジ";
// });
// -------------------------------------------
// イベントリスナーを利用したクラスの追加&色変更
// var title_change = document.getElementById("change_button");
// title_change.addEventListener("click", function() {
//   var h1 = document.getElementById("title");
//   h1.classList.add("hogehoge");
// });
// -------------------------------------------
// イベントリスナーを利用したクラスの削除
// var title_change = document.getElementById("change_button");
// title_change.addEventListener("click", function() {
//   var h1 = document.getElementById("title");
//   h1.classList.remove("programming__title");
// });
// -------------------------------------------
// イベントリスナーを利用したCSSの追加
// var title_change = document.getElementById("change_button");
// title_change.addEventListener("click", function() {
//   var h1 = document.getElementById("title");
//   h1.style.borderBottom = "solid 10px red";
// });
// --------------------------------------------------------------------------------------------------
// Jquery
// --------------------------------------------------------------------------------------------------
$(function() {
  //   元々のjqueryの書き方
  //   $(document).ready(function () {
  //       // 処理
  //   });
  //   -------------------------------------------
  //   省略した書き方
  //   $(function() {
  //       // 処理
  //   });
  //   -------------------------------------------
  //   要素の取り方
  //   $("セレクタ名")←これだけで要素を取得できる
  //   console.log($("body"));
  //   console.log($("p"));
  //   console.log($("#title"));
  // console.log($(“.flex_dom”));
  //   -------------------------------------------
  //   イベントリスナーの書き方
  //   $("セレクタ名").メソッド名("イベント名,function(){処理内容};");
  //   -------------------------------------------
  //   jqueryでの最初の簡単な書き方
  //   .onメソッドは、JavascriptでHTMLを書き換えたりしたあとの要素もJqueryで操作できるようにするためのメソッドです。
  //   Progateでの書き方は、onがなくイベント名が書かれていましたが、.onを使っていた方が安全なのでそちらを使用してください。
  //   ボタンをクリックするたび、コンソールにボタンがクリックされましたという文字が出力される。
  // $("#change_button").on("click", function() {
  //   console.log("ボタンがクリックされました");
  // });
  //   -------------------------------------------
  //   ボタンをクリックしたら、id="title"のテキストを更新する
  // $("#change_button").on("click", function() {
  //   $("#title").text("テキスト変更");
  // });
  //   -------------------------------------------
  //   ボタンをクリックすると、titleの色が赤色になり、aタグの色が青色になる
  //   $("#change_button").on("click", function() {
  //     $("#title").css("color", "red");
  //   });
  //   -------------------------------------------
  //   ボタンをクリックすると、色を赤色に、テキストを更新する
  //   $("#change_button").on("click", function() {
  //     $("#title")
  //       .css("color", "red")
  //       .text("タイトル変更");
  //   });
  //   -------------------------------------------
  //    ボタンをクリックしたら、指定した要素にクラスを追加する
  //   hogehogeクラスは先にstyle.cssに記述しているため、ボタンをクリックしたら青色になる
  //   $("#change_button").on("click", function() {
  //     $("#title").addClass("hogehoge");
  //   });
  //   -------------------------------------------
  //    ボタンをクリックしたら、指定した要素のクラスを削除する
  //   $("#change_button").on("click", function() {
  //     $("#title").removeClass();
  //   });
  //   -------------------------------------------
  //   ボタンをクリックしたら、pタグにhogehogeクラスがON,OFFする
  //   $("#change_button").on("click", function() {
  //     $("p").toggleClass("hogehoge");
  //   });
  //   -------------------------------------------
  //   ボタンをクリックしたら、aタグのhrefが全てgoogle.comのURLに変わる
  //   $("#change_button").on("click", function() {
  //     $("a").attr("href", "https://www.google.com/");
  //   });
  //   -------------------------------------------
  //   HTMLにformタグ作成、inputのテキスト、inputのsubmitタグを作成する
  //   inputの内容が送信されたら、アラート画面が出現する
  //   $("form").on("submit", function() {
  //     alert("inputの内容が送信されました");
  //   });
  //   -------------------------------------------
  //   header要素にマウスが触れると、そのheader要素がフェードアウトする
  //   $("header").on("mouseover", function() {
  //     $(this).fadeOut(1000);
  //   });
  //   -------------------------------------------
  //   flexの文字にカーソルを載せると文字の大きさが小さくなり、カーソルを外すと文字の大きさが戻る
  //   $(".flex_dom").hover(
  //   function() {
  //     $(this).css("font-size", "3rem");
  //   },
  //   function() {
  //     $(this).css("font-size", "5rem");
  //   }
  //   );
  //   ------------------------------------------------------------------------------------------------------------------
  // 課題
  // 問1
  // flexのセクション内にボタンを追加して、そのボタンをクリックしたら、flexのboxを１つふやす（増やした際、見た目が崩れないようにしてください）
  $("#flex_add_button").on("click", function() {
    var sec1_flex_box = $(".sec1__flex__box").clone()[0];
    $(".sec1__flex").append(sec1_flex_box);
  });
  // 問2
  // portfolioのセクションにボタンを追加して、そのボタンをクリックしたら、portfolioの画像が全部sea.jpgの画像に更新される
  $("#change_image").on("click", function() {
    $("img").attr("src", "../static/image/sea.jpg");
  });
  // 問3
  // header内のリンクをクリックした時、そのリンクの行き先にスクロールして画面が移動する
  $("#flexbox").on("click", function() {
    var sec1_position = $(".sec1").offset().top;
    $("html").animate({ scrollTop: sec1_position - 100 });
  });
  $("#about").on("click", function() {
    var sec1_position = $(".sec2").offset().top;
    $("html").animate({ scrollTop: sec1_position });
  });
  $("#skill").on("click", function() {
    var sec1_position = $(".sec3").offset().top;
    $("html").animate({ scrollTop: sec1_position });
  });
  $("#portfolio").on("click", function() {
    var sec1_position = $(".sec4").offset().top;
    $("html").animate({ scrollTop: sec1_position - 100 });
  });
  // 問4
  // ページの一番下にTOPに戻るボタンを設置して、そのボタンをクリックしたら一番上に移動する
  $("#top_move").on("click", function() {
    // html要素を取得、scrolltop（上から）、0の位置にanimate（移動）する
    $("html").animate({ scrollTop: 0 });
  });
  //   -------------------------------------------------------------------------------------------------------------------
  // 特別課題
  // ハンバーガーメニューの追加

  $(".btn-trigger").on("click", function() {
    $(this).toggleClass("active");
    $("header").toggleClass("hum_header");
  });
  //   -------------------------------------------------------------------------------------------------------------------

  // FadeThisプラグインの読み込み
  $(window).fadeThis();
  $(".drawer").drawer();
  // TOPに戻るメニュー
  $("#top").on("click", function() {
    $("html").animate({ scrollTop: 0 });
  });
});
