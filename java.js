function myName() {
    var name = document.getElementById("Name").value;
    var thongBao = document.getElementById("thongBaoName");
    var check = /[A-Z]{1}[a-z]+(\s[A-Z]{1}[a-z]+)*$/;
    if(check.test(name)){
        thongBao.innerHTML = "<p>(*)</p>";
        return name;
    }
    else{
        thongBao.innerHTML = "<p>Họ tên không được bỏ trống, họ tên phải từ 2 từ trở lên, mỗi ký tự đầu phải viết hoa</p>";
        return "";
    }
}
function GioiTinh() {
    var sex = document.getElementsByName("sex");
    var thongBao = document.getElementById("thongBaoSex");
    var valueSex = "";
    for(var i = 0; i < sex.length; i++) {
        if(sex.item(i).checked){
            if(i == 0) valueSex = "Nam";
            else valueSex = "Nữ"; 
        }
    }
    if(valueSex != "") return valueSex;
    else {
        thongBao.innerHTML = "<p>Vui lòng chọn giới tính</p>";
        return "";
    }
}
function Phone() {
    var phonee = document.getElementById("myPhone").value;
    var thongBao = document.getElementById("thongBaoPhone");
    var check = /[\d]{3}[-][\d]{6}$/;
    if(check.test(phonee)) {
        thongBao.innerHTML = "<p>(*)</p>";
        return phonee;
    }
    else{
        thongBao.innerHTML = "<p>Số điện thoại không rỗng, nhập theo định dạng sau: XXX-YYYYYY, trong đó X, Y là các ký tự số</p>";
        return "";
    }
}
function KhoaHoc() {
    var myKhoaHoc = document.getElementById("mySelect");
    var KhoaHoc = myKhoaHoc.options[myKhoaHoc.selectedIndex].text;
    var hocPhi = document.getElementById("myCost");
    hocPhi.setAttribute("value","");
    if(KhoaHoc == "Khóa 2 tuần") {
        hocPhi.setAttribute("value","5,000,000");
        return KhoaHoc;
    }
    else if(KhoaHoc == "Khóa 4 tuần"){
        hocPhi.setAttribute("value","8,000,000");
        return KhoaHoc;
    } 
    else {
        hocPhi.setAttribute("value","9,000,000");
        return KhoaHoc;
    }
}
function myBirthday() {
    var date = document.getElementById("myDate").value;
    var thongBao = document.getElementById("thongBaoNgay");
    var birthday = new Date(date);
    var toDay = new Date();
    var age = toDay.getFullYear() - birthday.getFullYear();
    if(date != "") {
        if(age >= 15 && age <= 18) {
            thongBao.innerHTML = "<p>(*)</p>";
            return birthday.getDay() + "/" + birthday.getMonth() + "/" + birthday.getFullYear();
        }
        else {
            thongBao.innerHTML = "<p>Ngày sinh hợp lệ khi tuổi trên 15 và dưới 18</p>";
            return "";
        }
    }
    else{
        thongBao.innerHTML = "<p>Vui lòng nhập thông tin</p>";
        return "";
    }

}

function AnhDaiDien() {
    var image = document.getElementById("myImage").value;
    var thongBao = document.getElementById("thongBaoAnh");
    var check = /^\w+([.png]{4}|[.jpg]{4}|[.gif]{4})$/;
    if(check.test(image)) {
        thongBao.innerHTML = "<p>(*)</p>";
        return true;
    }
    else{
        thongBao.innerHTML = "<p>Ảnh đại diện là các file hình .jpg, .png, .gif</p>";
        return false;
    }
}
var count = 0;
function Save() {
    var myTable = document.getElementById("myTable");
    var hocPhi = document.getElementById("myCost");
    var mauDon = document.getElementById("MauDon");
    var off = document.getElementById("off");
    if(myName() != "" && GioiTinh() != "" && Phone() != "" && KhoaHoc() != "" && myBirthday() != "" && AnhDaiDien() == true){
        count++;
        var row = myTable.insertRow(count);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);
        var cell5 = row.insertCell(4);
        var cell6 = row.insertCell(5);
        var cell7 = row.insertCell(6);
        var cell8 = row.insertCell(7);
        cell1.innerHTML = count;
        cell2.innerHTML = myName();
        cell4.innerHTML = Phone();
        cell7.innerHTML = KhoaHoc();
        cell8.innerHTML = hocPhi.value;
        cell3.innerHTML = GioiTinh();
        cell5.innerHTML = myBirthday();
        cell6.innerHTML = document.getElementById("myAddress").value;
        mauDon.reset();
        off.setAttribute("data-dismiss","modal");
    }
}