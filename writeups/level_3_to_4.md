Natas Level 3 -> Level 4

When you first load the page you get this message.

```text
Access disallowed. You are visiting from "" while authorized users should come only from "http://natas5.natas.labs.overthewire.org/" 
```

When you click the Refresh page link. You get this message:

```text
Access disallowed. You are visiting from "http://natas4.natas.labs.overthewire.org/index.php" while authorized users should come only from "http://natas5.natas.labs.overthewire.org/" 
```

The refresh page link is using PHP. From my assumptions that page is setting the [Referer header](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Referer) to the current page. The page will only authorize us if we come from the **http://natas5.natas.labs.overthewire.org/**. We can fake that by manually setting the HTTP Referer header with a http client. Here's my solution with curl:

```bash
curl -u natas4:<natas4_password> --referer "http://natas5.natas.labs.overthewire.org/" http://natas4.natas.labs.overthewire.org/
```
