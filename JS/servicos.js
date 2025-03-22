//blond
const imagemPrincipalBlond = document.querySelectorAll(".principal-blond")
const littleImagesBlond = document.querySelectorAll(".mini-imagens-blond");
littleImagesBlond.forEach( (image) => {
    image.addEventListener("click", () => {
        imagemPrincipalBlond.forEach((principal) => {
            principal.src = image.src
        });
    });
} );
//coloridos
const imagemPrincipalColoridos = document.querySelectorAll(".principal-coloridos")
const littleImagesColoridos = document.querySelectorAll(".mini-imagens-coloridos");
littleImagesColoridos.forEach( (image) => {
    image.addEventListener("click", () => {
        imagemPrincipalColoridos.forEach((principal) => {
            principal.src = image.src
        });
    });
} );
//mechas
const imagemPrincipalMechas = document.querySelectorAll(".principal-mechas")
const littleImagesMechas = document.querySelectorAll(".mini-imagens-mechas");
littleImagesMechas.forEach( (image) => {
    image.addEventListener("click", () => {
        imagemPrincipalMechas.forEach((principal) => {
            principal.src = image.src
        });
    });
} );
//morenas iluminadas
const imagemPrincipalMorenasIluminadas = document.querySelectorAll(".principal-morenas-iluminadas")
const littleImagesMorenasIluminadas = document.querySelectorAll(".mini-imagens-morenas-iluminadas");
littleImagesMorenasIluminadas.forEach( (image) => {
    image.addEventListener("click", () => {
        imagemPrincipalMorenasIluminadas.forEach((principal) => {
            principal.src = image.src
        });
    });
} );