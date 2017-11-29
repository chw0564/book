<?php

	require "util/dbUtil.php";

    $bookName = $_REQUEST["bookName"];
    $price = $_REQUEST["bookPrice"];
    $typeId = $_REQUEST["bookType"];

    $bookId = $_REQUEST["bookId"];
 
    $tableName1 = BOOK;
    $tableName2 = COMMENT;

    $sql = "select 
                b.id id , b.bookName bookName , b.price price, b.des des , b.typeId typeId ,
                ifnull(5,avg(c.level)) level
            from 
                $tableName1 b
            left join 
                $tableName2 c
            on 
                b.id = c.bookId
            where 
                1=1
            ";

    if($bookName!=""){
        $sql .= "and b.bookName like '%$bookName%' ";
    }

    if($price!=""){
        $sql .= "and b.price >= '$price' ";
    }

    if($typeId!=""){
        $sql .= "and b.typeId = '$typeId' ";
    }

    if($bookId!=""){
        $sql .= "and b.id = '$bookId' ";
    }

    $sql .= "group by b.id ";
 
    // echo "$sql";

    $result = mysqli_query($conn,$sql);
 
    $resultArr = array();

    if($result->num_rows>0){
    	
    	 //设置查询消息
        $resultArr["msg"] = "查询成功";
        //设置查询状态  true 表示查询成功
        $resultArr["resultState"] = true;

        $bookArr = array();

        while ($row = mysqli_fetch_array($result,MYSQLI_ASSOC)) {
            // echo "$row";
           array_push($bookArr, $row);
        }

        // 将查询结果放置在关联数组中
        if($bookId!=""){
            $resultArr["result"] = $bookArr[0];
        }else{
            $resultArr["result"] = $bookArr;
        }

        
    }else{

        $resultArr["msg"] = "查询失败";
        //设置查询状态  false  表示查询失败
        $resultArr["resultState"] = false;

        $resultArr["result"] = array();

    } 

    echo json_encode($resultArr);