let tokens = ["2","1","+","3","*"]

const rpn = function(tokens){

    let stack = []

    for(let token of tokens){

        if(token==='+'){

            stack.push(stack.pop()+stack.pop())

        }else if(token==='-'){

            let a = stack.pop()

            let b = stack.pop()

            stack.push(b-a)

        }else if(token==='/'){

            let a = stack.pop()

            let b = stack.pop()

            stack.push(Math.trunc(a/b))

        }else if(token==='*'){

            stack.push(stack.pop() * stack.pop())

        }else{

            stack.push(Number(token))

        }

    }

    return stack.pop()

}

console.log(rpn(tokens))