package project.controller.paths.websocket.message;

import jakarta.ejb.Schedule;
import jakarta.ejb.Stateless;

@Stateless
public class timerMessage {

    @Schedule(second = "0", minute = "0", hour = "12")
    public void init(){
        messageEndpoint.sendAll("Время пить чай!");
    }
}
