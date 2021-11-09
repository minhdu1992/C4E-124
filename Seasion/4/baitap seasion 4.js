const oB  = [
    {
        name : "a",
        age : 29
    },
    {
        name : "b",
        age : 25
    },
    {
        name : "c",
        age : 38
    },
    {
        name : "d",
        age : 30
    }
]
let swap
do {
     swap = false
    const end = oB.length - 1
    for (let index = 0; index < end; index++) {
    if (oB[index].age > oB[index + 1].age)
    { 
        let tem = oB[index]
        oB[index].age = oB[index + 1]
        oB[index + 1] = tem
        swap =true
    }
    
}
} while (swap);
console.log(oB); 
// 
// nhap vào 1 mảng thông tin các học viên sau đó 
// tim ra người tuổi cao
// tim ra người address hanoi
// tim ra người có điểm đầu vào cao nhất
// - xắp xếp các học viên theo chiều giảm dần của tên
// Tìm ra các bạn có age > 24
const hocvien = [
    {
        name : "Nam" , age : 20 , location : "Hanoi" ,  testdauvao : 20 , area : "Mien Bac"
    },
    {
        name : "Ha" , age : 40 , location : "HCM" ,  testdauvao : 30 , area: "Mien Nam"
    },
    {
        name : "Cong" , age : 36, location : "Ba ria" , testdauvao: 18 , area : "Mien Nam"
    },
    {
        name : "Tuan" , age : 18 , location: "Dong Thap" , testdauvao : 28, area : "Mien Nam"
    }
]
// age cao tuoi nhat 
let ageMax = 0 
for (let index = 0; index < hocvien.length; index++) {
    const element = hocvien[index];
    if (element.age > hocvien[ageMax].age) {
        ageMax = index
        console.log(`da la hoc vien lon tuoi : ${JSON.stringify(hocvien[index])}`);
    }
}

// location : Hanoi
for (let index = 0; index < hocvien.length; index++) {
    const element = hocvien[index];
    if(element.location == "Hanoi")
    {
        console.log(`hoc vien hanoi : ${JSON.stringify(element)}`);
    }
}
// hoc vien diem dau vao cao nhat
let testMax = 0
for (let index = 0; index < hocvien.length; index++) {
    const element = hocvien[index];
    if(element.testdauvao > hocvien[testMax].testdauvao)
    {
        testMax = index
        console.log(`hoc vien diem  dau vao cao nhat : ${JSON.stringify(hocvien[testMax])}`);
    }
}
//Tìm ra người có tuổi lớn thứ 2
function secondAge (c,d){
      const ageA = c.age;
      const ageB = d.age;
      let comparison = 0;
      if(ageA > ageB)
        comparison = -1;
      else if(ageA < ageB)
        comparison = 1;
      return comparison;
    }
  var ss = hocvien.sort(secondAge)
  for (let i = 0; i < ss.length; i++) {
      console.log(`hoc vien tuổi lớn thứ ${i + 1} : ${JSON.stringify(ss[i])}`);
      
  }

// xap xep hoc vien theo ten giam dan
 function compare(a, b) {
    const nameA = a.name.toUpperCase();
    const nameB = b.name.toUpperCase();
  
    let comparison = 0;
    if (nameA > nameB) {
      comparison = -1;
    } else if (nameA < nameB) {
      comparison = 1;
    }
    return comparison;
  }
  
  console.log(hocvien.sort(compare)); 

// tìm hoc vien trên 24
for (let index = 0; index < hocvien.length; index++) {
    const element = hocvien[index];
    if(element.age > 24)
    {
        console.log(`hoc vien > age : 24 ${JSON.stringify(element)}`);
    }
    
}
//  - Tìm ra các bạn có address tại miền bắc


for (let index = 0; index < hocvien.length; index++) {
    const element = hocvien[index];
    if(element.area  == "Mien Bac")
    {
        console.log(`hoc vien khu vuc mien bac : ${JSON.stringify(element)}`);
    }
    
}


