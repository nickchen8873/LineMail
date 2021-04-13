// 引用linebot SDK
var linebot = require('linebot');

// 用於辨識Line Channel的資訊
var bot = linebot({
  channelId: '1655824168',
  channelSecret: '06b70de11d8a687bee23a0314a495d71',
  channelAccessToken: 'ADLAyvkJ8f/hHpTsOjNbsPwhBph85ZSjFQaoRuP8bHbThfQ4VBwooydbuoFRDeSZPUbAdkYczRm1GWlDPxD40E5oFPNqL/mOR+0f4YiL7kWUzGfXWxBRh2VcbSE66d54PKsWgUpTbbSyWhAzhp1LMAdB04t89/1O/w1cDnyilFU='
});

// 當有人傳送訊息給Bot時
bot.on('message', function (event) {
  // event.message.text是使用者傳給bot的訊息
  // 準備要回傳的內容
  var replyMsg = `Hello你剛才說的是:${event.message.text}`;
  // 使用event.reply(要回傳的訊息)方法可將訊息回傳給使用者
  event.reply(replyMsg).then(function (data) {
    // 當訊息成功回傳後的處理
  }).catch(function (error) {
    // 當訊息回傳失敗後的處理
  });
});

// Bot所監聽的webhook路徑與port
bot.listen('/linewebhook', 3000, function () {
    console.log('[BOT已準備就緒]');
});