// bai 1
let str_input = prompt("nhap du lieu ")
let newStr = ""
for (let i = str_input.length - 1; i >= 0; i--) {
    newStr = newStr + str_input[i]
}
console.log(newStr)
//  bài 2 
let str = prompt("nhap du lieu ")
let cut = str.split(' ')
let x = "";
for (let index = 0; index < cut.length; index++) {
    const element = cut[index].slice(0, 1).toUpperCase() + cut[index].slice(1) + (" ")
    x = x + element
}
x.slice(0, x.length - 1) // cat (" ") vi tri cuoi cung trong lenght
console.log(x);

// bai 4 
const nhanvien = [{
        name: "tuan",
        age: 20,
        luong: 15,
        chucvu: "quan ly"
    },
    {
        name: "ha",
        age: 21,
        luong: 20,
        chucvu: "quan ly hoc sinh"
    },
    {
        name: "tinh",
        age: 28,
        luong: 22,
        chucvu: "dev"
    }
]
console.log(nhanvien);
// creat update delete
let n = confirm("ban co muon chinh sua")
if (n == true) {
    let khaibao = prompt(" 1:Creat ,  2:Update , 3:Delete : vui long nhap so trong danh sach")
    if (khaibao == 1) // Creat
    {
        let na = prompt("nhap Name");
        let a = prompt(" nhap tuoi");
        let l = prompt("nhap luong");
        let cv = prompt("nhap chuc vu")
        var creatarr = {
            name: na,
            age: a,
            luong: l,
            chucvu: cv
        }
        nhanvien.push(creatarr)
    }
    if (khaibao == 2) /*update */ {
        let upda = prompt(`vui long chon so ! 1:${JSON.stringify(nhanvien[0].name)} -- 2${JSON.stringify(nhanvien[1].name)} --- 3${JSON.stringify(nhanvien[2].name)}`)
        if (upda == 1) {
            let na1 = prompt("nhap Name");
            let a1 = prompt(" nhap tuoi");
            let l1 = prompt("nhap luong");
            let cv1 = prompt("nhap chuc vu")
            nhanvien[0] = {
                name: na1,
                age: a1,
                luong: l1,
                chucvu: cv1
            }

        }
        if (upda == 2) {
            let na1 = prompt("nhap Name");
            let a1 = prompt(" nhap tuoi");
            let l1 = prompt("nhap luong");
            let cv1 = prompt("nhap chuc vu")
            nhanvien[1] = {
                name: na1,
                age: a1,
                luong: l1,
                chucvu: cv1
            }

        }
        if (upda == 3) {
            let na1 = prompt("nhap Name");
            let a1 = prompt(" nhap tuoi");
            let l1 = prompt("nhap luong");
            let cv1 = prompt("nhap chuc vu")
            nhanvien[2] = {
                name: na1,
                age: a1,
                luong: l1,
                chucvu: cv1
            }
        }
    }
    if (khaibao == 3) // Delete
    {
        let del = prompt(`vui long chon so ! 1:${JSON.stringify(nhanvien[0].name)} -- 2${JSON.stringify(nhanvien[1].name)} --- 3${JSON.stringify(nhanvien[2].name)}`)
        if (del == 1) {
            nhanvien.splice(0, 1)
        }
        if (del == 2) {
            nhanvien.splice(1, 1)
        }
        if (del == 3) {
            nhanvien.splice(2, 1)
        }
    }
}
console.log(nhanvien);
// bai 3 
const arr1 = [1, 2, 3, 1, 4, 4, 5, 5, 2]
let count = 0
do {

    for (let i = count + 1; i < arr1.length; i++) {
        if (arr1[i] == arr1[count]) {
            arr1.splice(i, 1)
        }
    }
    count++
} while (count < arr1.length - 1);
console.log(arr1);
//bai tap 5
let day = Number(prompt("vui long nhap ngay "))
let months = Number(prompt("vui long nhap months"))
let years = Number(prompt("vui long nhap year"))
let m1 = [1, 3, 5, 7, 8, 10, 12]
let m2 = [4, 6, 9, 11]
let o
if (day > 0 && day <= 31) {
    for (let index = 0; index < m1.length; index++) {
        if (months == m1[index]) {
            o = true
            if (o == true) {
                if (day == 31 && months == 12) {
                    day = 1
                    months = m1[0]
                    years = years + 1
                    console.log("ngay tiep theo : " + day + "/" + months + "/" + years);
                    break
                } else if (day > 0 && day < 31 && months < 12) {
                    day = day + 1
                    console.log("ngay tiep theo : " + day + "/" + months + "/" + years);
                    break
                } else if (day == 31 && months > 1 && months < 12) {
                    day = 1
                    months = months + 1
                    console.log("ngay tiep theo : " + day + "/" + months + "/" + years);
                    break
                }
            }

        }
    }
}
for (let index = 0; index < m2.length; index++) {
    if (months == m2[index]) {
        o = true
        if (o == true) {
            if (day > 0 && day <= 29 && months < 12) {
                day = day + 1
                console.log("ngay tiep theo : " + day + "/" + months + "/" + years);
                break
            } else if (day == 30 && months > 1 && months < 12) {
                day = 1
                months = months + 1
                console.log("ngay tiep theo : " + day + "/" + months + "/" + years);
                break
            }
        }
    }
}
if (months == 2) {
    const year = (years % 4 == 0)
    if (year == true) {
        console.log("nam nhuan");
        if (months == 2 && day > 0 && day < 29) {
            day = day + 1
            console.log("ngay tiep theo : " + day + "/" + months + "/" + years);

        }
        if (months == 2 && day == 29) {
            day = 1
            months = months + 1
            console.log("ngay tiep theo : " + day + "/" + months + "/" + years);

        } else {
            console.log("gia tri day/month/year ko dung");
        }
    } else {
        console.log("nam ko nhuan");
        if (months == 2 && day > 0 && day < 28) {
            day = day + 1
            console.log("ngay tiep theo : " + day + "/" + months + "/" + years);
        }
        if (months == 2 && day == 28) {
            day = 1
            months = months + 1
            console.log("ngay tiep theo : " + day + "/" + months + "/" + years);
        } else {
            console.log("gia tri day/month/year ko dung");
        }
    }
}