/*
 * exercise_3
 * 使用 GitHub access token 來呼叫 API
 * 改用 ES6 語法改寫
 */

// 1. 比較與熟悉 ES6 語法

import fetch from 'node-fetch';
import Timer from './timer/index.js';

// 常數
const owner = 'Evan1106';
const repo = 'repoAPITry';
const info = [{owner: owner, repo: repo}];

// 全域變數/函式
const getRepoAPI = async (owner, repo) => {
  // TODO: 把 key 等重要資訊移到 .env file
  const clientIdAndSecret = 'Evan1106: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';
  const base64 = (text) => Buffer
    .from(text)
    .toString('base64');

  // Why 沒有 await 再 return?
  return fetch(`https://api.github.com/repos/${owner}/${repo}`, {
    method: 'GET',
    headers: {
      // Why 有些有 ''？
      'Content-Type': 'application/x-www-form-urlencoded',
      'Accept-Language': 'en_US',
      Accept: 'application/vnd.github.v3+json',
      Authorization: `Basic ${base64(clientIdAndSecret)}`,
    },
  });
};

const getUsers = async () => {
  const timer = new Timer();

  const results = [];
    const userDetails = await getRepoAPI(owner, repo);
    const userDetailsJSON = await userDetails.json();
    results.push(userDetailsJSON);
  

  console.log('time elapsed(getUsers):', timer.count());

  return results;
};

const getUsersES6 = async () => {
  const timer = new Timer();

  // Why [...users]?
  const promises = [...info].map(async (info) => {
    const userDetails = await getRepoAPI(info.owner, info.repo);

    // Why not await?
    return userDetails.json();
  });

  const results = await Promise.all(promises);

  console.log('time elapsed(getUsersES6):', timer.count());
  
  return results;
};

(async () => {
  const result_1 = await getUsers();
  const result_2 = await getUsersES6();

  // 在我的主機上列印出來的：
  // Why 兩者數值差這麼多？
  // time elapsed(getUsers): 1.001023905992508
  // time elapsed(getUsersES6): 0.3260764250010252

  console.log('users =', result_1);
  console.log('users(es6) =', result_2);
})();
