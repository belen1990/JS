onmessage = function (mess) {
    let text=mess.data;
    console.log(text);
    this.postMessage(text+'hola padre');

    let nums=mess.data;
    console.log(nums);
    
    let result = nums.reduce((ant, act)=>{
        return ant+=act;
    });

    this.postMessage(result);}
