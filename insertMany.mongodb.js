const database= 'bd3_atv2';

const collection = 'bd3_atv2_produtos';

use(database);

db[collection].insertMany(
    [
        {
            "nome": "Camiseta Estampada",
            "valor": 49.90,
            "quantidade_estoque": 150,
            "fabricante": "Marca A",
            "categoria": "Vestuário",
            "descricao": "Camiseta 100% algodão com estampa divertida."
        },
        {
            "nome": "Tênis Esportivo",
            "valor": 199.90,
            "quantidade_estoque": 80,
            "fabricante": "Marca B",
            "categoria": "Calçados",
            "descricao": "Tênis leve e confortável, ideal para corridas."
        },
        {
            "nome": "Relógio Digital",
            "valor": 89.90,
            "quantidade_estoque": 40,
            "fabricante": "Marca C",
            "categoria": "Acessórios",
            "descricao": "Relógio digital com múltiplas funções."
        },
        {
            "nome": "Mochila Unissex",
            "valor": 129.90,
            "quantidade_estoque": 60,
            "fabricante": "Marca D",
            "categoria": "Acessórios",
            "descricao": "Mochila espaçosa e resistente, perfeita para viagens."
        },
        {
            "nome": "Fone de Ouvido Sem Fio",
            "valor": 299.90,
            "quantidade_estoque": 30,
            "fabricante": "Marca E",
            "categoria": "Eletrônicos",
            "descricao": "Fones com cancelamento de ruído e alta qualidade sonora."
        },
        {
            "nome": "Caderno Universitário",
            "valor": 19.90,
            "quantidade_estoque": 200,
            "fabricante": "Marca F",
            "categoria": "Papelaria",
            "descricao": "Caderno com 200 folhas, ideal para estudantes."
        },
        {
            "nome": "Luminária LED",
            "valor": 69.90,
            "quantidade_estoque": 50,
            "fabricante": "Marca G",
            "categoria": "Decoração",
            "descricao": "Luminária com ajuste de intensidade e cores."
        },
        {
            "nome": "Smartphone Modelo X",
            "valor": 1999.90,
            "quantidade_estoque": 25,
            "fabricante": "Marca H",
            "categoria": "Eletrônicos",
            "descricao": "Smartphone com câmera de alta resolução e grande armazenamento."
        },
        {
            "nome": "Mesa de Escritório",
            "valor": 499.90,
            "quantidade_estoque": 15,
            "fabricante": "Marca I",
            "categoria": "Móveis",
            "descricao": "Mesa de escritório com design moderno e funcional."
        },
        {
            "nome": "Cadeira Ergonômica",
            "valor": 799.90,
            "quantidade_estoque": 10,
            "fabricante": "Marca J",
            "categoria": "Móveis",
            "descricao": "Cadeira com suporte lombar e ajuste de altura."
        },
        {
            "nome": "Kit de Maquiagem",
            "valor": 89.90,
            "quantidade_estoque": 100,
            "fabricante": "Marca K",
            "categoria": "Beleza",
            "descricao": "Kit completo com sombras, batons e pincéis."
        },
        {
            "nome": "Cafeteira Elétrica",
            "valor": 199.90,
            "quantidade_estoque": 35,
            "fabricante": "Marca L",
            "categoria": "Eletrodomésticos",
            "descricao": "Cafeteira com sistema de filtro e timer programável."
        },
        {
            "nome": "Liquidificador",
            "valor": 159.90,
            "quantidade_estoque": 40,
            "fabricante": "Marca M",
            "categoria": "Eletrodomésticos",
            "descricao": "Liquidificador potente com copo de vidro."
        },
        {
            "nome": "Aspirador de Pó",
            "valor": 349.90,
            "quantidade_estoque": 20,
            "fabricante": "Marca N",
            "categoria": "Eletrodomésticos",
            "descricao": "Aspirador com filtro HEPA e potência ajustável."
        },
        {
            "nome": "Batedeira",
            "valor": 299.90,
            "quantidade_estoque": 15,
            "fabricante": "Marca O",
            "categoria": "Eletrodomésticos",
            "descricao": "Batedeira com 5 velocidades e tigela de inox."
        },
        {
            "nome": "Estante de Livros",
            "valor": 399.90,
            "quantidade_estoque": 30,
            "fabricante": "Marca P",
            "categoria": "Móveis",
            "descricao": "Estante espaçosa para livros e objetos decorativos."
        },
        {
            "nome": "Conjunto de Panelas",
            "valor": 249.90,
            "quantidade_estoque": 45,
            "fabricante": "Marca Q",
            "categoria": "Cozinha",
            "descricao": "Conjunto com 5 panelas antiaderentes."
        },
        {
            "nome": "Jogo de Cama Queen",
            "valor": 169.90,
            "quantidade_estoque": 70,
            "fabricante": "Marca R",
            "categoria": "Cama e Banho",
            "descricao": "Jogo de cama macio e confortável em algodão."
        },
        {
            "nome": "Cortina Blackout",
            "valor": 99.90,
            "quantidade_estoque": 60,
            "fabricante": "Marca S",
            "categoria": "Decoração",
            "descricao": "Cortina que bloqueia a luz e proporciona privacidade."
        },
        {
            "nome": "Toalha de Banho",
            "valor": 39.90,
            "quantidade_estoque": 100,
            "fabricante": "Marca T",
            "categoria": "Cama e Banho",
            "descricao": "Toalha super absorvente e macia."
        },
        {
            "nome": "Secador de Cabelo",
            "valor": 129.90,
            "quantidade_estoque": 55,
            "fabricante": "Marca U",
            "categoria": "Beleza",
            "descricao": "Secador potente com difusor e 3 temperaturas."
        },
        {
            "nome": "Escova de Dentes Elétrica",
            "valor": 89.90,
            "quantidade_estoque": 80,
            "fabricante": "Marca V",
            "categoria": "Higiene",
            "descricao": "Escova com temporizador e diferentes modos de escovação."
        },
        {
            "nome": "Monitor LED 24''",
            "valor": 799.90,
            "quantidade_estoque": 30,
            "fabricante": "Marca W",
            "categoria": "Eletrônicos",
            "descricao": "Monitor com resolução Full HD e várias entradas."
        },
        {
            "nome": "Teclado Mecânico",
            "valor": 299.90,
            "quantidade_estoque": 45,
            "fabricante": "Marca X",
            "categoria": "Eletrônicos",
            "descricao": "Teclado com retroiluminação e switches mecânicos."
        },
        {
            "nome": "Mouse Gamer",
            "valor": 159.90,
            "quantidade_estoque": 50,
            "fabricante": "Marca Y",
            "categoria": "Eletrônicos",
            "descricao": "Mouse com DPI ajustável e luz RGB."
        },
        {
            "nome": "Camisa Social",
            "valor": 89.90,
            "quantidade_estoque": 120,
            "fabricante": "Marca Z",
            "categoria": "Vestuário",
            "descricao": "Camisa social de algodão, ideal para o trabalho."
        },
        {
            "nome": "Bermuda de Praia",
            "valor": 59.90,
            "quantidade_estoque": 110,
            "fabricante": "Marca A",
            "categoria": "Vestuário",
            "descricao": "Bermuda leve e confortável para dias de sol."
        },
        {
            "nome": "Sofá Retrátil",
            "valor": 1999.90,
            "quantidade_estoque": 5,
            "fabricante": "Marca B",
            "categoria": "Móveis",
            "descricao": "Sofá retrátil com acabamento em tecido premium."
        },
        {
            "nome": "Ventilador de Mesa",
            "valor": 129.90,
            "quantidade_estoque": 40,
            "fabricante": "Marca C",
            "categoria": "Eletrodomésticos",
            "descricao": "Ventilador de mesa com 3 velocidades e oscilação."
        },
        {
            "nome": "Bolsinha Feminina",
            "valor": 79.90,
            "quantidade_estoque": 65,
            "fabricante": "Marca D",
            "categoria": "Acessórios",
            "descricao": "Bolsinha elegante para uso diário."
        },
        {
            "nome": "Chaveiro Personalizado",
            "valor": 9.90,
            "quantidade_estoque": 300,
            "fabricante": "Marca E",
            "categoria": "Acessórios",
            "descricao": "Chaveiro em metal com design exclusivo."
        },
        {
            "nome": "Caneca Térmica",
            "valor": 49.90,
            "quantidade_estoque": 100,
            "fabricante": "Marca F",
            "categoria": "Cozinha",
            "descricao": "Caneca térmica com isolamento para bebidas quentes e frias."
        },
        {
            "nome": "Kit de Ferramentas",
            "valor": 199.90,
            "quantidade_estoque": 30,
            "fabricante": "Marca G",
            "categoria": "Ferramentas",
            "descricao": "Kit completo com ferramentas essenciais para o lar."
        }
    ]
    
)