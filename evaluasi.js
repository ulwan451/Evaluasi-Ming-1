document.write("Soal 1" + "<br>")

var n = 4

for (i = 0; i <= n; i++){
  for (h = 0; h <= n; h++){
    if (i <= n){
      document.write("+")
    } else {
     document.write("-")
    }
  }
  document.write("<br>")
}
document.write("<br>")
////////////////////////////////
var n = 6

for (i = 0; i <= n; i++){
  for (h = 0; h <= n; h++){
    if (i == 3 || h == 3){
      document.write("+")
    } else {
      document.write(" - ")
    }
  }
  document.write("<br>")
}
document.write("<br>")
document.write("Soal 2")
document.write("<br>")
document.write("<br>")

// var banyakAngka = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

// var genap = [];
// var ganjil = [];
// var i = 0;

// 	for(i; i <banyakAngka.length; i++){
// 		if (banyakAngka[i] % 2 == 0) {
// 			genap.push(banyakAngka[i]);
// 		}else{
// 			ganjil.push(banyakAngka[i]);
// 		}
// 	}
// 		document.write(genap + "<br>");
// 		document.write(ganjil);

var banyakAngka = [20];
var genap = [];
var ganjil = [];

function klasifikasiAngka (){

for (i = 2; i <= banyakAngka; i+=2){
    document.write(i)
}
  genap.push(banyakAngka[i]);
document.write("<br>")
document.write("<br>")
for (i = 1; i <= banyakAngka; i+=2){
    document.write(i)
}
  ganjil.push(banyakAngka[i]);
} 

klasifikasiAngka()


 


