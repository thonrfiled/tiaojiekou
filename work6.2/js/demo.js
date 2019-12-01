//url?key=value&key=value;
function obj2 (obj){
    var  str1= [];
    for(var key in obj){
        str1.push(encodeURIComponent(key)+'='+encodeURIComponent(obj[key]));
    } 
    return str1.join("&")
}
function ajax(url,obj,success,error){
    //0.将对象转换成字符串
    var str = obj2(obj);
    //1.申请一个异步对象
    var xmlhttp = new XMLHttpRequest();
    //2.设置请求方式和地址
    xmlhttp.open("GET",url+str,true); 
    //3.发送请求
    xmlhttp.send();
    //4.监听状态变化
    xmlhttp.onreadystatechange = function(){
        if(xmlhttp.readyState===4){
            if(xmlhttp.status>=200&&xmlhttp.status<300||xmlhttp.status===304){
               success(xmlhttp);
                }else{
                error(xmlhttp);
                }
        }    
    }
}