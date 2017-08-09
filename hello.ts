class Program
{
    constructor(private msg:string){}
    showDetails(){
        console.log("your message is" + this.msg);  
    }
}
let obj = new Program("Hello World");
obj.showDetails();