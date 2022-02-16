/*
 * exercise_2
 * 呼叫 GitHub API - 改用 Promise.all 改寫
 */

import fetch from 'node-fetch';
import Timer from './timer/index.js';

async function getUsers() {
  const timer = new Timer();

  const userP1 = fetch('https://api.github.com/users/nkgokul');
  const userP2 = fetch('https://api.github.com/users/BrendanEich');
  const userP3 = fetch('https://api.github.com/users/gaearon');

  const users = await Promise.all([userP1, userP2, userP3]);

  const userJsonP1 = users[0].json();
  const userJsonP2 = users[1].json();
  const userJsonP3 = users[2].json();

  const userJsons = await Promise.all([userJsonP1, userJsonP2, userJsonP3]);

  // Q: 時間節省一半以上 1.6 -> 0.8，但是若我要新增不同 user，好像變得很麻煩！
  // time elapsed(getUsers): 0.827470957994461
  console.log('time elapsed(getUsers):', timer.count());

  return userJsons;
}

(async () => {
  // Q: try using for looping 50 times，發生了什麼事情？
  // for (let i=0; i <50; i++) {
    const result = await getUsers();
    console.log('users =', result);
  // }
})();
