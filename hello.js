var Program = (function () {
    function Program(msg) {
        this.msg = msg;
    }
    Program.prototype.showDetails = function () {
        console.log("your message is" + this.msg);
    };
    return Program;
}());
var obj = new Program("Hello World");
obj.showDetails();
//# sourceMappingURL=hello.js.map