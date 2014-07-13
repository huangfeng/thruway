<?php
/**
 * Created by JetBrains PhpStorm.
 * User: huangfeng
 * Date: 14-7-7
 * Time: 上午9:56
 * To change this template use File | Settings | File Templates.
 */
namespace Api\Model;

use Think\Model;

class CommonModel extends Model {

    protected function getCurrentTime() {
        return date("Y-m-d H:i:s",time()) ;
    }
}