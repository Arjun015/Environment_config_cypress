// Synchronus   

function one(){

    console.log("one is executed")
    alert('hello')
}
function two(){
    console.log('Two is execured')  
}

//o/p:

//one is executed
//alert()
// Two is executed


function one(){
    setTimeout(function(){
        console.log('one')
    },2000)
}

function Two(){
    console.log('Two')
}

one()
Two()

//console.log('id created')
//console.log('user retrive')
// console.log('user update')


//call back hell 


function info(){
    setTimeout(function(){
        console.log('id created')
    },2000)

    setTimeout(function(){
        console.log('user retrive')
    })

    setTimeout(function(){
        console.log('user update')
    })
}

info()





// call back hell

function info(){
    setTimeout(function(){
        console.log('id created')
        setTimeout(function(){
            console.log('user retrive')
            setTimeout(function(){
                console.log('user update')
    })
            },3000)
    
    },2000)


    setTimeout(function(){
        console.log('user update')
    },1000)
}

info()


// Promise ----ES6 Promise


// Promise ==> Promises is the new way the handling async code for synchronos execution 


let pro = new Promise(function(resolve,reject){

    let x = 10 
    let y = 20

    if(x == y){
        resolve('Hello')
    }
    else{
        reject('Bye')
    }
})

// consuming Promise

pro.then(function(res){
    console.log(res)
},function(res){
    console.log(res)
})

// consuming promise with then Block 

pro.then(function(x){
    console.log(x)
})
.catch(function(x){
    console.log(x)
})


// consuming promise

pro.then(function(res){
    console.log(res)
})
.catch(function(y){
    console.log(y)
})