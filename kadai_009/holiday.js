// 配列の宣言と値の代入
const holidays = ["正月","成人の日","建国記念日","天皇誕生日","春分の日","昭和の日","憲法記念日","みどりの日","こどもの日","海の日","山の日","敬老の日","秋分の日","スポーツの日","文化の日","勤労感謝の日"]

// 配列数を確認（15）
console.log(holidays.length);

// for文を使用し、すべての祝日を出力
for(let i = 0; i <= 15; i++) {
    console.log(holidays[i]);
}


// while文を使用し、すべての祝日を出力
let index = 0;

while( index !== 16) {
    console.log(holidays[index]);
    index++;
}
