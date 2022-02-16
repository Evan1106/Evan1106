/*
 * exercise_2
 * 使用 GitHub access token 來呼叫 API
 */
import fetch from 'node-fetch';
import Timer from './timer/index.js';

// 1. 文件請參考
// https://docs.github.com/en/rest/guides/getting-started-with-the-rest-api#authentication
async function getUsers() {
  // your_username:$token
  const clientIdAndSecret = 'Josh-Chang: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';
  const base64 = Buffer
    .from(clientIdAndSecret)
    .toString('base64');

  const timer = new Timer();

  // What is application/x-www-form-urlencoded, application/json
  // const results = [];
  // for (const name of ['nkgokul', 'BrendanEich', 'gaearon']) {
  //   const userDetails = await fetch('https://api.github.com/users/' + name, {
  //     method: 'GET',
  //     headers: {
  //       'Content-Type': 'application/x-www-form-urlencoded',
  //       'Accept-Language': 'en_US',
  //       'Accept': 'application/json',
  //       'Authorization': `Basic ${base64}`,
  //     },
  //   });

  //   const userDetailsJSON = await userDetails.json();
  //   results.push(userDetailsJSON);
  // }

  // (1)
  let results = ['nkgokul', 'BrendanEich', 'gaearon'].map(async (name) => {
    // (2)
    // -------
    const userDetails = await fetch('https://api.github.com/users/' + name, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Accept-Language': 'en_US',
        'Accept': 'application/json',
        'Authorization': `Basic ${base64}`,
      },
    });
    // -------

    // (3)
    return userDetails.json();
  });

  results = await Promise.all(results);

  console.log('time elapsed(getUsers):', timer.count());

  return results;
}

(async () => {
  // time elapsed(getUsers): 1.241522465005517
  const result = await getUsers();
  console.log('users =', result);
})();
