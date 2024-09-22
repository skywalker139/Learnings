// global scope k variable k declaration se polution hota h usko avoid krne k liye immediately invoked functions ko call krte h

//  (<function>)();

(function chai(){
    //named IIFE
    console.log("hello");
})();

// ******* semi colon lagane padega because execution k baad stop bhi krna padega 

(  (name) => {
    console.log(`DB connected to ${name}`);
})("skywalker");