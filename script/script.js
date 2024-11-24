
const apiURL = 'https://dummyjson.com/products';

async function buscaProducts(){
    try{
        const response = await fetch(apiURL);

        if(!response.ok){
            throw new Error('Erro na rede: ' + response.statusText);
        }

        const data = await response.json();

        // produto 1
        const tituloProduto1 = data.products[0].title;
        const descricaoProduto1 = data.products[0].description;
        const valorProduto1 = data.products[0].price;
        const srcProduto1 = data.products[0].images[0];

        document.getElementById('titulo-produto1').innerHTML = tituloProduto1;
        document.getElementById('descricao-produto1').innerHTML = descricaoProduto1;
        document.getElementById('valor-produto1').innerHTML = 'U$D '+ valorProduto1;
        document.getElementById('img-produto1').src = srcProduto1;


        //produto 2
        const tituloProduto2 = data.products[1].title;
        const descricaoProduto2 = data.products[1].description;
        const valorProduto2 = data.products[1].price;
        const srcProduto2 = data.products[1].images[0];

        document.getElementById('titulo-produto2').innerHTML = tituloProduto2;
        document.getElementById('descricao-produto2').innerHTML = descricaoProduto2;
        document.getElementById('valor-produto2').innerHTML = 'U$D '+ valorProduto2;
        document.getElementById('img-produto2').src = srcProduto2;

        //produto 3
        const tituloProduto3 = data.products[2].title;
        const descricaoProduto3 = data.products[2].description;
        const valorProduto3 = data.products[2].price;
        const srcProduto3 = data.products[2].images[0];

        document.getElementById('titulo-produto3').innerHTML = tituloProduto3;
        document.getElementById('descricao-produto3').innerHTML = descricaoProduto3;
        document.getElementById('valor-produto3').innerHTML = 'U$D '+ valorProduto3;
        document.getElementById('img-produto3').src = srcProduto3;

         //produto 4
         const tituloProduto4 = data.products[3].title;
         const descricaoProduto4 = data.products[3].description;
         const valorProduto4 = data.products[3].price;
         const srcProduto4 = data.products[3].images[0];
 
         document.getElementById('titulo-produto4').innerHTML = tituloProduto4;
         document.getElementById('descricao-produto4').innerHTML = descricaoProduto4;
         document.getElementById('valor-produto4').innerHTML = 'U$D '+ valorProduto4;
         document.getElementById('img-produto4').src = srcProduto4;

    }catch(error){
        alert("Erro com a requisição", error);
    }

}
window.addEventListener('load', buscaProducts());