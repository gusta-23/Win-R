const { error } = require('console');
const jimp = require('jimp');

async function main(){
    let fonte = await jimp.loadFont(jimp.FONT_SANS_32_BLACK)
    let mask = await jimp.read('mascara.png')
    //let avatar = await jimp.read('Win+r.gif')
    let fundo = await jimp.read('fundo.png')

    avatar.resize(130, 130)
    mask.resize(130, 130)
    avatar.mask(mask)
    fundo.print(fonte, 170, 175, 'Gustavo Dias')
    fundo.composite(avatar, 40, 90)

    jimp.read('http://www.example.com/path/to/lenna.jpg').then(avatar => {
        vatar.resize(130, 130)
        mask.resize(130, 130)
         avatar.mask(mask)
         fundo.print(fonte, 170, 175, 'Gustavo Dias')
         fundo.composite(avatar, 40, 90)
    })
    .catch(error => {
        console.log("Erro ao carregar a imagem")
    });
}
main()