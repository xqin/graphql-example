## GraphQL Example

```
npm install
npm start
```

启动之后(默认监听端口3000), 访问 [例子](http://127.0.0.1:3000/graphql?query=%7B%0A%20%20bjs%3A%20getCityInfo(code%3A%20%22BJS%22)%20%7B%0A%20%20%20%20ID%0A%20%20%20%20name%3A%20Name%0A%20%20%7D%0A%20%20sha%3A%20getCityInfo(code%3A%20%22SHA%22)%20%7B%0A%20%20%20%20ID%0A%20%20%20%20name%3A%20Name%0A%20%20%20%20CountryID%0A%20%20%20%20CountryCode%0A%20%20%20%20CountryName%0A%20%20%20%20NamePinyin%0A%20%20%7D%0A%7D%0A) 查看效果.
