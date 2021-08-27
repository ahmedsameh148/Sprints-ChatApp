'use strict';
const strIsValid = function(str){
    return str !== '';
}
let CurrentUser = {
    "GroupName" : '',
    "UserName" : ''
}
const Login = function(){
    const GroupName = document.querySelector('#groupName').value;
    const UserName = document.querySelector('#userName').value;
    if(!strIsValid(GroupName) || !strIsValid(UserName)){
        alert('Please Enter Valid Group Name And Username');
        return;
    }
    CurrentUser.GroupName = GroupName;
    CurrentUser.UserName = UserName;
    alert(`You Logged in With Group Name ${GroupName} And Username ${UserName}`);
    document.querySelector('#loginForm').style.display = 'none';
    document.querySelector('#chatForm').style.display = 'block';
    document.querySelector('#welcomeMessage').textContent = `Welcome ${UserName}`;
}

const Logout = function(){
    if(!confirm('Are You Sure You Want To Logout?'))
        return;
    CurrentUser.UserName = '';
    CurrentUser.GroupName = '';
    document.querySelector('#loginForm').style.display = 'block';
    document.querySelector('#chatForm').style.display = 'none';
}

const Send = function(){
    let msg = document.querySelector('#message').value;
    if(!strIsValid(msg))
        return;
    let res = "";
    console.log(msg);
    for(let i = 0; i < msg.length; i++){
        if(msg[i] === '*')
            res += '<br/>';
        else res += msg[i];
    }
    msg = res;
    const row = `
    <span style="text-align: right;">
         <p> You: ${msg}</p>
    </span>`;
    document.querySelector('#messagesContainer').insertAdjacentHTML("beforeEnd", row);
    alert('Message Sent Successfully');
}
let ele = document.getElementById('message');

ele.addEventListener('keydown', function(e) {
    const keyCode = e.which || e.keyCode;
    if (keyCode === 13 && e.altKey) {
        e.preventDefault();
        ele.value = ele.value + '*';
    }
});