// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

/**
* @title MyToken
* @author Mavericks
*/
contract MyToken {
 
    address owner;
  
    modifier onlyowner
    {
         require(msg.sender==owner,"You are not allowed");
         _;
    }
   
   bytes32 d;
   
   struct file {
       string hash;
       string mimetype;
       string name;
   }

  mapping(address => file[]) files_per_user;
  
  
  function getMyFiles() public view returns (file [] memory)
   {
       return files_per_user[msg.sender];
   }
   
   function addMyfile(string memory _hash,string memory _mimetype, string memory _name) public
   {
        file memory t;
        t.hash = _hash;
        t.mimetype = _mimetype;
        t.name = _name;
        files_per_user[msg.sender].push(t);
     
   }
   
   function shareMyfile(address _add, string memory _hash,string memory _mimetype, string memory _name) public
   { 
        file memory t;
        t.hash = _hash;
        t.mimetype = _mimetype;
        t.name = _name;
        files_per_user[_add].push(t);
       
   }
}