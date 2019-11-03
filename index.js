class Task {

    constructor(callback, T = 0) {
        this._T = T;
        this._call = callback;
    }

    start() {
        setTimeout(() => {
            if(this._call)
                this._call();
            this.done();
        }, this._T);
    }
    

    after(task) {
        this._next = task;
        return this._next;
    }

    done() {
        if(this._next) {
            setTimeout(() => {
                this._next.start();
            }, this._next._T);
        }
    }
    
}

module.exports = Task;