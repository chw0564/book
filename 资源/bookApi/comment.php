<?php

	require "util/dbUtil.php";

    $bookId = $_REQUEST["bookId"];
 
    $tableName = COMMENT;

    $sql = "select 
                id , nikeName , createTime , message , level , bookId
            from 
                $tableName 
            where 
                bookId = $bookId ";

    $result = mysqli_query($conn,$sql);
 
    $resultArr = array();

    if($result->num_rows>0){
    	
    	 //设置查询消息
        $resultArr["msg"] = "查询成功";
        //设置查询状态  true 表示查询成功
        $resultArr["resultState"] = true;

        $commentArr = array();

        while ($row = mysqli_fetch_array($result,MYSQLI_ASSOC)) {
           array_push($commentArr, $row);
        }

        // 将查询结果放置在关联数组中
        $resultArr["result"] = $commentArr;
    }else{

        $resultArr["msg"] = "查询失败";
        //设置查询状态  false  表示查询失败
        $resultArr["resultState"] = false;

        $resultArr["result"] = array();

    } 

    echo json_encode($resultArr);