function repeatStringNumTimes(str, num) {
    //Copy the string
    let str_copy = '';
 
    //Loop through the string and concatenate.
    while (num > 0) {
        str_copy += str;
        num--;
    }
    return str_copy;
}
 
module.exports = repeatStringNumTimes;
