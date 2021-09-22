pragma solidity ^0.5.0;

contract SimpleStorage {
    // variable accessible from outside
    string public data;

    // setter function [type allocation name]
    function set(string memory _data) public {
        data = _data;
    }

    function get() public view returns (string memory) {
        return data;
    }
}
