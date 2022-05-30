import axios from 'axios';
import FormData from "form-data";

let username = 'natas6',
        password = 'aGoY4q2Dc6MgDq4oL4YtoKtyAg9PeHa1',
        pattern = /Access granted. The password for natas7 is (.*)/,
        url = `http://${username}.natas.labs.overthewire.org`;

let form = FormData();
form.append("secret", "FOEIUWGHFEEUHOFUOIU");
form.append("submit", "submit")

try {
                                                                                                                                                
  let response = await axios.post(url, form , {auth: { username, password }});
  let result = response.data.match(pattern);
  console.log(result[1]);

} catch (e) {
    console.error(e);
}

