import axios from 'axios';

let username = 'natas1',
        password = 'gtVrDuiDfck831PqWsLEZy5gyDz1clto',
        pattern = /<!--The password for natas2 is (.*) -->/,
        url = `http://${username}.natas.labs.overthewire.org`;

try {

  let response = await axios.get(url, {auth: { username, password }});
  let result = response.data.match(pattern);
  console.log(result[0]);

} catch (e) {
    console.error(e);
}

