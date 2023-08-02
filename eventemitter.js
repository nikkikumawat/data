import EventEmitter from "events";

const emitter = new EventEmitter();

emitter.on('message', (msg) => {
    console.log('you have a new message:' + msg)
})

setTimeout(() => {
    emitter.emit('message', 'mere karan argun aayenge')
}, 1000);
                                                        
setTimeout(() => {
    emitter.emit('message', 'apna time aayega')       
}, 2000)

emitter.once('greeting' , (name)=>{
    console.log(`hello,${name}!`);
})

emitter.emit('greetig','burhan')
emitter.emit('greetig','nikky')


// module: fs , url, readline , path, net, dns , fs promise,utility (util) , http , os , event driven approch 
//mixin function kese bnte h ,nested css


// mx ,soa , scheme , basename

