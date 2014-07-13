<?php
/**
 * User: huangfeng
 * Date: 14-7-4
 * Time: 上午10:19
 */
namespace Api\Model;

class DeptModel extends CommonModel {

    protected $_auto		=	array(
        array('date_created','time',self::MODEL_INSERT,'function'),
        array('date_modified','getCurrentTime',self::MODEL_UPDATE,'callback'),
    );

}