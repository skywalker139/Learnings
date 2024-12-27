// 1.Global Execution Context
// 2.Function Execution Context
// 3.Eval EC - MongoDB padhenge to kaam ayega 
// {} ye h javascript context jo 2 phases me run hota h
// 1st meemory phase 
// 2nd execution phase

// 1st step: global EC bwilll be made- "this"
// 2nd step: variables stored
//     val 1 --> undefined
//     val2 --> undefined
//     function -->defination
//     this --> global object
// 3rd step: code will be executed
//      val1 = 10
//      val2 = 20
//      function called --> separate EC --> {new variable environment + execution thread}{2nd and 3rd step will be repeated}
//      this context also gets deleted when work is over
//      


//                  #####    CALL STACK    #####

//LIFO
//like recursion stack