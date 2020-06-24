
const counterInit = (() => {
    console.log('Counter Application Running');
    const addNumber  = () => {
        let currentValue = document.querySelector('.number h1').innerHTML;
        
        let newValue = parseInt(currentValue) + 1;
    
        document.querySelector('.number h1').innerHTML = newValue;
    

    
    };
    const subtractNumber  = () => {
        let currentValue = document.querySelector('.number h1').innerHTML;
        
        let newValue = parseInt(currentValue) - 1;
    
        document.querySelector('.number h1').innerHTML = newValue;
    
    };
    document.querySelector('.plus.btn').addEventListener("click", () => {
        addNumber();
    });
    document.querySelector('.minus.btn').addEventListener("click", () => {
        subtractNumber();
    });
})();


