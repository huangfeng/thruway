<?php
/**
 * Created by JetBrains PhpStorm.
 * User: huangfeng
 * Date: 14-7-4
 * Time: 上午11:45
 * To change this template use File | Settings | File Templates.
 */

namespace Api\Model;

class UsersModel extends CommonRelationModel {

    public $_auto		=	array(
        array('password','md5',self::MODEL_BOTH,'function'),
        array('date_created','getCurrentTime',self::MODEL_INSERT,'callback'),
        array('date_modified','getCurrentTime',self::MODEL_UPDATE,'callback'),
    );

    public $_link      =   array (
        'Dept' => array(
            'mapping_type'   => self::BELONGS_TO,
            'class_name'     => 'Dept',
            'foreign_key'    => 'dept_id',
            'mapping_name'   => 'dept'
        ),
    );

}