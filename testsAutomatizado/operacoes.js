export function somar(a, b){
    return a + b;
}

export function subtracao(a, b){
    return a - b;
}

export function multiplicacao(a, b){
    return a * b;
}

export function divisao(a, b){
    if(b === 0){
        return undefined;
    }else{
        return a / b;
    }
}