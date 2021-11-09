let a 
let b 
let c 
do{
 a = prompt("vui long nhap gia tri a")
 b = prompt("vui long nhap gia tri b")
 c = prompt("vui long nhap gia tri c")
 if(isNaN(a) || isNaN(b) || isNaN(c))
 {
   console.log("vui long nhap gia tri la number")
 }
 else{
   if(a||b||c == string)
   {
     console.log("chuan gia tri dau vao")
     break
   }
 }
}
while(true)
if( a == 0){
  if(b == 0){
    if(c == 0){
      console.log(`phuong trinh vo so nghiem`)
    }
    else{
      if(c != 0){
        console.log(`phuong trinh vo nghiem`)
      }
    }
  }
  else{
    if(b != 0)
    {
      let nghiem1 = -c/b
      console.log(`phuong trinh co 1 nghiem duy nhat: ${nghiem1}`)
    }
  }
}
else{
  let denta = (b*b)-(4*a*c)
  if(denta == 0)
  {
    let x = -b / (2*a)
    console.log(`phuong trinh co 1 nghiem kep: ${x}`)
  }
  else{
    if(denta > 0)
    {
      let x1 = (-b + Math.sqrt(denta)/(2*a))
      let x2 = (-b - Math.sqrt(denta)/(2*a))
      console.log(`phuong trinh co nghiem x1 = :${x1}\n phuong trinh co nghiem x2 =:${x2}`)
    }
    else{
      console.log(`phuong trinh vo nghiem`)
    }
  }
}
// bai TBC
let sum = 0
for (let i = 0; i < 100; i++) {
  sum = sum + i
}
let tbc = sum / 100
console.log("trung bình cộng 100 :" + tbc);
