import { Server, Socket } from "socket.io";

interface PlayerRound {
  playerId: string;
  nickname: string;
  estimation: number;
}

export default function gameHandlers(io: Server, socket: Socket) {
  const savePlayersEstimations = (playersEstimations: PlayerRound[]) => {
    console.log(playersEstimations);
  };

  socket.on("game:save-estimations", savePlayersEstimations);
}
