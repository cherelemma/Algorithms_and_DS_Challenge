module.exports = function (str) {
  //Sanitizing
  let originalsStr = str.toLowerCase().replace(/[\W_]/g, '');
   
  //reverse and compare
  var reverseStr = originalsStr.split('').reverse().join(''); 
  return reverseStr === originalsStr;
};
