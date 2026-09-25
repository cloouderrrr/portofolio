//fungsi ini akan berjalan ketika tombol diklik
function sapaPengunjung(){
    alert("Halo!, selamat datang di portofolio saya"); //akan menampilkan alert
}

function ubahTeks(){ //fungsi ini akan berjalan ketika tombol diklik
    let elemenStatus = document.getElementById("teks-sambutan"); //mengambil elemen dengan id "teks-sambutan"
    elemenStatus.innerText = "Sedang fokus belajar JavaScript!"; //mengubah teks dari elemen tersebut
}

function ubahTema(){
    let tubuhWeb = document.body; //mengambil elemen body dari dokumen
    if (tubuhWeb.style.backgroundColor === "white") {
        tubuhWeb.style.backgroundColor = "#023666";
        tubuhWeb.style.color = "white";
    } else {
        tubuhWeb.style.backgroundColor = "white";
        tubuhWeb.style.color = "black";
    }
}