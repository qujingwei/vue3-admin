<template>
  <div class="user-dropdown">
    <el-dropdown>
        <span>马云</span>
        <i class="el-icon-caret-bottom"></i>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item>退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </template>
    </el-dropdown>
  </div>
  
</template>
<script>
export default {
    name:'user'
}
</script>
<style lang="less" scope>
  .user-dropdown{
    flex: 1 1 auto;
    text-align: right;
    cursor: pointer;
    margin-right: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
</style>