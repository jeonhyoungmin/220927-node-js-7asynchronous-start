
// let first = setTimeout(()=>{
//   console.log('첫 번째 setTimeout입니다. 3초뒤에 실행됩니다.');
// }, 3000);
// let second = setTimeout(()=>{
//   console.log('두 번째 setTimeout입니다. 2초뒤에 실행됩니다.');
// }, 2000);
// let third = setTimeout(() => {
//   console.log('세 번째 setTimeout입니다. 1초뒤에 실행됩니다.');
// }, 1000);

// let first = setTimeout(()=>{
//   console.log('첫 번째 setTimeout입니다. 3초뒤에 실행됩니다.');
//   let second = setTimeout(()=>{
//     console.log('두 번째 setTimeout입니다. 2초뒤에 실행됩니다.');
//     let third = setTimeout(() => {
//       console.log('세 번째 setTimeout입니다. 1초뒤에 실행됩니다.');
//       let fourth = setTimeout(()=>{
//         console.log("fourth")
//         let fifth = setTimeout(() => {
//           console.log("fifth");
//         }, 1000)
//       }, 1000)
//     }, 1000);
//   }, 2000);
// }, 3000);



let test = new Promise(function(resolve, reject) {
  console.log(resolve);
  console.log(typeof resolve);
  console.log(typeof reject);
  console.dir(resolve);
});
console.dir(test);
console.log(test);