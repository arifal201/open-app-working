//running docker with nodejs
var exec = require('child_process').execFile;
var fun = function(){
  exec("/mnt/c/Program Files/Docker/Docker/Docker Desktop.exe", function(err,data){
    console.log('open docker');
    console.log(err);
    console.log(data.toString());
  });
  exec("/mnt/c/Program Files (x86)/Google/Chrome/Application/chrome.exe", function(err,data){
    console.log('open chrome');
    console.log(err);
    console.log(data.toString());
  });
  exec("/mnt/c/Users/ASUS/AppData/Local/Postman/Postman.exe", function(err,data){
    console.log('open postman');
    console.log(err);
    console.log(data.toString());
  });
  exec("/mnt/c/Users/ASUS/AppData/Local/Programs/Microsoft VS Code/Code.exe", function(err,data){
    console.log('open vscode');
    console.log(err);
    console.log(data.toString());
  });
}
//open terminal
//C:\Users\ASUS\AppData\Local\Microsoft\WindowsApps\wt.exe

//open postman
//C:\Users\ASUS\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Postman\Postman.exe
//C:\Users\ASUS\AppData\Local\Postman\Postman.exe

//open vscode
//C:\Users\ASUS\AppData\Local\Programs\Microsoft VS Code\Code.exe
fun();