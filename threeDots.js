const ages = [12, 13, 14, 15, 16];
const ages2 = [15, 16, 14, 17, 12];
const ages3 = [25, 35, 20, 29, 22];
const allAges = ages.concat(ages2).concat(ages3);
const allAges2 =[...ages, ...ages2, 5, ...ages3];
// console.log(allAges2);
const takaPoisa = [345, 780, 898, 567];
const maximum = Math.max(...takaPoisa);
console.log(maximum);

