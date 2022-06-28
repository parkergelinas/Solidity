// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract FuckPortal {
    uint256 totalFucks;

    constructor() {
        console.log("Yo yo, I am a contract and I am smart");
    }

    function fuck() public {
        totalFucks += 1;
        console.log("%s got fucked!", msg.sender);
    }

    function getTotalFucks() public view returns (uint256) {
        console.log("We have %d total fucks!", totalFucks);
        return totalFucks;
    }
}
