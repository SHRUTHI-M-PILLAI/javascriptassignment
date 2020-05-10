
function validate(){
  var str = 'The Quick Brown Fox';
  var UPPER = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var LOWER = 'abcdefghijklmnopqrstuvwxyz';
  var result = [];
    
    for(var x=0; x<str.length; x++)
    {
      if(UPPER.indexOf(str[x]) !== -1)
      {
        document.write(str[x].toLowerCase());
      }
      else if(LOWER.indexOf(str[x]) !== -1)
      {
        document.write(str[x].toUpperCase());
      }
      else 
      {
        document.write(str[x]);
      }
    }
}

