/*
 * exercise_1
 * 呼叫 GitHub API
 * 
 * 「目的」
 *  - 體驗 API 串接/介接
 */

// *why import? node-fetch from v3 is an ESM-only module - you are not able to import it with require().
// *package.json 加入 "type": "module"
import fetch from 'node-fetch';

// *路徑上無法直接使用 ./timer
import Timer from './timer/index.js';

async function getUsers() {
  const timer = new Timer();

  const results = [];
  // Q: 這樣呼叫總共花費多少秒？ 非同步處理彼此間有關聯性嗎？ 有什麼可以改進的地方？
  for (const name of ['nkgokul', 'BrendanEich', 'gaearon']) {
    const userDetails = await fetch('https://api.github.com/users/' + name);

    // Q: Why .json async?
    const userDetailsJSON = await userDetails.json();
    results.push(userDetailsJSON);
  }

  // time elapsed(getUsers): 1.6096411310136318
  console.log('time elapsed(getUsers):', timer.count());

  return results;
}

(async () => {
  const result = await getUsers();
  console.log('users =', result);
})();

/*
// 回傳結果
// 1. 用戶資訊
users = [
  {
    login: 'nkgokul',
    id: 1375897,
    node_id: 'MDQ6VXNlcjEzNzU4OTc=',
    avatar_url: 'https://avatars.githubusercontent.com/u/1375897?v=4',
    gravatar_id: '',
    url: 'https://api.github.com/users/nkgokul',
    html_url: 'https://github.com/nkgokul',
    followers_url: 'https://api.github.com/users/nkgokul/followers',
    following_url: 'https://api.github.com/users/nkgokul/following{/other_user}',
    gists_url: 'https://api.github.com/users/nkgokul/gists{/gist_id}',
    starred_url: 'https://api.github.com/users/nkgokul/starred{/owner}{/repo}',
    subscriptions_url: 'https://api.github.com/users/nkgokul/subscriptions',
    organizations_url: 'https://api.github.com/users/nkgokul/orgs',
    repos_url: 'https://api.github.com/users/nkgokul/repos',
    events_url: 'https://api.github.com/users/nkgokul/events{/privacy}',
    received_events_url: 'https://api.github.com/users/nkgokul/received_events',
    type: 'User',
    site_admin: false,
    name: 'Gokul N K',
    company: 'Learning Paths',
    blog: 'http://learningpaths.io',
    location: 'Bangalore',
    email: null,
    hireable: true,
    bio: 'Building the context layer for the internet at https://twitter.com/usehighlights',
    twitter_username: 'gokulnk',
    public_repos: 55,
    public_gists: 53,
    followers: 11,
    following: 46,
    created_at: '2012-01-24T17:16:25Z',
    updated_at: '2022-01-09T04:54:55Z'
  },
  {
    login: 'BrendanEich',
    id: 313317,
    node_id: 'MDQ6VXNlcjMxMzMxNw==',
    avatar_url: 'https://avatars.githubusercontent.com/u/313317?v=4',
    gravatar_id: '',
    url: 'https://api.github.com/users/BrendanEich',
    html_url: 'https://github.com/BrendanEich',
    followers_url: 'https://api.github.com/users/BrendanEich/followers',
    following_url: 'https://api.github.com/users/BrendanEich/following{/other_user}',
    gists_url: 'https://api.github.com/users/BrendanEich/gists{/gist_id}',
    starred_url: 'https://api.github.com/users/BrendanEich/starred{/owner}{/repo}',
    subscriptions_url: 'https://api.github.com/users/BrendanEich/subscriptions',
    organizations_url: 'https://api.github.com/users/BrendanEich/orgs',
    repos_url: 'https://api.github.com/users/BrendanEich/repos',
    events_url: 'https://api.github.com/users/BrendanEich/events{/privacy}',
    received_events_url: 'https://api.github.com/users/BrendanEich/received_events',
    type: 'User',
    site_admin: false,
    name: 'Brendan Eich',
    company: '@brave ',
    blog: 'https://www.brendaneich.com/',
    location: null,
    email: null,
    hireable: null,
    bio: 'Founder & CEO, Brave Software. Created JavaScript. Co-founded Mozilla and Firefox.',
    twitter_username: null,
    public_repos: 13,
    public_gists: 5,
    followers: 4981,
    following: 5,
    created_at: '2010-06-24T04:39:24Z',
    updated_at: '2022-01-20T23:50:47Z'
  },
  {
    login: 'gaearon',
    id: 810438,
    node_id: 'MDQ6VXNlcjgxMDQzOA==',
    avatar_url: 'https://avatars.githubusercontent.com/u/810438?v=4',
    gravatar_id: '',
    url: 'https://api.github.com/users/gaearon',
    html_url: 'https://github.com/gaearon',
    followers_url: 'https://api.github.com/users/gaearon/followers',
    following_url: 'https://api.github.com/users/gaearon/following{/other_user}',
    gists_url: 'https://api.github.com/users/gaearon/gists{/gist_id}',
    starred_url: 'https://api.github.com/users/gaearon/starred{/owner}{/repo}',
    subscriptions_url: 'https://api.github.com/users/gaearon/subscriptions',
    organizations_url: 'https://api.github.com/users/gaearon/orgs',
    repos_url: 'https://api.github.com/users/gaearon/repos',
    events_url: 'https://api.github.com/users/gaearon/events{/privacy}',
    received_events_url: 'https://api.github.com/users/gaearon/received_events',
    type: 'User',
    site_admin: false,
    name: 'dan',
    company: '@facebook ',
    blog: '',
    location: null,
    email: 'dan.abramov@gmail.com',
    hireable: null,
    bio: null,
    twitter_username: 'dan_abramov',
    public_repos: 257,
    public_gists: 77,
    followers: 71989,
    following: 172,
    created_at: '2011-05-25T18:18:31Z',
    updated_at: '2022-01-24T02:42:59Z'
  }
]

// 2. 呼叫次數超過上限
users = [
  {
    message: "API rate limit exceeded for 61.231.204.162. (But here's the good news: Authenticated requests get a higher rate limit. Check out the documentation for more details.)",
    documentation_url: 'https://docs.github.com/rest/overview/resources-in-the-rest-api#rate-limiting'
  },
  {
    message: "API rate limit exceeded for 61.231.204.162. (But here's the good news: Authenticated requests get a higher rate limit. Check out the documentation for more details.)",
    documentation_url: 'https://docs.github.com/rest/overview/resources-in-the-rest-api#rate-limiting'
  },
  {
    message: "API rate limit exceeded for 61.231.204.162. (But here's the good news: Authenticated requests get a higher rate limit. Check out the documentation for more details.)",
    documentation_url: 'https://docs.github.com/rest/overview/resources-in-the-rest-api#rate-limiting'
  }
]
*/
