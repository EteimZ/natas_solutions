# Natas Level 2 -> Level 3

When you check the source code of the page. You get this hint:
> No more information leaks!! Not even Google will find it this time..

This means that they stored the necessary information some where that search engines like google can't crawl.
That will be in the [robots.txt](https://developers.google.com/search/docs/crawling-indexing/robots/intro) file.

When we browse the the [path](http://natas3.natas.labs.overthewire.org/robots.txt) to the natas3 robots.txt we find the following:

```text
User-agent: *
Disallow: /s3cr3t/
```

It shows they added a path called `/s3cr3t/` to the file so search engines won't be able to find it. 
When we browse through that [path](http://natas3.natas.labs.overthewire.org/s3cr3t/) we find a directory listing that has a users.txt.
We go to that file and we find our password for Natas4.
