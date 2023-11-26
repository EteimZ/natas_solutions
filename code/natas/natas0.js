import axios from 'axios';

let username = 'natas0',
	password = username,
	pattern = /<!--The password for natas1 is (.*) -->/,
	url = `http://${username}.natas.labs.overthewire.org`;

try {

  let response = await axios.get(url, {auth: { username, password }});
  let result = response.data.match(pattern);
  console.log(result[1]);

} catch (e) {
    console.error(e);
}
