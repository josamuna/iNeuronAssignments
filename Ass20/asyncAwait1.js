/*
    Author: Josue Isamuna Nkembo
    Email : josamuna2009@gmail.com

    1). How does async/await help with performance and scalability?
        - Fistly it is help to reduce the amount of code and make it more readable.
        - It is alway return a promise (Without adding resolve or reject).
        - It is less complex than promise.
        
    2). Is it possible to use async/await with promise chains? If yes, how can this be achieved?
        - Yes, because it return a promise and we can perform chaining like promise chaining. 
        It can be achieved in the same way of using promise. We need also to use await keyword to get back promise result.

    3). Give 3 real world examples where async/await has been used?
        - Loading file's data from file system or network (from the Backend).
        - Loading data from API through a network (Loading data from network).
        - Save data into a file from network or from file system (from the Backend).
*/
