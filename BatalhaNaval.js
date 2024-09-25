
// Escopo global
NivelJogo = false;
PocioneBarcos = false;

if(NivelJogo == false){
    console.log("Selecione um nivel de jogo");
}
if(PocioneBarcos == false){
    console.log("Posicione os barcos");
}
function Dificil(){
    NivelJogo = true;
    QteTiros = 30;
    QteBarcos = 20;
    alert("Nivel facil!");
};
function Facil(){
    NivelJogo = true;
    QteTiros = 20;
    QteBarcos = 10;
    alert("Nivel dificil!");
};
function PosicionaBarcos(){
    PocioneBarcos = true;
    console.log("Barcos posicionados");
    if(NivelJogo == false){
        alert("Selecione um nivel de jogo!");
        window.location.reload(true);
    }
    Pontos = 0;
    let min = 0, max = 4;
    tabela = [[false,false,false,false,false,false,false,false,false,false],
             [false,false,false,false,false,false,false,false,false,false],
             [false,false,false,false,false,false,false,false,false,false],
             [false,false,false,false,false,false,false,false,false,false],
             [false,false,false,false,false,false,false,false,false,false]];

    for(let i=0;i<QteBarcos;i++){
        let numeroAleatoriolinha = Math.floor(Math.random() * (max - min + 1)) + min;
        let numeroAleatoriocoluna = Math.floor(Math.random() * (max - min + 1)) + min;
        tabela[numeroAleatoriolinha][numeroAleatoriocoluna] = true;
    }
};
function revelar00(){
    let PosicaoLinha = 0, PosicaoColuna = 0;
    const tiros = document.querySelector("#Tiros");
    const Score = document.querySelector("#Pontos");

    if(tabela[PosicaoLinha][PosicaoColuna] === true){
        QteTiros = QteTiros - 1;
        Pontos = Pontos + 20;
        vet = "0";
        //alert("Barco afundado");
        var img = document.querySelector("#quadro00");
        img.setAttribute("src", "src/img/atingido.jpg");
    }
    if(tabela[PosicaoLinha][PosicaoColuna] === false){
        QteTiros = QteTiros - 1;
        //alert("Tiro na agua");
        var img = document.querySelector("#quadro00");
        img.setAttribute("src", "src/img/tiroagua.jpg");
    }
    if(QteTiros == 0){ 
        alert("Fim de jogo!");
        window.location.reload(true);
    }
    tiros.innerText = QteTiros;
    Score.innerText = Pontos;
};
function revelar01(){
    let PosicaoLinha = 0, PosicaoColuna = 1;
    
    const tiros = document.querySelector("#Tiros");
    const Score = document.querySelector("#Pontos");
    
    if(tabela[PosicaoLinha][PosicaoColuna] === true){
        QteTiros = QteTiros - 1;
        Pontos = Pontos + 20;
        //alert("Barco afundado");
        var img = document.querySelector("#quadro01");
        img.setAttribute("src", "src/img/atingido.jpg");
    }
    if(tabela[PosicaoLinha][PosicaoColuna] === false){
        QteTiros = QteTiros - 1;
        //alert("Tiro na agua");
        var img = document.querySelector("#quadro01");
        img.setAttribute("src", "src/img/tiroagua.jpg");
    }
    if(QteTiros == 0){ 
        alert("Fim de jogo!");
        window.location.reload(true);
    }
    tiros.innerText = QteTiros;
    Score.innerText = Pontos;
};
function revelar02(){
    let PosicaoLinha = 0, PosicaoColuna = 2;
    const tiros = document.querySelector("#Tiros");
    const Score = document.querySelector("#Pontos");
    
    if(tabela[PosicaoLinha][PosicaoColuna] === true){
        QteTiros = QteTiros - 1;
        Pontos = Pontos + 20;
        //alert("Barco afundado");
        var img = document.querySelector("#quadro02");
        img.setAttribute("src", "src/img/atingido.jpg");
    }
    if(tabela[PosicaoLinha][PosicaoColuna] === false){
        QteTiros = QteTiros - 1;
        //alert("Tiro na agua");
        var img = document.querySelector("#quadro02");
        img.setAttribute("src", "src/img/tiroagua.jpg");
    }
    if(QteTiros == 0){ 
        alert("Fim de jogo!");
        window.location.reload(true);
    }
    tiros.innerText = QteTiros;
    Score.innerText = Pontos;
};
function revelar03(){
    let PosicaoLinha = 0, PosicaoColuna = 3;
    const tiros = document.querySelector("#Tiros");
    const Score = document.querySelector("#Pontos");

    if(tabela[PosicaoLinha][PosicaoColuna] === true){
        QteTiros = QteTiros - 1;
        Pontos = Pontos + 20;
        //alert("Barco afundado");
        var img = document.querySelector("#quadro03");
        img.setAttribute("src", "src/img/atingido.jpg");
    }
    if(tabela[PosicaoLinha][PosicaoColuna] === false){
        QteTiros = QteTiros - 1;
        //alert("Tiro na agua");
        var img = document.querySelector("#quadro03");
        img.setAttribute("src", "src/img/tiroagua.jpg");
    }
    if(QteTiros == 0){ 
        alert("Fim de jogo!");
        window.location.reload(true);
    }
    tiros.innerText = QteTiros;
    Score.innerText = Pontos;
};
function revelar04(){
    let PosicaoLinha = 0, PosicaoColuna = 4;
    const tiros = document.querySelector("#Tiros");
    const Score = document.querySelector("#Pontos");
    
    if(tabela[PosicaoLinha][PosicaoColuna] === true){
        QteTiros = QteTiros - 1;
        Pontos = Pontos + 20;
        //alert("Barco afundado");
        var img = document.querySelector("#quadro04");
        img.setAttribute("src", "src/img/atingido.jpg");
    }
    if(tabela[PosicaoLinha][PosicaoColuna] === false){
        QteTiros = QteTiros - 1;
        //alert("Tiro na agua");
        var img = document.querySelector("#quadro04");
        img.setAttribute("src", "src/img/tiroagua.jpg");
    }
    if(QteTiros == 0){ 
        alert("Fim de jogo!");
        window.location.reload(true);
    }
    tiros.innerText = QteTiros;
    Score.innerText = Pontos;
};
function revelar05(){
    let PosicaoLinha = 0, PosicaoColuna = 5;
    const tiros = document.querySelector("#Tiros");
    const Score = document.querySelector("#Pontos");
    
    if(tabela[PosicaoLinha][PosicaoColuna] === true){
        QteTiros = QteTiros - 1;
        Pontos = Pontos + 20;
        //alert("Barco afundado");
        var img = document.querySelector("#quadro05");
        img.setAttribute("src", "src/img/atingido.jpg");
    }
    if(tabela[PosicaoLinha][PosicaoColuna] === false){
        QteTiros = QteTiros - 1;
        //alert("Tiro na agua");
        var img = document.querySelector("#quadro05");
        img.setAttribute("src", "src/img/tiroagua.jpg");
    }
    if(QteTiros == 0){ 
        alert("Fim de jogo!");
        window.location.reload(true);
    }
    tiros.innerText = QteTiros;
    Score.innerText = Pontos;
};
function revelar06(){
    let PosicaoLinha = 0, PosicaoColuna = 6;
    const tiros = document.querySelector("#Tiros");
    const Score = document.querySelector("#Pontos");
    
    if(tabela[PosicaoLinha][PosicaoColuna] === true){
        QteTiros = QteTiros - 1;
        Pontos = Pontos + 20;
        //alert("Barco afundado");
        var img = document.querySelector("#quadro06");
        img.setAttribute("src", "src/img/atingido.jpg");
    }
    if(tabela[PosicaoLinha][PosicaoColuna] === false){
        QteTiros = QteTiros - 1;
        //alert("Tiro na agua");
        var img = document.querySelector("#quadro06");
        img.setAttribute("src", "src/img/tiroagua.jpg");
    }
    if(QteTiros == 0){ 
        alert("Fim de jogo!");
        window.location.reload(true);
    }
    tiros.innerText = QteTiros;
    Score.innerText = Pontos;
};
function revelar07(){
    let PosicaoLinha = 0, PosicaoColuna = 7;
    const tiros = document.querySelector("#Tiros");
    const Score = document.querySelector("#Pontos");
    
    if(tabela[PosicaoLinha][PosicaoColuna] === true){
        QteTiros = QteTiros - 1;
        Pontos = Pontos + 20;
        //alert("Barco afundado");
        var img = document.querySelector("#quadro07");
        img.setAttribute("src", "src/img/atingido.jpg");
    }
    if(tabela[PosicaoLinha][PosicaoColuna] === false){
        QteTiros = QteTiros - 1;
        //alert("Tiro na agua");
        var img = document.querySelector("#quadro07");
        img.setAttribute("src", "src/img/tiroagua.jpg");
    }
    if(QteTiros == 0){ 
        alert("Fim de jogo!");
        window.location.reload(true);
    }
    tiros.innerText = QteTiros;
    Score.innerText = Pontos;
};
function revelar08(){
    let PosicaoLinha = 0, PosicaoColuna = 8;
    const tiros = document.querySelector("#Tiros");
    const Score = document.querySelector("#Pontos");
    
    if(tabela[PosicaoLinha][PosicaoColuna] === true){
        QteTiros = QteTiros - 1;
        Pontos = Pontos + 20;
        //alert("Barco afundado");
        var img = document.querySelector("#quadro08");
        img.setAttribute("src", "src/img/atingido.jpg");
    }
    if(tabela[PosicaoLinha][PosicaoColuna] === false){
        QteTiros = QteTiros - 1;
        //alert("Tiro na agua");
        var img = document.querySelector("#quadro08");
        img.setAttribute("src", "src/img/tiroagua.jpg");
    }
    if(QteTiros == 0){ 
        alert("Fim de jogo!");
        window.location.reload(true);
    }
    tiros.innerText = QteTiros;
    Score.innerText = Pontos;
};
function revelar09(){
    let PosicaoLinha = 0, PosicaoColuna = 9;
    const tiros = document.querySelector("#Tiros");
    const Score = document.querySelector("#Pontos");

    if(tabela[PosicaoLinha][PosicaoColuna] === true){
        QteTiros = QteTiros - 1;
        Pontos = Pontos + 20;
        //alert("Barco afundado");
        var img = document.querySelector("#quadro09");
        img.setAttribute("src", "src/img/atingido.jpg");
    }
    if(tabela[PosicaoLinha][PosicaoColuna] === false){
        QteTiros = QteTiros - 1;
        //alert("Tiro na agua");
        var img = document.querySelector("#quadro09");
        img.setAttribute("src", "src/img/tiroagua.jpg");
    }
    if(QteTiros == 0){ 
        alert("Fim de jogo!");
        window.location.reload(true);
    }
    tiros.innerText = QteTiros;
    Score.innerText = Pontos;
};
function revelar10(){
    let PosicaoLinha = 1, PosicaoColuna = 0;
    const tiros = document.querySelector("#Tiros");
    const Score = document.querySelector("#Pontos");

    if(tabela[PosicaoLinha][PosicaoColuna] === true){
        QteTiros = QteTiros - 1;
        Pontos = Pontos + 20;
        //alert("Barco afundado");
        var img = document.querySelector("#quadro10");
        img.setAttribute("src", "src/img/atingido.jpg");
    }
    if(tabela[PosicaoLinha][PosicaoColuna] === false){
        QteTiros = QteTiros - 1;
        //alert("Tiro na agua");
        var img = document.querySelector("#quadro10");
        img.setAttribute("src", "src/img/tiroagua.jpg");
    }
    if(QteTiros == 0){ 
        alert("Fim de jogo!");
        window.location.reload(true);
    }
    tiros.innerText = QteTiros;
    Score.innerText = Pontos;
};
function revelar11(){
    let PosicaoLinha = 1, PosicaoColuna = 1;
    const tiros = document.querySelector("#Tiros");
    const Score = document.querySelector("#Pontos");

    if(tabela[PosicaoLinha][PosicaoColuna] === true){
        QteTiros = QteTiros - 1;
        Pontos = Pontos + 20;
        //alert("Barco afundado");
        var img = document.querySelector("#quadro11");
        img.setAttribute("src", "src/img/atingido.jpg");
    }
    if(tabela[PosicaoLinha][PosicaoColuna] === false){
        QteTiros = QteTiros - 1;
        //alert("Tiro na agua");
        var img = document.querySelector("#quadro11");
        img.setAttribute("src", "src/img/tiroagua.jpg");
    }
    if(QteTiros == 0){ 
        alert("Fim de jogo!");
        window.location.reload(true);
    }
    tiros.innerText = QteTiros;
    Score.innerText = Pontos;
};
function revelar12(){
    let PosicaoLinha = 1, PosicaoColuna = 2;
    const tiros = document.querySelector("#Tiros");
    const Score = document.querySelector("#Pontos");

    if(tabela[PosicaoLinha][PosicaoColuna] === true){
        QteTiros = QteTiros - 1;
        Pontos = Pontos + 20;
        //alert("Barco afundado");
        var img = document.querySelector("#quadro12");
        img.setAttribute("src", "src/img/atingido.jpg");
    }
    if(tabela[PosicaoLinha][PosicaoColuna] === false){
        QteTiros = QteTiros - 1;
        //alert("Tiro na agua");
        var img = document.querySelector("#quadro12");
        img.setAttribute("src", "src/img/tiroagua.jpg");
    }
    if(QteTiros == 0){ 
        alert("Fim de jogo!");
        window.location.reload(true);
    }
    tiros.innerText = QteTiros;
    Score.innerText = Pontos;
};
function revelar13(){
    let PosicaoLinha = 1, PosicaoColuna = 3;
    const tiros = document.querySelector("#Tiros");
    const Score = document.querySelector("#Pontos");

    if(tabela[PosicaoLinha][PosicaoColuna] === true){
        QteTiros = QteTiros - 1;
        Pontos = Pontos + 20;
        //alert("Barco afundado");
        var img = document.querySelector("#quadro13");
        img.setAttribute("src", "src/img/atingido.jpg");
    }
    if(tabela[PosicaoLinha][PosicaoColuna] === false){
        QteTiros = QteTiros - 1;
        //alert("Tiro na agua");
        var img = document.querySelector("#quadro13");
        img.setAttribute("src", "src/img/tiroagua.jpg");
    }
    if(QteTiros == 0){ 
        alert("Fim de jogo!");
        window.location.reload(true);
    }
    tiros.innerText = QteTiros;
    Score.innerText = Pontos;
};
function revelar14(){
    let PosicaoLinha = 1, PosicaoColuna = 4;
    const tiros = document.querySelector("#Tiros");
    const Score = document.querySelector("#Pontos");

    if(tabela[PosicaoLinha][PosicaoColuna] === true){
        QteTiros = QteTiros - 1;
        Pontos = Pontos + 20;
        //alert("Barco afundado");
        var img = document.querySelector("#quadro14");
        img.setAttribute("src", "src/img/atingido.jpg");
    }
    if(tabela[PosicaoLinha][PosicaoColuna] === false){
        QteTiros = QteTiros - 1;
        //alert("Tiro na agua");
        var img = document.querySelector("#quadro14");
        img.setAttribute("src", "src/img/tiroagua.jpg");
    }
    if(QteTiros == 0){ 
        alert("Fim de jogo!");
        window.location.reload(true);
    }
    tiros.innerText = QteTiros;
    Score.innerText = Pontos;
};
function revelar15(){
    let PosicaoLinha = 1, PosicaoColuna = 5;
    const tiros = document.querySelector("#Tiros");
    const Score = document.querySelector("#Pontos");

    if(tabela[PosicaoLinha][PosicaoColuna] === true){
        QteTiros = QteTiros - 1;
        Pontos = Pontos + 20;
        //alert("Barco afundado");
        var img = document.querySelector("#quadro15");
        img.setAttribute("src", "src/img/atingido.jpg");
    }
    if(tabela[PosicaoLinha][PosicaoColuna] === false){
        QteTiros = QteTiros - 1;
        //alert("Tiro na agua");
        var img = document.querySelector("#quadro15");
        img.setAttribute("src", "src/img/tiroagua.jpg");
    }
    if(QteTiros == 0){ 
        alert("Fim de jogo!");
        window.location.reload(true);
    }
    tiros.innerText = QteTiros;
    Score.innerText = Pontos;
};
function revelar16(){
    let PosicaoLinha = 1, PosicaoColuna = 6;
    const tiros = document.querySelector("#Tiros");
    const Score = document.querySelector("#Pontos");

    if(tabela[PosicaoLinha][PosicaoColuna] === true){
        QteTiros = QteTiros - 1;
        Pontos = Pontos + 20;
        //alert("Barco afundado");
        var img = document.querySelector("#quadro16");
        img.setAttribute("src", "src/img/atingido.jpg");
    }
    if(tabela[PosicaoLinha][PosicaoColuna] === false){
        QteTiros = QteTiros - 1;
        //alert("Tiro na agua");
        var img = document.querySelector("#quadro16");
        img.setAttribute("src", "src/img/tiroagua.jpg");
    }
    if(QteTiros == 0){ 
        alert("Fim de jogo!");
        window.location.reload(true);
    }
    tiros.innerText = QteTiros;
    Score.innerText = Pontos;
};
function revelar17(){
    let PosicaoLinha = 1, PosicaoColuna = 7;
    const tiros = document.querySelector("#Tiros");
    const Score = document.querySelector("#Pontos");

    if(tabela[PosicaoLinha][PosicaoColuna] === true){
        QteTiros = QteTiros - 1;
        Pontos = Pontos + 20;
        //alert("Barco afundado");
        var img = document.querySelector("#quadro17");
        img.setAttribute("src", "src/img/atingido.jpg");
    }
    if(tabela[PosicaoLinha][PosicaoColuna] === false){
        QteTiros = QteTiros - 1;
        //alert("Tiro na agua");
        var img = document.querySelector("#quadro17");
        img.setAttribute("src", "src/img/tiroagua.jpg");
    }
    if(QteTiros == 0){ 
        alert("Fim de jogo!");
        window.location.reload(true);
    }
    tiros.innerText = QteTiros;
    Score.innerText = Pontos;
};
function revelar18(){
    let PosicaoLinha = 1, PosicaoColuna = 8;
    const tiros = document.querySelector("#Tiros");
    const Score = document.querySelector("#Pontos");

    if(tabela[PosicaoLinha][PosicaoColuna] === true){
        QteTiros = QteTiros - 1;
        Pontos = Pontos + 20;
        //alert("Barco afundado");
        var img = document.querySelector("#quadro18");
        img.setAttribute("src", "src/img/atingido.jpg");
    }
    if(tabela[PosicaoLinha][PosicaoColuna] === false){
        QteTiros = QteTiros - 1;
        //alert("Tiro na agua");
        var img = document.querySelector("#quadro18");
        img.setAttribute("src", "src/img/tiroagua.jpg");
    }
    if(QteTiros == 0){ 
        alert("Fim de jogo!");
        window.location.reload(true);
    }
    tiros.innerText = QteTiros;
    Score.innerText = Pontos;
};
function revelar19(){
    let PosicaoLinha = 1, PosicaoColuna = 9;
    const tiros = document.querySelector("#Tiros");
    const Score = document.querySelector("#Pontos");

    if(tabela[PosicaoLinha][PosicaoColuna] === true){
        QteTiros = QteTiros - 1;
        Pontos = Pontos + 20;
        //alert("Barco afundado");
        var img = document.querySelector("#quadro19");
        img.setAttribute("src", "src/img/atingido.jpg");
    }
    if(tabela[PosicaoLinha][PosicaoColuna] === false){
        QteTiros = QteTiros - 1;
        //alert("Tiro na agua");
        var img = document.querySelector("#quadro19");
        img.setAttribute("src", "src/img/tiroagua.jpg");
    }
    if(QteTiros == 0){ 
        alert("Fim de jogo!");
        window.location.reload(true);
    }
    tiros.innerText = QteTiros;
    Score.innerText = Pontos;
};
function revelar20(){
    let PosicaoLinha = 2, PosicaoColuna = 0;
    const tiros = document.querySelector("#Tiros");
    const Score = document.querySelector("#Pontos");

    if(tabela[PosicaoLinha][PosicaoColuna] === true){
        QteTiros = QteTiros - 1;
        Pontos = Pontos + 20;
        //alert("Barco afundado");
        var img = document.querySelector("#quadro20");
        img.setAttribute("src", "src/img/atingido.jpg");
    }
    if(tabela[PosicaoLinha][PosicaoColuna] === false){
        QteTiros = QteTiros - 1;
        //alert("Tiro na agua");
        var img = document.querySelector("#quadro20");
        img.setAttribute("src", "src/img/tiroagua.jpg");
    }
    if(QteTiros == 0){ 
        alert("Fim de jogo!");
        window.location.reload(true);
    }
    tiros.innerText = QteTiros;
    Score.innerText = Pontos;
};
function revelar21(){
    let PosicaoLinha = 2, PosicaoColuna = 1;
    const tiros = document.querySelector("#Tiros");
    const Score = document.querySelector("#Pontos");

    if(tabela[PosicaoLinha][PosicaoColuna] === true){
        QteTiros = QteTiros - 1;
        Pontos = Pontos + 20;
        //alert("Barco afundado");
        var img = document.querySelector("#quadro21");
        img.setAttribute("src", "src/img/atingido.jpg");
    }
    if(tabela[PosicaoLinha][PosicaoColuna] === false){
        QteTiros = QteTiros - 1;
        //alert("Tiro na agua");
        var img = document.querySelector("#quadro21");
        img.setAttribute("src", "src/img/tiroagua.jpg");
    }
    if(QteTiros == 0){ 
        alert("Fim de jogo!");
        window.location.reload(true);
    }
    tiros.innerText = QteTiros;
    Score.innerText = Pontos;
};
function revelar22(){
    let PosicaoLinha = 2, PosicaoColuna = 2;
    const tiros = document.querySelector("#Tiros");
    const Score = document.querySelector("#Pontos");

    if(tabela[PosicaoLinha][PosicaoColuna] === true){
        QteTiros = QteTiros - 1;
        Pontos = Pontos + 20;
        //alert("Barco afundado");
        var img = document.querySelector("#quadro22");
        img.setAttribute("src", "src/img/atingido.jpg");
    }
    if(tabela[PosicaoLinha][PosicaoColuna] === false){
        QteTiros = QteTiros - 1;
        //alert("Tiro na agua");
        var img = document.querySelector("#quadro22");
        img.setAttribute("src", "src/img/tiroagua.jpg");
    }
    if(QteTiros == 0){ 
        alert("Fim de jogo!");
        window.location.reload(true);
    }
    tiros.innerText = QteTiros;
    Score.innerText = Pontos;
};
function revelar23(){
    let PosicaoLinha = 2, PosicaoColuna = 3;
    const tiros = document.querySelector("#Tiros");
    const Score = document.querySelector("#Pontos");

    if(tabela[PosicaoLinha][PosicaoColuna] === true){
        QteTiros = QteTiros - 1;
        Pontos = Pontos + 20;
        //alert("Barco afundado");
        var img = document.querySelector("#quadro23");
        img.setAttribute("src", "src/img/atingido.jpg");
    }
    if(tabela[PosicaoLinha][PosicaoColuna] === false){
        QteTiros = QteTiros - 1;
        //alert("Tiro na agua");
        var img = document.querySelector("#quadro23");
        img.setAttribute("src", "src/img/tiroagua.jpg");
    }
    if(QteTiros == 0){ 
        alert("Fim de jogo!");
        window.location.reload(true);
    }
    tiros.innerText = QteTiros;
    Score.innerText = Pontos;
};
function revelar24(){
    let PosicaoLinha = 2, PosicaoColuna = 4;
    const tiros = document.querySelector("#Tiros");
    const Score = document.querySelector("#Pontos");

    if(tabela[PosicaoLinha][PosicaoColuna] === true){
        QteTiros = QteTiros - 1;
        Pontos = Pontos + 20;
        //alert("Barco afundado");
        var img = document.querySelector("#quadro24");
        img.setAttribute("src", "src/img/atingido.jpg");
    }
    if(tabela[PosicaoLinha][PosicaoColuna] === false){
        QteTiros = QteTiros - 1;
        //alert("Tiro na agua");
        var img = document.querySelector("#quadro24");
        img.setAttribute("src", "src/img/tiroagua.jpg");
    }
    if(QteTiros == 0){ 
        alert("Fim de jogo!");
        window.location.reload(true);
    }
    tiros.innerText = QteTiros;
    Score.innerText = Pontos;
};
function revelar25(){
    let PosicaoLinha = 2, PosicaoColuna = 5;
    const tiros = document.querySelector("#Tiros");
    const Score = document.querySelector("#Pontos");

    if(tabela[PosicaoLinha][PosicaoColuna] === true){
        QteTiros = QteTiros - 1;
        Pontos = Pontos + 20;
        //alert("Barco afundado");
        var img = document.querySelector("#quadro25");
        img.setAttribute("src", "src/img/atingido.jpg");
    }
    if(tabela[PosicaoLinha][PosicaoColuna] === false){
        QteTiros = QteTiros - 1;
        //alert("Tiro na agua");
        var img = document.querySelector("#quadro25");
        img.setAttribute("src", "src/img/tiroagua.jpg");
    }
    if(QteTiros == 0){ 
        alert("Fim de jogo!");
        window.location.reload(true);
    }
    tiros.innerText = QteTiros;
    Score.innerText = Pontos;
};
function revelar26(){
    let PosicaoLinha = 2, PosicaoColuna = 6;
    const tiros = document.querySelector("#Tiros");
    const Score = document.querySelector("#Pontos");

    if(tabela[PosicaoLinha][PosicaoColuna] === true){
        QteTiros = QteTiros - 1;
        Pontos = Pontos + 20;
        //alert("Barco afundado");
        var img = document.querySelector("#quadro26");
        img.setAttribute("src", "src/img/atingido.jpg");
    }
    if(tabela[PosicaoLinha][PosicaoColuna] === false){
        QteTiros = QteTiros - 1;
        //alert("Tiro na agua");
        var img = document.querySelector("#quadro26");
        img.setAttribute("src", "src/img/tiroagua.jpg");
    }
    if(QteTiros == 0){ 
        alert("Fim de jogo!");
        window.location.reload(true);
    }
    tiros.innerText = QteTiros;
    Score.innerText = Pontos;
};
function revelar27(){
    let PosicaoLinha = 2, PosicaoColuna = 7;
    const tiros = document.querySelector("#Tiros");
    const Score = document.querySelector("#Pontos");

    if(tabela[PosicaoLinha][PosicaoColuna] === true){
        QteTiros = QteTiros - 1;
        Pontos = Pontos + 20;
        //alert("Barco afundado");
        var img = document.querySelector("#quadro27");
        img.setAttribute("src", "src/img/atingido.jpg");
    }
    if(tabela[PosicaoLinha][PosicaoColuna] === false){
        QteTiros = QteTiros - 1;
        //alert("Tiro na agua");
        var img = document.querySelector("#quadro27");
        img.setAttribute("src", "src/img/tiroagua.jpg");
    }
    if(QteTiros == 0){ 
        alert("Fim de jogo!");
        window.location.reload(true);
    }
    tiros.innerText = QteTiros;
    Score.innerText = Pontos;
};
function revelar28(){
    let PosicaoLinha = 2, PosicaoColuna = 8;
    const tiros = document.querySelector("#Tiros");
    const Score = document.querySelector("#Pontos");

    if(tabela[PosicaoLinha][PosicaoColuna] === true){
        QteTiros = QteTiros - 1;
        Pontos = Pontos + 20;
        //alert("Barco afundado");
        var img = document.querySelector("#quadro29");
        img.setAttribute("src", "src/img/atingido.jpg");
    }
    if(tabela[PosicaoLinha][PosicaoColuna] === false){
        QteTiros = QteTiros - 1;
        //alert("Tiro na agua");
        var img = document.querySelector("#quadro28");
        img.setAttribute("src", "src/img/tiroagua.jpg");
    }
    if(QteTiros == 0){ 
        alert("Fim de jogo!");
        window.location.reload(true);
    }
    tiros.innerText = QteTiros;
    Score.innerText = Pontos;
};
function revelar29(){
    let PosicaoLinha = 2, PosicaoColuna = 9;
    const tiros = document.querySelector("#Tiros");
    const Score = document.querySelector("#Pontos");

    if(tabela[PosicaoLinha][PosicaoColuna] === true){
        QteTiros = QteTiros - 1;
        Pontos = Pontos + 20;
        //alert("Barco afundado");
        var img = document.querySelector("#quadro29");
        img.setAttribute("src", "src/img/atingido.jpg");
    }
    if(tabela[PosicaoLinha][PosicaoColuna] === false){
        QteTiros = QteTiros - 1;
        //alert("Tiro na agua");
        var img = document.querySelector("#quadro29");
        img.setAttribute("src", "src/img/tiroagua.jpg");
    }
    if(QteTiros == 0){ 
        alert("Fim de jogo!");
        window.location.reload(true);
    }
    tiros.innerText = QteTiros;
    Score.innerText = Pontos;
};
function revelar30(){
    let PosicaoLinha = 3, PosicaoColuna = 0;
    const tiros = document.querySelector("#Tiros");
    const Score = document.querySelector("#Pontos");

    if(tabela[PosicaoLinha][PosicaoColuna] === true){
        QteTiros = QteTiros - 1;
        Pontos = Pontos + 20;
        //alert("Barco afundado");
        var img = document.querySelector("#quadro30");
        img.setAttribute("src", "src/img/atingido.jpg");
    }
    if(tabela[PosicaoLinha][PosicaoColuna] === false){
        QteTiros = QteTiros - 1;
        //alert("Tiro na agua");
        var img = document.querySelector("#quadro30");
        img.setAttribute("src", "src/img/tiroagua.jpg");
    }
    if(QteTiros == 0){ 
        alert("Fim de jogo!");
        window.location.reload(true);
    }
    tiros.innerText = QteTiros;
    Score.innerText = Pontos;
};
function revelar31(){
    let PosicaoLinha = 3, PosicaoColuna = 1;
    const tiros = document.querySelector("#Tiros");
    const Score = document.querySelector("#Pontos");

    if(tabela[PosicaoLinha][PosicaoColuna] === true){
        QteTiros = QteTiros - 1;
        Pontos = Pontos + 20;
        //alert("Barco afundado");
        var img = document.querySelector("#quadro31");
        img.setAttribute("src", "src/img/atingido.jpg");
    }
    if(tabela[PosicaoLinha][PosicaoColuna] === false){
        QteTiros = QteTiros - 1;
        //alert("Tiro na agua");
        var img = document.querySelector("#quadro31");
        img.setAttribute("src", "src/img/tiroagua.jpg");
    }
    if(QteTiros == 0){ 
        alert("Fim de jogo!");
        window.location.reload(true);
    }
    tiros.innerText = QteTiros;
    Score.innerText = Pontos;
};
function revelar32(){
    let PosicaoLinha = 3, PosicaoColuna = 2;
    const tiros = document.querySelector("#Tiros");
    const Score = document.querySelector("#Pontos");

    if(tabela[PosicaoLinha][PosicaoColuna] === true){
        QteTiros = QteTiros - 1;
        Pontos = Pontos + 20;
        //alert("Barco afundado");
        var img = document.querySelector("#quadro32");
        img.setAttribute("src", "src/img/atingido.jpg");
    }
    if(tabela[PosicaoLinha][PosicaoColuna] === false){
        QteTiros = QteTiros - 1;
        //alert("Tiro na agua");
        var img = document.querySelector("#quadro32");
        img.setAttribute("src", "src/img/tiroagua.jpg");
    }
    if(QteTiros == 0){ 
        alert("Fim de jogo!");
        window.location.reload(true);
    }
    tiros.innerText = QteTiros;
    Score.innerText = Pontos;
};
function revelar33(){
    let PosicaoLinha = 3, PosicaoColuna = 3;
    const tiros = document.querySelector("#Tiros");
    const Score = document.querySelector("#Pontos");

    if(tabela[PosicaoLinha][PosicaoColuna] === true){
        QteTiros = QteTiros - 1;
        Pontos = Pontos + 20;
        //alert("Barco afundado");
        var img = document.querySelector("#quadro33");
        img.setAttribute("src", "src/img/atingido.jpg");
    }
    if(tabela[PosicaoLinha][PosicaoColuna] === false){
        QteTiros = QteTiros - 1;
        //alert("Tiro na agua");
        var img = document.querySelector("#quadro33");
        img.setAttribute("src", "src/img/tiroagua.jpg");
    }
    if(QteTiros == 0){ 
        alert("Fim de jogo!");
        window.location.reload(true);
    }
    tiros.innerText = QteTiros;
    Score.innerText = Pontos;
};
function revelar34(){
    let PosicaoLinha = 3, PosicaoColuna = 4;
    const tiros = document.querySelector("#Tiros");
    const Score = document.querySelector("#Pontos");

    if(tabela[PosicaoLinha][PosicaoColuna] === true){
        QteTiros = QteTiros - 1;
        Pontos = Pontos + 20;
        //alert("Barco afundado");
        var img = document.querySelector("#quadro34");
        img.setAttribute("src", "src/img/atingido.jpg");
    }
    if(tabela[PosicaoLinha][PosicaoColuna] === false){
        QteTiros = QteTiros - 1;
        //alert("Tiro na agua");
        var img = document.querySelector("#quadro34");
        img.setAttribute("src", "src/img/tiroagua.jpg");
    }
    if(QteTiros == 0){ 
        alert("Fim de jogo!");
        window.location.reload(true);
    }
    tiros.innerText = QteTiros;
    Score.innerText = Pontos;
};
function revelar35(){
    let PosicaoLinha = 3, PosicaoColuna = 5;
    const tiros = document.querySelector("#Tiros");
    const Score = document.querySelector("#Pontos");

    if(tabela[PosicaoLinha][PosicaoColuna] === true){
        QteTiros = QteTiros - 1;
        Pontos = Pontos + 20;
        //alert("Barco afundado");
        var img = document.querySelector("#quadro35");
        img.setAttribute("src", "src/img/atingido.jpg");
    }
    if(tabela[PosicaoLinha][PosicaoColuna] === false){
        QteTiros = QteTiros - 1;
        //alert("Tiro na agua");
        var img = document.querySelector("#quadro35");
        img.setAttribute("src", "src/img/tiroagua.jpg");
    }
    if(QteTiros == 0){ 
        alert("Fim de jogo!");
        window.location.reload(true);
    }
    tiros.innerText = QteTiros;
    Score.innerText = Pontos;
};
function revelar36(){
    let PosicaoLinha = 3, PosicaoColuna = 6;
    const tiros = document.querySelector("#Tiros");
    const Score = document.querySelector("#Pontos");

    if(tabela[PosicaoLinha][PosicaoColuna] === true){
        QteTiros = QteTiros - 1;
        Pontos = Pontos + 20;
        //alert("Barco afundado");
        var img = document.querySelector("#quadro36");
        img.setAttribute("src", "src/img/atingido.jpg");
    }
    if(tabela[PosicaoLinha][PosicaoColuna] === false){
        QteTiros = QteTiros - 1;
        //alert("Tiro na agua");
        var img = document.querySelector("#quadro36");
        img.setAttribute("src", "src/img/tiroagua.jpg");
    }
    if(QteTiros == 0){ 
        alert("Fim de jogo!");
        window.location.reload(true);
    }
    tiros.innerText = QteTiros;
    Score.innerText = Pontos;
};
function revelar37(){
    let PosicaoLinha = 3, PosicaoColuna = 7;
    const tiros = document.querySelector("#Tiros");
    const Score = document.querySelector("#Pontos");

    if(tabela[PosicaoLinha][PosicaoColuna] === true){
        QteTiros = QteTiros - 1;
        Pontos = Pontos + 20;
        //alert("Barco afundado");
        var img = document.querySelector("#quadro37");
        img.setAttribute("src", "src/img/atingido.jpg");
    }
    if(tabela[PosicaoLinha][PosicaoColuna] === false){
        QteTiros = QteTiros - 1;
        //alert("Tiro na agua");
        var img = document.querySelector("#quadro37");
        img.setAttribute("src", "src/img/tiroagua.jpg");
    }
    if(QteTiros == 0){ 
        alert("Fim de jogo!");
        window.location.reload(true);
    }
    tiros.innerText = QteTiros;
    Score.innerText = Pontos;
};
function revelar38(){
    let PosicaoLinha = 3, PosicaoColuna = 8;
    const tiros = document.querySelector("#Tiros");
    const Score = document.querySelector("#Pontos");

    if(tabela[PosicaoLinha][PosicaoColuna] === true){
        QteTiros = QteTiros - 1;
        Pontos = Pontos + 20;
        //alert("Barco afundado");
        var img = document.querySelector("#quadro38");
        img.setAttribute("src", "src/img/atingido.jpg");
    }
    if(tabela[PosicaoLinha][PosicaoColuna] === false){
        QteTiros = QteTiros - 1;
        //alert("Tiro na agua");
        var img = document.querySelector("#quadro38");
        img.setAttribute("src", "src/img/tiroagua.jpg");
    }
    if(QteTiros == 0){ 
        alert("Fim de jogo!");
        window.location.reload(true);
    }
    tiros.innerText = QteTiros;
    Score.innerText = Pontos;
};
function revelar39(){
    let PosicaoLinha = 3, PosicaoColuna = 9;
    const tiros = document.querySelector("#Tiros");
    const Score = document.querySelector("#Pontos");

    if(tabela[PosicaoLinha][PosicaoColuna] === true){
        QteTiros = QteTiros - 1;
        Pontos = Pontos + 20;
        //alert("Barco afundado");
        var img = document.querySelector("#quadro39");
        img.setAttribute("src", "src/img/atingido.jpg");
    }
    if(tabela[PosicaoLinha][PosicaoColuna] === false){
        QteTiros = QteTiros - 1;
        //alert("Tiro na agua");
        var img = document.querySelector("#quadro39");
        img.setAttribute("src", "src/img/tiroagua.jpg");
    }
    if(QteTiros == 0){ 
        alert("Fim de jogo!");
        window.location.reload(true);
    }
    tiros.innerText = QteTiros;
    Score.innerText = Pontos;
};
function revelar40(){
    let PosicaoLinha = 4, PosicaoColuna = 0;
    const tiros = document.querySelector("#Tiros");
    const Score = document.querySelector("#Pontos");

    if(tabela[PosicaoLinha][PosicaoColuna] === true){
        QteTiros = QteTiros - 1;
        Pontos = Pontos + 20;
        //alert("Barco afundado");
        var img = document.querySelector("#quadro40");
        img.setAttribute("src", "src/img/atingido.jpg");
    }
    if(tabela[PosicaoLinha][PosicaoColuna] === false){
        QteTiros = QteTiros - 1;
        console.log("Tiro na agua");
        console.log(QteTiros);
        console.log(Pontos);
        var img = document.querySelector("#quadro40");
        img.setAttribute("src", "src/img/tiroagua.jpg");
    }
    if(QteTiros == 0){ 
        alert("Fim de jogo!");
        window.location.reload(true);
    }
    tiros.innerText = QteTiros;
    Score.innerText = Pontos;
};
function revelar41(){
    let PosicaoLinha = 4, PosicaoColuna = 1;
    const tiros = document.querySelector("#Tiros");
    const Score = document.querySelector("#Pontos");

    if(tabela[PosicaoLinha][PosicaoColuna] === true){
        QteTiros = QteTiros - 1;
        Pontos = Pontos + 20;
        //alert("Barco afundado");
        var img = document.querySelector("#quadro41");
        img.setAttribute("src", "src/img/atingido.jpg");
    }
    if(tabela[PosicaoLinha][PosicaoColuna] === false){
        QteTiros = QteTiros - 1;
        //alert("Tiro na agua");
        var img = document.querySelector("#quadro41");
        img.setAttribute("src", "src/img/tiroagua.jpg");
    }
    if(QteTiros == 0){ 
        alert("Fim de jogo!");
        window.location.reload(true);
    }
    tiros.innerText = QteTiros;
    Score.innerText = Pontos;
};
function revelar42(){
    let PosicaoLinha = 4, PosicaoColuna = 2;
    const tiros = document.querySelector("#Tiros");
    const Score = document.querySelector("#Pontos");

    if(tabela[PosicaoLinha][PosicaoColuna] === true){
        QteTiros = QteTiros - 1;
        Pontos = Pontos + 20;
        //alert("Barco afundado");
        var img = document.querySelector("#quadro42");
        img.setAttribute("src", "src/img/atingido.jpg");
    }
    if(tabela[PosicaoLinha][PosicaoColuna] === false){
        QteTiros = QteTiros - 1;
        //alert("Tiro na agua");
        var img = document.querySelector("#quadro42");
        img.setAttribute("src", "src/img/tiroagua.jpg");
    }
    if(QteTiros == 0){ 
        alert("Fim de jogo!");
        window.location.reload(true);
    }
    tiros.innerText = QteTiros;
    Score.innerText = Pontos;
};
function revelar43(){
    let PosicaoLinha = 4, PosicaoColuna = 3;
    const tiros = document.querySelector("#Tiros");
    const Score = document.querySelector("#Pontos");

    if(tabela[PosicaoLinha][PosicaoColuna] === true){
        QteTiros = QteTiros - 1;
        Pontos = Pontos + 10;
        //alert("Barco afundado");
        var img = document.querySelector("#quadro43");
        img.setAttribute("src", "src/img/atingido.jpg");
    }
    if(tabela[PosicaoLinha][PosicaoColuna] === false){
        QteTiros = QteTiros - 1;
        //alert("Tiro na agua");
        var img = document.querySelector("#quadro43");
        img.setAttribute("src", "src/img/tiroagua.jpg");
    }
    if(QteTiros == 0){ 
        alert("Fim de jogo!");
        window.location.reload(true);
    }
    tiros.innerText = QteTiros;
    Score.innerText = Pontos;
};
function revelar44(){
    let PosicaoLinha = 4, PosicaoColuna = 4;
    const tiros = document.querySelector("#Tiros");
    const Score = document.querySelector("#Pontos");

    if(tabela[PosicaoLinha][PosicaoColuna] === true){
        QteTiros = QteTiros - 1;
        Pontos = Pontos + 10;
        //alert("Barco afundado");
        var img = document.querySelector("#quadro44");
        img.setAttribute("src", "src/img/atingido.jpg");
    }
    if(tabela[PosicaoLinha][PosicaoColuna] === false){
        QteTiros = QteTiros - 1;
        //alert("Tiro na agua");
        var img = document.querySelector("#quadro44");
        img.setAttribute("src", "src/img/tiroagua.jpg");
    }
    if(QteTiros == 0){ 
        alert("Fim de jogo!");
        window.location.reload(true);
    }
    tiros.innerText = QteTiros;
    Score.innerText = Pontos;
};
function revelar45(){
    let PosicaoLinha = 4, PosicaoColuna = 5;
    const tiros = document.querySelector("#Tiros");
    const Score = document.querySelector("#Pontos");

    if(tabela[PosicaoLinha][PosicaoColuna] === true){
        QteTiros = QteTiros - 1;
        Pontos = Pontos + 20;
        //alert("Barco afundado");
        var img = document.querySelector("#quadro44");
        img.setAttribute("src", "src/img/atingido.jpg");
    }
    if(tabela[PosicaoLinha][PosicaoColuna] === false){
        QteTiros = QteTiros - 1;
        //alert("Tiro na agua");
        var img = document.querySelector("#quadro45");
        img.setAttribute("src", "src/img/tiroagua.jpg");
    }
    if(QteTiros == 0){ 
        alert("Fim de jogo!");
        window.location.reload(true);
    }
    tiros.innerText = QteTiros;
    Score.innerText = Pontos;
};
function revelar46(){
    let PosicaoLinha = 4, PosicaoColuna = 6;
    const tiros = document.querySelector("#Tiros");
    const Score = document.querySelector("#Pontos");

    if(tabela[PosicaoLinha][PosicaoColuna] === true){
        QteTiros = QteTiros - 1;
        Pontos = Pontos + 20;
        //alert("Barco afundado");
        var img = document.querySelector("#quadro46");
        img.setAttribute("src", "src/img/atingido.jpg");
    }
    if(tabela[PosicaoLinha][PosicaoColuna] === false){
        QteTiros = QteTiros - 1;
        //alert("Tiro na agua");
        var img = document.querySelector("#quadro46");
        img.setAttribute("src", "src/img/tiroagua.jpg");
    }
    if(QteTiros == 0){ 
        alert("Fim de jogo!");
        window.location.reload(true);
    }
    tiros.innerText = QteTiros;
    Score.innerText = Pontos;
};
function revelar47(){
    let PosicaoLinha = 4, PosicaoColuna = 7;
    const tiros = document.querySelector("#Tiros");
    const Score = document.querySelector("#Pontos");

    if(tabela[PosicaoLinha][PosicaoColuna] === true){
        QteTiros = QteTiros - 1;
        Pontos = Pontos + 20;
        //alert("Barco afundado");
        var img = document.querySelector("#quadro47");
        img.setAttribute("src", "src/img/atingido.jpg");
    }
    if(tabela[PosicaoLinha][PosicaoColuna] === false){
        QteTiros = QteTiros - 1;
        //alert("Tiro na agua");
        var img = document.querySelector("#quadro47");
        img.setAttribute("src", "src/img/tiroagua.jpg");
    }
    if(QteTiros == 0){ 
        alert("Fim de jogo!");
        window.location.reload(true);
    }
    tiros.innerText = QteTiros;
    Score.innerText = Pontos;
};
function revelar48(){
    let PosicaoLinha = 4, PosicaoColuna = 8;
    const tiros = document.querySelector("#Tiros");
    const Score = document.querySelector("#Pontos");

    if(tabela[PosicaoLinha][PosicaoColuna] === true){
        QteTiros = QteTiros - 1;
        Pontos = Pontos + 20;
        //alert("Barco afundado");
        var img = document.querySelector("#quadro48");
        img.setAttribute("src", "src/img/atingido.jpg");
    }
    if(tabela[PosicaoLinha][PosicaoColuna] === false){
        QteTiros = QteTiros - 1;
        //alert("Tiro na agua");
        var img = document.querySelector("#quadro48");
        img.setAttribute("src", "src/img/tiroagua.jpg");
    }
    if(QteTiros == 0){ 
        alert("Fim de jogo!");
        window.location.reload(true);
    }
    tiros.innerText = QteTiros;
    Score.innerText = Pontos;
};
function revelar49(){
    let PosicaoLinha = 4, PosicaoColuna = 9;
    const tiros = document.querySelector("#Tiros");
    const Score = document.querySelector("#Pontos");

    if(tabela[PosicaoLinha][PosicaoColuna] === true){
        QteTiros = QteTiros - 1;
        Pontos = Pontos + 20;
        //alert("Barco afundado");
        var img = document.querySelector("#quadro49");
        img.setAttribute("src", "src/img/atingido.jpg");
    }
    if(tabela[PosicaoLinha][PosicaoColuna] === false){
        QteTiros = QteTiros - 1;
        //alert("Tiro na agua");
        var img = document.querySelector("#quadro49");
        img.setAttribute("src", "src/img/tiroagua.jpg");
    }
    if(QteTiros == 0){ 
        alert("Fim de jogo!");
        window.location.reload(true);
    }
    tiros.innerText = QteTiros;
    Score.innerText = Pontos;
};
