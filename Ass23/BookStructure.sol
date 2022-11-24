// SPDX-License-Identifier: MIT

/*
    Author: Josue Isamuna Nkembo
    Email : josamuna2009@gmail.com

    Q- Task- provide detailed gas cost report for the following code by using storage,
    memory and calldata for the different structs and variables used. Use separate
    functions to get title, author, bookId and price for this task
*/
// PLEASE DECOMMENT EACH SECTION (Storage, Memory and CallData) TO SEE THE EXPECTED RESULT

pragma solidity 0.8.6;

contract BookStructure {
    struct Book {
        string title;
        string author;
        uint bookID;
        uint price;
    }

    // State variable representing the Book structure
    Book book;

    // 1. Storage states variables
    // string titleStorage;
    // string authorStorage;
    // uint bookIDStorage; 
    // uint priceStorage;

    function setBook() public {
        book = Book("Blokchain for beginners", "Ineuron", 4, 1000);
    }
    /* 1. Begin Storage

    // function getTitleStorage() public returns (string memory) {
    //     titleStorage = book.title;
    //     return titleStorage;
    // }

    // function getAuthorStorage() public returns (string memory) {
    //     authorStorage = book.author;
    //     return authorStorage;
    // }

    // function getBookIDStorage() public returns (uint) {
    //     bookIDStorage = book.bookID;
    //     return bookIDStorage;
    // }

    // function getPriceStorage() public returns (uint) {
    //     priceStorage = book.price;
    //     return priceStorage;
    // }

    End Storage*/

    /* 2. Begin Memory
    function getTitleMemory() public view returns (string memory) {
        string memory title = book.title;
        return title;
    }

    function getAuthorMemory() public view returns (string memory) {
        string memory author = book.author;
        return author;
    }

    function getBookIDMemory() public view returns (uint) {
        uint bookID = book.bookID;
        return bookID;
    }

    function getPriceMemory() public view returns (uint) {
        uint price = book.price;
        return price;
    }

    End Memory*/

    /*3. Begin CallData
    function getTitleCallData(string calldata title) public pure returns (string calldata) {
        return title;
    }

    function getAuthorCallData(string calldata author) public pure returns (string calldata) {
        return author;
    }

    function getBookIDCallData(uint bookID) public pure returns (uint) {
        return bookID;
    }

    function getPriceCallData(uint price) public pure returns (uint) {
        return price;
    }

    End CallData*/
}

/*
    Gas estimation: gas, transaction cost and execution cost
    ========================================================

    - setBook: 127417, 110797, 110797
    1. 4 states variables-storage =================>> The highest cost in gas
    Contract deployment: 441951, 384305, 384305
        - title: 54482, 47375, 47375.
        - author: 54431, 47331, 47331.
        - bookID: 52580, 45721, 45721.
        - price: 52656, 45787, 45787.

    2. memory =======================>>Medium cost in gas
        2.1. Without using view : 2 local variables-memory + 2 local variables (uint)
        Contract deployment: 394271, 342844, 342844.
            - title: 28254, 24568, 24568.
            - author: 28203, 24524, 24524.
            - bookID: 27048, 23520, 23520.
            - price: 27124, 23586, 23586.
        2.2. By using view : 2 local variables-memory + 2 local variables (uint)
        Contract deployment: 394271, 342844, 342844.
            - title: 24568, Cost only applies when called by a contract.
            - author: 24524, Cost only applies when called by a contract.
            - bookID: 23520, Cost only applies when called by a contract.
            - price: 23586, Cost only applies when called by a contract.

    3. calldata (We must passed values as arguments when function is called)
        3.1. Without using pure: 2 local parameters variables-calldata + 2 local parameters variables (uint)
        Contract deployment: 394768, 343276, 343276.
            - title: 26061, 22661, 22661.
            - author: 25815, 22447, 22447.
            - bookID: 25153, 21872, 21872.
            - price: 25066, 21796, 21796.
        3.2. By using pure: 2 local parameters variables-calldata + 2 local parameters variables (uint) ======>> The lowest cost in gas
        Contract deployment: 394754, 343264, 343264.
            - title: 22661, Cost only applies when called by a contract.
            - author: 22447, Cost only applies when called by a contract.
            - bookID: 21872, Cost only applies when called by a contract.
            - price: 21796, Cost only applies when called by a contract.
*/