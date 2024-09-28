const database = 'bd3_atv2';

const collection = 'bd3_atv2_produtos';

use(database);

// A
// Encontrar o produto com o maior valor
// db[collection].find().sort({ valor: -1 }).limit(1);

//B
//Encontrar o produto com o menor valor
// db[collection].find().sort({ valor: 1 }).limit(1);


// C
// Definindo os valores mínimo e máximo
// const valorMinimo = 50; 
// const valorMaximo = 200; 

// // Encontrar produtos na faixa de valor
// db[collection].find({
//     valor: {
//         $gte: valorMinimo, 
//         $lte: valorMaximo 
//     }
// });


// D
// const categoriaD = 'Acessórios';

// db[collection].find({
//     categoria: categoriaD
// });


// E
// const categoriaD = 'Acessórios';
// const categoriaD2 = 'Móveis'
// db[collection].find({
//     $or: [
//     {categoria: categoriaD},
//     {categoria: categoriaD2}
//     ]

// });


// F
// const excluiCat = ['Acessórios' ,'Móveis']

// db[collection].find({
//     categoria: { $nin: excluiCat}
// })



// G Barato ao mais caro 
// db[collection].find().sort({ valor: 1 });


//H
// db[collection].find().sort({ valor: -1 });

// const prodCat = 'Eletrônicos';

// db[collection].find({ categoria: prodCat }).sort({ valor: 1 });


// i
// const catProd = 'Eletrônicos';

// db[collection].find(
//     { categoria: catProd}).sort({ valor: -1 }

//     );


// j

// const catEx = 'Eletrônicos'; 

// db[collection].find(
//     { categoria: { $ne: catEx } }).sort({ valor: -1 }
        
//     );