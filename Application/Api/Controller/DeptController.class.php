<?php
/**
 * Created by JetBrains PhpStorm.
 * User: huangfeng
 * Date: 14-7-4
 * Time: 上午10:27
 * To change this template use File | Settings | File Templates.
 */

namespace Api\Controller;

class DeptController extends CommonController {

    public function showAll() {
        $Dept = M("Dept");
        $data = $Dept -> select();
        $this -> ajaxReturn($data);
    }

    public function addDept() {
        $Dept = D("Dept");
        $data = $this -> getPostData();
        $Dept -> create($data);
        $result = $Dept -> add();
        if ($result > 0) {
            $this -> ajaxSuccess("添加部门成功");
        } else {
            $this -> ajaxError("添加部门失败");
        }
    }

    public function editDept() {
        $Dept = D("Dept");
        $data = $this -> getPostData();
        $Dept -> create($data);
        $Dept -> save();
    }

    public function deleteDept() {
        $Dept = D("Dept");
        $data = $this -> getPostData();
        $Dept -> create($data);
        $Dept -> delete();
    }
}