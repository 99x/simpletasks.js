# simpletasks.js
Simple time based task queue for js

**Example** 

```js
  let task = new Task(() => { console.log("task 1") });
  task.after(new Task(() => { console.log("task 2") }, 500)).after(new Task(() => { console.log("task 3") }, 200));
  task.start()
```

**Output**

```
task 1 // when t = 0
task 2 // when t = 500 ms
task 3 // when t = 700 ms
```
