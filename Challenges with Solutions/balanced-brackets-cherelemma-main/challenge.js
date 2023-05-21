function balancedBrackets(string) {
    let stack = [];
    for(let i = 0; i < string.length; i++) {
        if (string[i] == '[' || string[i] == '{' || string[i] == '(')
        {
            // Push the bracket to the stack
            stack.push(string[i]);
            continue;
        }
      
        if (stack.length === 0) //stack length cannot be empty
            return false;
        
        let top;
        switch (string[i]){
        case ']':
            top = stack.pop(); //check matching
            if (top == '{' || top == '(')
                return false;
            break;
        case '}':
            top = stack.pop();
            if (top == '(' || top == '[')
                return false;
            break;
 
        case ')':
            top = stack.pop();
            if (top == '[' || top == '{')
                return false;
            break;
        }
    }
    
   // Check Empty Stack
   return (stack.length === 0);
}

console.log(balancedBrackets('(hello)[world]'))
// => true

console.log(balancedBrackets('([)]'))
// => false

console.log(balancedBrackets('[({}{}{})([])]'))
// => true

module.exports = balancedBrackets
