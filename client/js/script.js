const ws = new WebSocket("ws://localhost:9300/");
const input = document.querySelector("input");
const inputSubmit = document.querySelector("#inputSubmit");
const msgParent = document.querySelector('.msg-parent');
const verticalSpacer = document.querySelector('.vertical-spacer');

ws.addEventListener("open", console.log);
ws.addEventListener("message", console.log);

ws.addEventListener("message", message => {
    console.log(message);

    if (message.type === 'message') {

        const html = boxMsgOtherHTMLCreate(message.data)
        msgParent.insertBefore(html, verticalSpacer);
        msgParent.scrollTo(0, msgParent.scrollHeight);
    }


});

input.addEventListener('keypress', e => {

    if (e.code === 'Enter') {

        sendMsgHandler();
    }
});

inputSubmit.addEventListener('click', function (e){

    e.preventDefault();
    sendMsgHandler();
});

function sendMsgHandler(){
    const val = input.value;

    if(val !== '') {
        const html = boxMsgMeHTMLCreate(val)
        msgParent.insertBefore(html, verticalSpacer);
        msgParent.scrollTo(0, msgParent.scrollHeight);
        ws.send(val);
        input.value = '';
    }
}

function boxMsgMeHTMLCreate(text) {

    const boxMsg = boxMsgHTMLCreate();
    const msgMe = bubbleMsgHTMLCreate(text, 'msg-me', true);

    boxMsg.appendChild(msgMe);

    return boxMsg;
}

function boxMsgOtherHTMLCreate(text) {

    const boxMsg = boxMsgHTMLCreate();
    const msgOther = bubbleMsgHTMLCreate(text, 'msg-other');

    boxMsg.appendChild(msgOther);

    return boxMsg;
}

function boxMsgHTMLCreate(){
    let boxMsg = document.createElement('div');
    boxMsg.classList.add('box-msg');

    return boxMsg;
}

function bubbleMsgHTMLCreate(text, className, isLeftOrientation = false){

    let msgDiv = document.createElement('div');
    let msgBubble = document.createElement('div');
    let msgSpacer = document.createElement('div');

    msgDiv.classList.add(className);
    msgBubble.classList.add('msg-bubble');
    msgSpacer.classList.add('msg-spacer');

    let msgText = document.createTextNode(text);
    msgBubble.appendChild(msgText);

    if(isLeftOrientation){
        msgDiv.appendChild(msgBubble);
        msgDiv.appendChild(msgSpacer);
    }else{
        msgDiv.appendChild(msgSpacer);
        msgDiv.appendChild(msgBubble);
    }

    return msgDiv;
}