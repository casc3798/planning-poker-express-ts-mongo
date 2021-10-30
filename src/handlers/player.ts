import { Server, Socket } from "socket.io";

interface PlayerData {
  playerId: string;
  nickname: string;
}

export default function playerHandlers(io: Server, socket: Socket) {
  const changeNickname = (playerData: PlayerData) => {
    console.log(playerData);
  };

  socket.on("player:changeNickname", changeNickname);
}
