const env =  "prod";

if (env === "dev"){
    exports.mysqlConnectionString = "mysql://anhnd9:Vtp@ctbc123@127.0.0.1:3306/QLNV";  //dev

}else{
    exports.mysqlConnectionString = "mysql://anhnd9:123456789@127.0.0.1:3306/QLNV";//production
}

