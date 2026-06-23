let indeksHalamanAktif = 0;

const listLembarBuku = [
'p-cover',
'p1',
'p2',
'p3',
'p-back-cover'
];

function deteksiKlikHalaman(event){

const cover = document.getElementById("bookCover");
const content = document.getElementById("bookContent");

let bukuTerbuka = false;

cover.addEventListener("click", () => {

    if(bukuTerbuka) return;

    bukuTerbuka = true;

    cover.classList.add("open");

    setTimeout(() => {

        content.classList.add("show");

    }, 500);

});

    if(posisiKlik > areaBuku.offsetWidth / 2){

        lembarBerikutnya();

    }else{

        lembarSebelumnya();

    }
}

function lembarBerikutnya(){

    if(indeksHalamanAktif < listLembarBuku.length - 1){

        document
            .getElementById(
                listLembarBuku[indeksHalamanAktif]
            )
            .classList
            .add('flipped-effect');

        indeksHalamanAktif++;
    }
}

function lembarSebelumnya(){

    if(indeksHalamanAktif > 0){

        indeksHalamanAktif--;

        document
            .getElementById(
                listLembarBuku[indeksHalamanAktif]
            )
            .classList
            .remove('flipped-effect');
    }
}