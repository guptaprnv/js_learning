let taskqueue = [];
let callstack = [];
let webapi = [];
setTimeout(
  function eventloop(callstack, taskqueue,webapi) {
    if (callstack.length === 0 && taskqueue.length > 0) {
      callstack.push(taskqueue[0]);
      taskqueue.shift();
      callstack[0]();
      callstack.shift();
    }
    if(webapi.length > 0 || taskqueue.length > 0) {
        setTimeout((callstack, taskqueue, webapi) => {
            eventloop(callstack, taskqueue, webapi);
        },
        1000,
        callstack, 
        taskqueue,
        webapi
        );
    }
  },
  3000,
  callstack,
  taskqueue,
  webapi
);
function function1forTaskqueue() {
    console.log('1st function running');
}
function function2forTaskqueue() {
    console.log('2nd function running');
}
function pushFunctionIntoqueue(functionForPush,taskqueue,time) {
    setTimeout(() => {
        taskqueue.push(functionForPush);
    },time);
}
webapi.push(function1forTaskqueue);
webapi.push(function2forTaskqueue);
while (webapi.length > 0) {
    pushFunctionIntoqueue(webapi[0], taskqueue, 2000);
    webapi.shift();
}
