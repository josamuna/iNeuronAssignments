// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract MultiSignWallet {
    // Define all events
    // Make Deposit - indexed keyword help to log something on the Blockchain
    event Deposit(address indexed sender, uint amout, uint balance);
    // Submit transaction on particular index
    event SubmitTransaction(
        address indexed owner, // Verify owner
        uint indexed txIndex, // Verify Transaction index to track a particular transaction
        address indexed to, // To whom to send
        uint value, // value to send
        bytes data // Some bytes data
    );
    // Confirm transaction by his index
    event ConfirmedTransaction(address indexed owner, uint indexed txIndex);
    //Revoke a particular transaction
    event RevokeTransaction(address indexed owner, uint indexed txIndex);
    // Execute transaction
    event ExecuteTransaction(address indexed owner, uint indexed txIndex);

    // Storing owner address
    address[] public owners;
    // Mapping to tell whether a particular address is owner or not
    mapping(address => bool) public isOwner;
    // Keep track or how many transactions is required to sign (To vote) transaction
    uint public numConfirmationsRequired;

    // Struct to represente an actual transaction
    struct Transaction {
        address to;
        uint value;
        bytes data;
        bool executed;
        uint numConfirmations;
    }

    // Mapping to track numbers of transaction confirmed or not based on the owner | Nested mapping
    mapping(uint => mapping(address => bool)) public isConfirmed; // Tx Id => Tx Validated or not (owner => bool) 1 to 5, 2 to 5, 3 to 5, etc
    // Initializing struct into array of struct (Transaction)
    Transaction[] public transactions;

    // Modifiers
    // Checking the owner
    modifier onlyOwner() {
        require(isOwner[msg.sender], "Not the owner");
        _;
    }

    // Check the existance of transaction
    modifier txExists(uint _txIndex) {
        require(_txIndex < transactions.length, "Transaction does not exist");
        _;
    }

    // Checking the status of executed transaction
    modifier notExecuted(uint _txIndex) {
        require(!transactions[_txIndex].executed, "Tx already executed");
        _;
    }

    // Checking whether transaction is confirmed or not
    modifier notConfirmed(uint _txIndex) {
        require(!isConfirmed[_txIndex][msg.sender], "Tx already confirmed");
        _;
    }

    // [0x5B38Da6a701c568545dCfcB03FcB875f56beddC4,0xAb8483F64d9C6d1EcF9b849Ae677dD3315835cb2,0x4B20993Bc481177ec7E8f571ceCaE8A9e22C02db],2
    // [0x5B38Da6a701c568545dCfcB03FcB875f56beddC4,0xAb8483F64d9C6d1EcF9b849Ae677dD3315835cb2,0x4B20993Bc481177ec7E8f571ceCaE8A9e22C02db,0xAb8483F64d9C6d1EcF9b849Ae677dD3315835cb2],2 Should failed (Duplicate address)
    // [0x5B38Da6a701c568545dCfcB03FcB875f56beddC4,0xAb8483F64d9C6d1EcF9b849Ae677dD3315835cb2,0x4B20993Bc481177ec7E8f571ceCaE8A9e22C02db,0x0000000000000000000000000000000000000000],2 Should failed (Address zero)
    //Constructor to assign values
    constructor(address[] memory _owners, uint _numConfirmationsRequired) {
        require(_owners.length > 0, "At least one owner is required");
        require(
            _numConfirmationsRequired > 0 &&
                _numConfirmationsRequired <= _owners.length,
            "Invalid number of required confirmation in constructor"
        );

        for (uint i = 0; i < _owners.length; i++) {
            address owner = _owners[i];
            require(owner != address(0), "Invalid owner");
            require(!isOwner[owner], "Owner not unique");
            isOwner[owner] = true;
            owners.push(owner);
        }
        numConfirmationsRequired = _numConfirmationsRequired;
    }

    // Allow to hold ether for Smart Contract
    receive() external payable {
        emit Deposit(msg.sender, msg.value, address(this).balance);
    }

    // Confirm a transaction
    function confirmTransaction(
        uint _txIndex
    )
        public
        onlyOwner
        txExists(_txIndex)
        notExecuted(_txIndex)
        notConfirmed(_txIndex)
    {
        Transaction storage transaction = transactions[_txIndex];
        transaction.numConfirmations += 1;
        isConfirmed[_txIndex][msg.sender] = true;
        emit ConfirmedTransaction(msg.sender, _txIndex);
    }

    // Submit transaction
    function submitTransaction(
        address _to,
        uint _value,
        bytes memory _data
    ) public onlyOwner {
        uint txIndex = transactions.length;
        transactions.push(
            Transaction({
                to: _to,
                value: _value,
                data: _data,
                executed: false,
                numConfirmations: 0
            })
        );
        emit SubmitTransaction(msg.sender, txIndex, _to, _value, _data);
    }

    // Deposit Ether
    function depositEth() public payable {
        (bool success, ) = address(this).call{value: msg.value}("");
        require(success, "Sending ether failed");
        emit Deposit(msg.sender, msg.value, address(this).balance);
    }

    // Execute Transaction
    function executeTransaction(
        uint _txIndex
    ) public onlyOwner txExists(_txIndex) notExecuted(_txIndex) {
        Transaction storage transaction = transactions[_txIndex];
        require(
            transaction.numConfirmations >= numConfirmationsRequired,
            "Can not execute transaction, not enough confirmations"
        );
        transaction.executed = true;
        (bool success, ) = transaction.to.call{
            gas: 20000,
            value: transaction.value
        }(transaction.data);
        require(success, "Transaction failed");
        emit ExecuteTransaction(msg.sender, _txIndex);
    }

    // Revoke transaction or Revoke confirmed transaction
    function revokeConfirmation(
        uint _txIndex
    ) public onlyOwner txExists(_txIndex) notExecuted(_txIndex) {
        Transaction storage transaction = transactions[_txIndex];
        require(isConfirmed[_txIndex][msg.sender], "Tx is not confirmed");
        transaction.numConfirmations -= 1;
        isConfirmed[_txIndex][msg.sender] = false;
        emit RevokeTransaction(msg.sender, _txIndex);
    }

    // Get the current owners
    function getOwners() public view returns (address[] memory) {
        return owners;
    }

    // Number of transaction
    function getTransactionsCount() public view returns (uint) {
        return transactions.length;
    }

    // Return an entire transaction
    function getTransaction(
        uint _txIndex
    )
        public
        view
        returns (
            address _to,
            uint value,
            bytes memory _data,
            bool executed,
            uint _numConfirmations
        )
    {
        Transaction storage transaction = transactions[_txIndex];
        return (
            transaction.to,
            transaction.value,
            transaction.data,
            transaction.executed,
            transaction.numConfirmations
        );
    }
}
