// let year = parseInt(Number(prompt("Moi cu nhap nam:")))
// if (year%4===0 && year%100!==0 || year%40===0) {
//     console.log(`Nam ${year} la nam nhuan`)
// }
// else{
//     console.log(`Nam ${year} la nam khong nhuan`)
// }





// let month = parseInt(Number(prompt("Moi cu nhap thang:")))
// if (!isNaN(month) && month>=1 && month<=12) {
//     if (month===2) {
//         let year = parseInt(Number(prompt("Moi cu nhap nam:")))
//         if (!isNaN(year)) {
//             if (year%4===0 && year%100!==0 || year%40===0) {
//                 console.log(`Thang ${month} nam ${year} co 29 ngay`)
//             }
//             else {
//                 console.log(`Thang ${month} nam ${year} co 28 ngay`)
//             }
//         }
//         else {
//             console.log(`Nam khong hop le, vui long nhap lai nam`)
//         }
//     }
//     else if (month===1 || month===3 || month===5 || month===7 || month===8 || month===10 || month===12) {
//         console.log(`Thang ${month} co 31 ngay`)
//     }
//     else if (month===4 || month===6 || month===9 || month===11) {
//         console.log(`Thang ${month} co 30 ngay`)
//     }
// }
// else {
//     console.log(`Thang khong hop le, vui long nhap lai thang tu 1 - 12`)
// }



// nang cap
//  let month = (Number(prompt("Moi cu nhap thang:")))
// while (isNaN(month) || month > 12 || month < 1 || month % 1 !== 0) {
//     month = (Number(prompt("Thang khong hop le, moi cu nhap lai thang")))
// }
// if (month === 2) {
//     let year = (Number(prompt("Moi cu nhap nam:")))
//     while (year % 1 != 0 || isNaN(year)) {
//         year = (Number(prompt("Nam khong hop le, moi cu nhap lai nam:")))
//     }
//     if (year % 4 === 0 && year % 100 !== 0 || year % 40 === 0) {
//         console.log(`Thang ${month} nam ${year} co 29 ngay`)
//     }
//     else {
//         console.log(`Thang ${month} nam ${year} co 28 ngay`)
//     }
// }
// else if (month === 1 || month === 3 || month === 5 || month === 7 || month === 8 || month === 10 || month === 12) {
//     console.log(`Thang ${month} co 31 ngay`)
// }
// else if (month === 4 || month === 6 || month === 9 || month === 11) {
//     console.log(`Thang ${month} co 30 ngay`)
// }


// function check() {

//     let month = parseInt(document.getElementById("thang").value);
//     let year = parseInt(document.getElementById("nam").value);
//     if (!isNaN(month) && month >= 1 && month <= 12 && month % 1 === 0) {
//         if (month === 2) {
//             document.getElementById("nam").style.visibility = "visible";
//             if (!isNaN(year)) {
//                 if (year % 4 === 0 && year % 100 !== 0 || year % 40 === 0) {
//                     document.getElementById("myInput").value = `Thang ${month} nam ${year} co 29 ngay`
//                 }
//                 else {
//                     document.getElementById("myInput").value = `Thang ${month} nam ${year} co 28 ngay`
//                 }
//             }
//             // else {
//             //     document.getElementById("output").innerText = `Lỗi ~ Năm không hợp lệ, vui lòng nhập lại`
//             // }
//         }
//         else if (month === 1 || month === 3 || month === 5 || month === 7 || month === 8 || month === 10 || month === 12) {
//             document.getElementById("myInput").value = `Thang ${month} co 31 ngay`
//         }
//         else if (month === 4 || month === 6 || month === 9 || month === 11) {
//             document.getElementById("myInput").value = `Thang ${month} co 30 ngay`
//         }

//     }
//     else {
//         document.getElementById("output").innerText = `Lỗi ~ Tháng không hợp lệ, vui lòng nhập lại`
//     }
// }



// let gt = 1
// let n = Number(prompt(`Moi nhap so nguyen n:`))
// while (!Number.isInteger(n) || n<0) {
//     let isConfirm = alert(`So khong hop le , vui long nhap lai`)
// }
// n = Number(prompt(`Moi nhap so nguyen n:`))
// for (let i = 1; i <= n; i++){
//     gt*=i
// }
// alert(`Kết quả ${n}! = ${gt}`)


// let tong = 0
// let a = Number(prompt(`Nhap vao so a:`))
// while (!Number.isInteger(a) || a < 0) {
//     a = Number(prompt(`Loi, vui long nhap lai so nguyen:`))
// }
// if (a%2===0) {
//     for (let i=0; i<=a; i+=2) {
//         tong+=i
//     }
//     console.log(`Tong cac so chan:${tong}`)
// }
// else {
//     console.log(`Loi, vui long nhap lai so nguyen chan`)
// }


// let tong = 0
// let n = Number(prompt(`Moi nhap so n:`))
// while (!Number.isInteger(n) || n < 0 || n%2===0) {
//     n = Number(prompt(`Loi, vui long nhap lai so le nguyen duong:`))
// }
// for (let i = 1; i <= n; i += 2) {
//     if (i===3) {
//         continue
//     }
//     tong+=i
// }
// alert(`Ket qua = ${tong}`)



// for (let i = 10; i<=50; i++) {
//     if (i%3===0) {
//         console.log(i)
//     }
// }





// let sum=0
// for (let n=1; n<=10; n++) {
//     let gt =1
//     for (let i=1; i<=n; i++) {
//         gt*=i
//     }
//     sum+=gt
// }
// console.log(sum)


// let inputName = prompt(`Moi nhap ho va ten:`)
// function hello(name) {
//     console.log(`Welcome ${name}`)
// }
// hello(inputName)



// let a = Number(prompt(`Nhap a:`))
// let b = Number(prompt(`Nhap b:`))
// function tinhtong(a,b) {
//     return a+b
// }
// console.log(tinhtong(a,b))




// function cong(a, b) {
//     return a+b
// }
// function tich(x, y) {
//     return x*y
// }
// function congNhan(num1, num2, num3) {
//     let sum = cong(num1, num2)
//     let product = tich(sum, num3)
//     return product
// }
// console.log(congNhan(3,3,6))




// function ketQua(n) {
//     for (let i=1; i<=n; i++) {
//         gt*=i
//     }
//     return gt
// }
// let gt = 1
// let n = Number(prompt(`Nhap luy thua:`))
// while (isNaN(n) || n < 0) {
//     n = Number(prompt(`Loi, vui long nhap lai luy thua:`))
// }

// console.log(`${n}!=${ketQua(n)}`)






// function ptb2(a, b, c) {
//     let delta = (b**2)-(4*a*c)
//     if (delta>0) {
//         console.log(`Phuong trinh co ai nghiem phan biet`)
//         let x1 = (-b + Math.sqrt(delta))/2*a
//         let x2 = (-b - Math.sqrt(delta))/2*a
//         console.log(`x1=${x1}`)
//         console.log(`x2=${x2}`)
//     }else if (delta === 0) {
//         let x1 = -b / (2*a)
//         console.log(`Phuong trinh co mot nghiem kep`)
//         console.log(`x1=${x1}`)
//     }else {
//         console.log(`Phuong trinh vo nghiem`)
//     }
// }
// ptb2(1,2,-3)




// let n = prompt(`Moi nhap vao mot chuoi`)
// let chuThuong = 0
// let chuHoa = 0
// let chuSo = 0
// let khoangTrang = 0
// for (let i = 0; i<n.length; i++) {
//     if (n[i]>="a" && n[i]<="z") {
//         chuThuong++
//     }
//     else if (n[i]>="A" && n[i]<="Z") {
//         chuHoa++
//     }
//     else if (n[i]>="0" && n[i]<="9") {
//         chuSo++
//     }
//     else if (n[i]===" ") {
//         khoangTrang++
//     }
// }
// console.log(`So ky tu thuong: ${chuThuong}`)
// console.log(`So ky tu hoa: ${chuHoa}`)
// console.log(`So ky tu so: ${chuSo}`)
// console.log(`So ky tu khoang trang: ${khoangTrang}`)








// function isPasswordValue(password) {
//     if (password.length<6) {
//         return false
//     }
//     let chuThuong = false
//     let chuHoa = false
//     let chuSo = false
//     for (let i = 0; i<password.length; i++) {
//         if (password[i]>="a" && password[i] <="z") {
//             chuThuong=true
//         }
//         else if (password[i]>="A" && password[i] <="Z") {
//             chuHoa=true
//         }
//         else if (password[i]>="0" && password[i]<=9) {
//             chuSo=true
//         }
//     }
//     return chuThuong && chuHoa && chuSo
// }

// function passwordValue() {
//     let password = prompt(`Vui long nhap mat khau:`)
//     if (isPasswordValue(password)) {
//         prompt(`Dang nhap thanh cong`)
//         return password
//     }
//     else {
//         prompt(`Vui long nhap lai mat khau
//             co it nhat 1 chu so
//             co it nhat 1 ky tu hoa
//             co it nhat 1 ky tu thuong
//             `)
//             passwordValue()
//     }
// }
// let passwordOK = isPasswordValue()

function isPasswordValid(password) {
    if (password.length < 6 || password.length>15) {
        return false
    }
    let chuThuong = false
    let chuHoa = false
    let chuSo = false
    for (let i = 0; i < password.length; i++) {
        if (password[i]>="a" && password[i]<="z") {
            chuThuong=true
        }
        else if (password[i]>="A" && password[i]<="Z") {
            chuHoa = true
        }
        else if (password[i]>="0" && password[i]<="9") {
            chuSo = true
        }
    }
    return chuThuong && chuHoa && chuSo
}

function setPassword() {
    let password = prompt(`Nhap mat khau dang ky`)
    if (isPasswordValid(password)) {
        alert(`Dang nhap thanh cong`)
        return password
    }
    else {
        alert(`Vui long nhap lai mat khau
            co it nhat 6 ky tu toi da 15 ky tu
            co it nhat 1 chu thuong
            co it nhat 1 chu hoa
            co it nhat 1 chu so`)
            setPassword()
    }
}
let passwordOK = setPassword()

let dem = 0
while(true) {
    let passwordLogin = prompt(`Nhap mat khau dang nhap:`)
    if (passwordLogin === passwordOK) {
        alert(`Dang nhap thanh cong`)
        break;
    }
    else {
        dem++
        if (dem<=5) {
            alert(`Ban da nhap sai lan thu ${dem}/5`)
        }
        else{
            alert(`Ban da nhap sai qua nhieu vui long thu lai sau`)
            break;
        }
    }
}




