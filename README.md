# simpletasks.js
Simple time based task queue for js

**Example** 

```js
  let task = new Task(() => { console.log("task 1") });
  task.after(new Task(() => { console.log("task 1") }), 500).after(new Task(() => { console.log("task 1") }), 200);
  task.start();
```
