// // console.log("コンソール1出力");
// // console.log("コンソール2出力");
// // console.log("コンソール3出力");

// //変数の宣言
// let num = 30;
// // 変数の出力
// console.log(num);

// //変数の上書き
// num = 50;
// // 変数の代入
// console.log(num);

// //定数の宣言
// const MESSAGE="定数メッセージ";
// //定数の出力
// console.log(MESSAGE);
// //定数の上書き
// //MESSAGE = "定数メッセージの上書き";
// //定数の出力
// console.log(MESSAGE);

// console.log(typeof 10);
// console.log(typeof "こんにちは");
// console.log(typeof true);

// // 関数の定義
// function greet(name){
//     console.log(name + "さん、こんにちは");
// }

// // 関数の呼び出し
// greet("山田");
// greet("鈴木");

// console.log(document.getElementById("menu"));
// //document.getElementById("menu").textContent = "MENUの書き換え";

// function menuClick(){
//     document.getElementById("menu").textContent="クリックされました";
// }

// //クリックイベント
// document.getElementById("menu").onclick = menuClick;

// function menuMouseOver(){
//     document.getElementById("menu").textContent = "マウスオーバーされました";
// }

// // マウスオーバーイベント
// document.getElementById("menu").onmouseover = menuMouseOver;

// //スタイルの操作をおこなう関数の定義
// function headerMouseOver(){
//     document.getElementById("header").style.color="red";
// }

// document.getElementById("header").onmouseover=headerMouseOver;

// // クラスの追加・削除をおこなう関数の定義
// function headerOnClick(){
//     document.getElementById("header").classList.toggle("clicked");
// }

// //classの追加・削除をおこなう関数の呼び出し
// document.getElementById("header").onclick=headerOnClick;

// //モーダルを表示する関数の定義
// function modalOpen() {
//     document.getElementById("modal").style.display = "block";
// };

// //送信ボタンをクリックしたときにmodalOpen関数を呼び出す
// document.getElementById("submit").onclick = modalOpen;

// //モーダルを非表示にする関数の定義
// function modalClose() {
//     document.getElementById("modal").style.display = "none";
// };

// //モーダル上で戻るボタンをクリックしたときにmodalClose関数を呼び出す
// document.getElementById("modal-close").onclick = modalClose;

// //ページを遷移させる関数の定義
// function modalSubmit() {
//     location = "complete.html";
// };
// //モーダル上で送信ボタンをクリックしたときにmodalSubmit関数を呼び出す
// document.getElementById("modal-submit").onclick = modalSubmit;

function menuOpen(){
    document.getElementById("menu").style.display="block";
    document.getElementById("humb-close").style.display = "block";
};

document.getElementById("humb-open").onclick= menuOpen;

function menuClose(){
    document.getElementById("menu").style.display = "none";
}

document.getElementById("humb-close").onclick = menuClose;