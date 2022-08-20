pragma solidity 0.8.15;

contract StringMan {
    function calculateLength (string memory str) public pure returns (uint) {
        bytes memory  str_to_bytes = bytes(str);
        return str_to_bytes.length;
    
    }

    function concatenate (string memory str1, string memory str2) public pure returns (string memory){
        bytes memory bytes_one = bytes (str1);
        bytes memory bytes_two = bytes (str2);
        string memory _str = new string(bytes_one.length + bytes_two.length);
        bytes memory str_bytes = bytes(_str);
        
        uint j=0;
        for (uint i=0;i<bytes_one.length; i++){
            str_bytes[j] = bytes_one[i];
            j++;
        }
     
             for (uint i=0;i<bytes_two.length; i++){
            str_bytes[j] = bytes_two[i];
            j++;
        }
         return string(str_bytes);
    }


}