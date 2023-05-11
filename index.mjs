import process from 'process';

process.report.reportOnFatalError = true;
process.report.reportOnSignal = true;
process.report.reportOnUncaughtException = true;
process.report.filename = 'report.json';

import ChildProcess from 'child_process';
const exec = ChildProcess.execFile;
const command = exec("sleep 60");
const openWorkApps = function(){
  exec("/mnt/c/Program Files/Docker/Docker/Docker Desktop.exe", function(err,data){
    console.log('open docker');
    if(err){
      console.error(err);
      return
    }
    console.log(data.toString());
    setTimeout(() => {
      command.kill()
    }, 1000)
  });
  exec("/mnt/c/Program Files (x86)/Google/Chrome/Application/chrome.exe", function(err,data){
    console.log('open chrome');
    if(err){
      console.error(err);
      return
    }
    console.log(data.toString());
    setTimeout(() => {
      command.kill()
    }, 1000)
  });
  exec("/mnt/c/Users/ASUS/AppData/Local/Postman/Postman.exe", function(err,data){
    console.log('open postman');
    if(err){
      console.error(err);
      return
    }
    console.log(data.toString());
    setTimeout(() => {
      command.kill()
    }, 1000)
  });
  exec("/mnt/c/Users/ASUS/AppData/Local/Programs/Microsoft VS Code/Code.exe", function(err,data){
    console.log('open vscode');
    if(err){
      console.error(err);
      return
    }
    console.log(data.toString());
    setTimeout(() => {
      command.kill()
    }, 1000)
  });
}
openWorkApps();
process.exit(0);