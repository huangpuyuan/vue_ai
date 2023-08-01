//冒泡排序函数
function bubbleSort(arr) {
    var temp;
    for (var i = 0; i < arr.length - 1; i++) { //外层循环控制排序趟数
        for (var j = 0; j < arr.length - 1 - i; j++) { //内层循环控制每一趟排序多少次
        if (arr[j] > arr[j + 1]) {
            temp = arr[j]; //交换两数
            arr[j] = arr[j + 1];
            arr[j + 1] = temp;
        }
        }
    }
    return arr; //返回数组
}

//手机号的正则表达式
function isPhoneNo(phone) {
    var pattern = /^1[34578]\d{9}$/;
    return pattern.test(phone);
}

//用户名的正则表达式
function isUserName(name) {
    var pattern = /^[a-zA-Z0-9_-]{4,16}$/;
    return pattern.test(name);
}
