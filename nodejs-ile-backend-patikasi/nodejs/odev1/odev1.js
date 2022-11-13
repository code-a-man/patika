const [,,yaricap] = process.argv;
const alan = (Math.PI * Math.pow(yaricap, 2)).toFixed(3);
console.log(`Yarıçapı ${yaricap} olan dairenin alanı: ${alan}`);

// ? node odev1.js 5
// ? Yarıçapı 5 olan dairenin alanı: 78.540