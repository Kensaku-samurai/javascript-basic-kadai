// btnというidを持つHTML要素を取得し定数に代入
const btn = document.getElementById('btn');

//textというidを持つHTML要素を取得し定数に代入
const text = document.getElementById('text');


// html要素がクリックされたときにイベント処理を実行する
btn.addEventListener('click' , () => {
    setTimeout(() => {
        text.textContent = 'ボタンをクリックしました';
    }, 2000)
    
});