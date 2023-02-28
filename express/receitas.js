let receitas = {
    bolos: [
        /// bolo simples
        {
            tipo: 'bolo-simples',
            ingredientes: ['2 xicaras (cha) de acucar', '3 xicaras (cha) de farinha de trigo', '4 colheres (sopa) de margarina', '3 ovos', '1 e 1/2 xicara (cha) de leite', '1 colher (sopa) bem cheia de fermento em po'],
            modo_de_preparo: [
                'Bata as claras em neve e reserve.', 'Misture as gemas, a margarina e o acucar ate obter uma massa homogênea.', 'Acrescente o leite e a farinha de trigo aos poucos, sem parar de bater.', 'Por último, adicione as claras em neve e o fermento.', 'Despeje a massa em uma forma grande de furo central untada e enfarinhada.', 'Asse em forno médio 180 °C, preaquecido, por aproximadamente 40 minutos ou ao furar o bolo com um garfo, este saia limpo.'
            ]
        },
        /// bolo de cenoura
        {
            tipo: 'bolo-de-cenoura',
            ingredientes: [
                '1/2 xicara (cha) de oleo',
                '3 cenouras medias raladas',
                '4 ovos',
                '2 xicaras (cha) de acucar',
                '2 e 1/2 xicaras (cha) de farinha de trigo',
                '1 colher (sopa) de fermento em po'
            ],
            cobertura: [
                '1 colher (sopa) de manteiga',
                '3 colheres (sopa) de chocolate em po',
                '1 xicara (cha) de acucar',
                '1 xicara (cha) de leite'
            ],
            modo_de_preparo: [
                'Em um liquidificador, adicione a cenoura, os ovos e o oleo, depois misture.',
                'Acrescente o acucar e bata novamente por 5 minutos.',
                'Em uma tigela ou na batedeira, adicione a farinha de trigo e depois misture novamente.',
                'Acrescente o fermento e misture lentamente com uma colher.',
                'Asse em um forno preaquecido a 180° C por aproximadamente 40 minutos.'
            ],
            modo_de_preparo_cobertura: [
                'Despeje em uma tigela a manteiga, o chocolate em po, o acucar e o leite, depois misture.',
                'Leve a mistura ao fogo e continue misturando ate obter uma consistencia cremosa, depois despeje a calda por cima do bolo.'
            ]
        }
    ]
}

module.exports.receitas = receitas;