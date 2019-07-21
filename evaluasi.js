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

////////////////////////////////

var banyakAngka=[20];
var angkaGenap=[];
var angkaGanjil=[];

function klasifikasiAngka(){
    for(var i=1; i <= banyakAngka; i++){
        if(i % 2 == 0){
           angkaGenap.push(i)
        }else{
            angkaGanjil.push(i)
        }
    }
    document.write(angkaGenap)
    document.write('<br>')
    document.write(angkaGanjil)
}
klasifikasiAngka()

 


