<?php
/**
 * Created by JetBrains PhpStorm.
 * User: huangfeng
 * Date: 14-7-7
 * Time: 上午10:09
 * To change this template use File | Settings | File Templates.
 */
namespace Api\Controller;

use Think\Controller;

class CommonController extends Controller {

    protected function getPostData() {
        $jsonData = $GLOBALS["HTTP_RAW_POST_DATA"];
        return json_decode($jsonData);
    }

    protected function ajaxSuccess($msg) {
        $resultData["status"] = 0;
        $resultData["msg"] = $msg;
        return $this -> ajaxReturn($resultData);
    }

    protected function ajaxError($msg) {
        $resultData["status"] = 1;
        $resultData["msg"] = $msg;
        return $this -> ajaxReturn($resultData);
    }
}