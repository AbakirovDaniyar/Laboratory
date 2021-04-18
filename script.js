//1st way with substring() method solved by arrow function
        const strStr = (haystack, needle) => {
            if (needle.length === '') 
            return 0;
        for (let i = 0; i <= haystack.length - needle.length; i++) {
                if (needle === haystack.substring(i, i + needle.length)) {
                    return i;                                            
                }                                                        
            }                                                                                                          
            return -1;                                                  
        };
        // document.getElementById("demo").innerHTML = strStr('bishkek', '')
        document.getElementById("demo").innerHTML = strStr('hello', 'll')
        // document.getElementById("demo").innerHTML = strStr('dwdw', 'dwedf')
        //---------------------------------------------------

        //used if conditon to find: if needle argument has empty string '' to return 0
        // //used loop and substring() method to compare the two arguments lenghts
        // // i<= haystack.length - needle.length this is helping us to itterate
        // // EX: haystack"acdnsm' the length is-6
        //  //4 if we can not find the needle in the last caracter of 4 so no need to check the rest 
        //   //if they are equal to return the index 
        //   //if the argumenst are not equal to return -1

        // ******************************************
        //2nd way with IndexOf() method and solved by function declaration
        let strStr2 = function (haystack, needle) {
                if (needle.length === 0) {
                    return 0
                }
                let index = haystack.indexOf(needle)
                return index
        };
            console.log(strStr2("Hello", "o"))


        //we solve the problem by using the arrow funtion which is calling two arguments
        

        // Input: haystack = "hello", needle = "ll"
        // Output: 2

        // Example 2:
        // Input: haystack = "aaaaa", needle = "bba"
        // Output: -1

        // Example 3:
        // Input: haystack = "", needle = ""
        // Output: 0

