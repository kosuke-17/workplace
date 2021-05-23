const http = require("http").createServer();
const io = require("socket.io")(http);

io.on("connection", (socket) => {
  console.log("clientに接続しました");
  socket.on("message", (data) => {
    io.emit("message", { from: data.from, message: data.message });
  });
});

http.listen(5000, () => {
  console.log("ポート5000番でサーバーを起動中です");
});