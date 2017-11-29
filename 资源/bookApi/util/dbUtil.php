 <?php
    define("HOST", "127.0.0.1");
    define("USERNAME", "root");
    define("PASSWORD", "");
    define("DBNAME", "book");
    define("MYSQL_CHARSET", "utf8");

    define("BOOKTYPE", "t_book_type");
    define("BOOK", "t_book");
    define("COMMENT", "t_comment");
 
    $conn = mysqli_connect(HOST,USERNAME,PASSWORD,DBNAME);
 
    if (!$conn) {
        die("数据库连接失败: " . mysqli_connect_error());
    }
    //设置数据库返回值 和 php脚本一致
    mysqli_query($conn,"set names '".MYSQL_CHARSET."'");