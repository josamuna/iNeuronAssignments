/*
    Author: Josue Isamuna Nkembo
    Email : josamuna2009@gmail.com

    7. Find output.
       Execution error : Mistake in line 11, arrow function is not used
*/

function resolveAfterNSeconds(n,x) {
    return new Promise(resolve => {
    setTimeout( () = { // Mistake here 
    resolve(x);
    }, n);
    });
    }
    (function(){
    let a = resolveAfterNSeconds(1000,1)
    a.then(async function(x){
    let y = await resolveAfterNSeconds(2000,2)
    let z = await resolveAfterNSeconds(1000,3)
    let p = resolveAfterNSeconds(2000,4)
    let q = resolveAfterNSeconds(1000,5)
    console.log(x+y+z+await p +await q);
    })
    })()