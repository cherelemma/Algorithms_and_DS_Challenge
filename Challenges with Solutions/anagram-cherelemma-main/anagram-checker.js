module.exports = function (str1, str2) {
  //Sanitizing 
  str1 = str1.toLowerCase().replace(/[^a-z0-9]+/gi, '');
  str2 = str2.toLowerCase().replace(/[^a-z0-9]+/gi, '');

  //Split, Sort and compare
  str1 = str1.split('').sort().join('');
  str2 = str2.split('').sort().join('');
  if (str1 == str2){
    return true;
  }
  else{
    return false;
  }
};