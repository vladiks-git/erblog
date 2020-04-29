package top.vlad.one_else.Controllers;

import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.stereotype.Controller;
import top.vlad.one_else.Entities.Message;
import top.vlad.one_else.Entities.User;

import java.util.Collections;

@Controller
public class MessageController {
//
//    @MessageMapping("/chat")
//    @SendTo("/topic/messages")
//    public Message send(Message message) throws Exception {
//        return new Message(message.getText(), Collections.singleton(new User(message.getUser())));
//    }

}
