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


function check() {

    let month = parseInt(document.getElementById("thang").value);
    let year = parseInt(document.getElementById("nam").value);
    if (!isNaN(month) && month >= 1 && month <= 12 && month % 1 === 0) {
        if (month === 2) {
            document.getElementById("nam").style.visibility = "visible";
            if (!isNaN(year)) {
                if (year % 4 === 0 && year % 100 !== 0 || year % 40 === 0) {
                    document.getElementById("myInput").value = `Thang ${month} nam ${year} co 29 ngay`
                }
                else {
                    document.getElementById("myInput").value = `Thang ${month} nam ${year} co 28 ngay`
                }
            }
            // else {
            //     document.getElementById("output").innerText = `Lỗi ~ Năm không hợp lệ, vui lòng nhập lại`
            // }
        }
        else if (month === 1 || month === 3 || month === 5 || month === 7 || month === 8 || month === 10 || month === 12) {
            document.getElementById("myInput").value = `Thang ${month} co 31 ngay`
        }
        else if (month === 4 || month === 6 || month === 9 || month === 11) {
            document.getElementById("myInput").value = `Thang ${month} co 30 ngay`
        }
        
    }
    else {
        document.getElementById("output").innerText = `Lỗi ~ Tháng không hợp lệ, vui lòng nhập lại`
    }
}




// let a = Number(prompt('Moi cu nhap a:'))
// let b = Number(prompt('Moi cu nhap b:'))
// let c = Number(prompt('Moi cu nhap c:'))
// let delta = Math.pow(b,2)-4*a*c
// if (delta<0) {
//     console.log(`Phuong trinh vo nghiem`)
// }
// else if (delta===0) (
//     console.log(`Phuong trinh co nghiem kep x1=x2=${-b/2*a}`)
// )
// else {
//     console.log(`Phuong trinh co 2 nghiem phan biet`)
//     console.log(`x1=${(-b+Math.sqrt(delta))/2*a}`)
//     console.log(`x2=${(-b-Math.sqrt(delta))/2*a}`)
// }





// let month = Number(prompt(`Moi nhap vao thang`))
// if (!isNaN(month) && month <=12 && month >=1) {
//     if (month>=1 && month <=3) {
//         console.log(`Thang ${month} thuoc Quy 1`)
//     }
//     else if (month>=4 && month <=6) {
//         console.log(`Thang ${month} thuoc Quy 2`)
//     }
//     else if (month>=7 && month<=9) {
//         console.log(`Thang ${month} thuoc Quy 3`)
//     }
//     else {
//         console.log(`Thang ${month} thuoc Quy 4`)
//     }
// }
// else {
//     console.log(`Moi nhap lai thang`)
// }







// let diem = Number(prompt(`Moi cu nhap diem`))
// if (diem>=0 && diem<=10 && !isNaN(diem)){
// let xeploai = diem >=8 ? "Gioi" : diem>=6.5 && diem<8 ? "Kha" : diem>=5 && diem<6.5 ? "Trung binh" :"Yeu"
// console.log(xeploai)
// }
// else{
//     console.log(`Moi nhap lai diem tu 0 - 10`)
// }