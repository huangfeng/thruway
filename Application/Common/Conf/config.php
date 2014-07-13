<?php
return array(
    'DEFAULT_MODULE'      => 'Api', //默认模块
    'URL_MODEL'            => '2', //URL模式
    'SESSION_AUTO_START' => true, //是否开启session

    //数据库配置信息
    'DB_TYPE'   => 'mysql',                    // 数据库类型
    'DB_HOST'   => '127.0.0.1',               // 服务器地址
    'DB_NAME'   => 'thruway',                 // 数据库名
    'DB_USER'   => 'root',                    // 用户名
    'DB_PWD'    => '',                         // 密码
    'DB_PORT'   => 3306,                       // 端口
    'DB_PREFIX' => 't_',                       // 数据库表前缀

    'USER_AUTH_ON'              =>  true,
    'USER_AUTH_TYPE'			   =>  2,		// 默认认证类型 1 登录认证 2 实时认证
    'USER_AUTH_KEY'             =>  'authId',	// 用户认证SESSION标记
    'ADMIN_AUTH_KEY'			   =>  'administrator',
    'USER_AUTH_MODEL'           =>  'User',	// 默认验证数据表模型
    'AUTH_PWD_ENCODER'          =>  'md5',	// 用户认证密码加密方式
    'USER_AUTH_GATEWAY'         =>  '/Public/login',// 默认认证网关
    'NOT_AUTH_MODULE'           =>  'Public',	// 默认无需认证模块
    'REQUIRE_AUTH_MODULE'      =>  '',		// 默认需要认证模块
    'NOT_AUTH_ACTION'           =>  '',		// 默认无需认证操作
    'REQUIRE_AUTH_ACTION'      =>  '',		// 默认需要认证操作
    'GUEST_AUTH_ON'             =>  false,    // 是否开启游客授权访问
    'GUEST_AUTH_ID'             =>  0,        // 游客的用户ID
    'DB_LIKE_FIELDS'            =>  'title|remark',
    'RBAC_ROLE_TABLE'           =>  't_role',
    'RBAC_USER_TABLE'           =>  't_role_user',
    'RBAC_ACCESS_TABLE'         =>  't_access',
    'RBAC_NODE_TABLE'           =>  't_node',
    'SHOW_PAGE_TRACE'           =>  1, //显示调试信息

    // 开启路由
    'URL_ROUTER_ON'   => true,
	//'配置项'=>'配置值'

    'LOG_RECORD' => true,  // 开启日志记录
    'LOG_LEVEL'  =>'EMERG,ALERT,CRIT,ERR,WARN,NOTICE,INFO,DEBUG,SQL'
);