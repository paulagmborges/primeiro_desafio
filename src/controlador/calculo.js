const somatorioInteirosDivisiveis = (req,res) => {
    try {
        const numero = Number(req.params.numero);
    
        if (numero <=0 || !Number.isInteger(numero)){ 
            return res.status(400).json({mensagem:'O parametro precisa ser um número inteiro , positivo e maior que zero'})
        }
       
        let soma = 0;
        for (let i =0 ; i < numero ; i++){
            if(i % 3 === 0 || i % 5 === 0){
                soma += i
            }
        }
        return res.status(200).json({mensagem:`O somatorio dos valores inteiros divisiveis por 3 ou 5 é ${soma}`})
    } catch (error) {
        return res.status(500).json({mensagem:'Erro interno no servidor'})
    }
    }
    
    module.exports = somatorioInteirosDivisiveis