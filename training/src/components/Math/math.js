export default function Math(props){

    const { first, second, operator } = props;
    function handle(){
        let result = '';
        switch(operator){
            case '+':
                result = parseInt(first) + parseInt(second)
                break;
            case '-':
                result = parseInt(first) - parseInt(second)
                break;
            case '*':
                result = parseInt(first) * parseInt(second)
                break;
            case '/':
                parseInt(second) === 0 ? result = 'Infinity' : result = parseInt(first) / parseInt(second)
                break;
            default :
                result = 'Invalid Operation'
        }
        return result;
    }
    return (
        <div>
            {first} {operator} {second} = { handle()} 
        </div>
    )
}