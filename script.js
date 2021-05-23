function calcular(){
    var txtn1 = document.getElementById('txt1')
    var txtn2 = document.getElementById('txt2')
    var res = document.getElementById('res')
    var grau = document.getElementById('grau')
    var imc = txtn1.value / txtn2.value * txtn2.value
    res.innerHTML = `O seu IMC é:  ${imc}`
    if (imc >= 0 && imc <= 18) {
        grau.innerHTML = `Sua faixa é: Magreza`
    }else if (imc < 24) {
        grau.innerHTML = `Sua faixa é: Normal`
    }else if (imc < 30) {
        grau.innerHTML = `Sua faixa é: Sobrepeso`
    }else{
        grau.innerHTML = `Sua faixa é: Obsidade`
    }
}
