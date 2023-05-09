const io = require("socket.io")(5000, {
    cors: {
        origin: "http://localhost:5173",
    },
});

let activeUser = [];

io.on("connection", (socket) => {
    // add new user
    socket.on("new-user-add", (newUserId) => {
        // if user is not added previously
        if (!activeUser.some((user) => user.userId === newUserId)) {
            activeUser.push({
                userId: newUserId,
                socketId: socket.id,
            });
        }
        console.log("Connected user", activeUser);
    });
    io.emit("get-users", activeUser);

    // send message

    socket.on("send-message", (data) => {
        const user = activeUser.find((user) => user.userId === data.receiverId);
        console.log("Sending from socket to reciever");
        if (user) {
            io.to(user.socketId).emit("recieve-message", data);
        }
    });
    socket.on("disconnect", () => {
        activeUser = activeUser.filter((user) => user.socketId !== socket.id);
        console.log("user disconnecet", activeUser);
        io.emit("get-users", activeUser);
    });
});
