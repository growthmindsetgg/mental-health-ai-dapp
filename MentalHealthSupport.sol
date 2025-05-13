// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;

contract MentalHealthSupport {
    event SessionLogged(address indexed user, uint timestamp, string sessionHash);

    function logSession(string memory sessionHash) public {
        emit SessionLogged(msg.sender, block.timestamp, sessionHash);
    }
}
