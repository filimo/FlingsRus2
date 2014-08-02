if(WowChat.find().count() == 0) {
    WowChat.insert({
        text: 'message1'
    })
    WowChat.insert({
        text: 'message2'
    })
    WowChat.insert({
        text: 'message3'
    })
}