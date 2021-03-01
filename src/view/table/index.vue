<template>
    <el-table
      :data="tableData"
      border
      style="width: 100%">
      <el-table-column
        prop="name"
        label="姓名">
      </el-table-column>
      <el-table-column
        prop="email"
        label="邮箱">
      </el-table-column>
      <el-table-column
        prop="createTime"
        label="时间">
      </el-table-column>
      <el-table-column
        label="操作">
        <el-button size="medium" type="primary">操作</el-button>
      </el-table-column>
    </el-table>
    <div style="text-align:right;margin-top:10px;">
        <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="pageData.currentPage"
            :page-sizes="pageData.pageSizes"
            :page-size="pageData.currentPageSize"
            :total="pageData.pageTotal"
            layout="total, sizes, prev, pager, next, jumper">
        </el-pagination>
    </div>
</template>
<script>
import { getTable } from '@/api'
import { ref } from 'vue'
import { pageData, handleSizeChange, handleCurrentChange, registerGetDataMethod } from '@/use/table'

export default {
    name:'table',
    setup(){
        let tableData = ref([])
        
        const getTableData = function(){
            const req = {
                pageSize:pageData.currentPageSize,
                pageNumber:pageData.currentPage
            }
            getTable(req).then((res) => {
                tableData.value = res.data
                pageData.pageTotal = res.total
            }).catch(err => {
                console.log(err);
            })
        }
        getTableData()
        registerGetDataMethod(getTableData)
        return {
            tableData,
            pageData,
            getTableData,
            handleSizeChange,
            handleCurrentChange,
        }
    }
}
</script>