var linebot = require('linebot');
var express = require('express');

var bot = linebot({
  channelId: "1536614664",
  channelSecret: "a49d44b596eea0860ef23b6e66613cb5",
  channelAccessToken: "+cR6dMn+WNJAFTGZ7/ubeh7zZyWK5jc16co2D1WnoETxG5Flv5ixkojDz8N/BrcLfGOvlJHnnUQc1l2Yhcd6zQOL5ENiVm6o61B8LghOGEb3NQ3pARrKb2rgcJ6ILlP6RR2qoNU52Szbn67NUon6FgdB04t89/1O/w1cDnyilFU="
});

bot.on('message', function(event) {
  console.log(event); //把收到訊息的 event 印出來看看
});

const app = express();
const linebotParser = bot.parser();
app.post('/', linebotParser);

//因為 express 預設走 port 3000，而 heroku 上預設卻不是，要透過下列程式轉換
var server = app.listen(process.env.PORT || 8080, function() {
  var port = server.address().port;
  console.log("App now running on port", port);
});