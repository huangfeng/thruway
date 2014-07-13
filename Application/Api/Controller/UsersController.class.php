<?php
/**
 * Created by JetBrains PhpStorm.
 * User: huangfeng
 * Date: 14-7-4
 * Time: 上午11:50
 * To change this template use File | Settings | File Templates.
 */

namespace Api\Controller;


class UsersController extends CommonController {

    public function showAll() {
        $Users = D("Users");
        $data = $Users -> relation(true) -> order("id") -> select() ;
        $this -> ajaxReturn($data);
    }

    public function addUser() {
        $Users = D("Users");
        $data = $this -> getPostData();
        $Users -> create($data);
        if ($this -> checkUsername($Users -> username)) {
            $Users -> add();
            $this -> ajaxSuccess("添加用户成功");
        } else {
          $this -> ajaxError("用户名已使用，请更换别的用户名");
        }
    }

    public function editUser() {
        $Users = D("Users");
        $data = $this -> getPostData();
        $Users -> create($data);
        $result = $Users -> save();
        $this -> ajaxSuccess("添加用户成功.".$result);
    }

    public function deleteUser() {
        $Users = D("Users");
        $data = $this -> getPostData();
        $Users -> create($data);
        $Users -> delete();
    }

    private function checkUsername($username) {
        $Users = M("Users");
        $result = $Users -> getByUsername($username);
        if ($result) {
            return false;
        }
        return true;
    }
}