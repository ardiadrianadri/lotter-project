pragma solidity ^0.5.0;

contract Lottery {
    address public manager;
    address[] public players;
    event Deposit(address _from, uint value);

    constructor() public {
        manager = msg.sender;
    }

    function enter() public payable {
        require(msg.value > .01 ether, 'Not enough ether');
        players.push(msg.sender);
    }

    function numberPlayers() public view returns(uint) {
        return players.length;
    }
}