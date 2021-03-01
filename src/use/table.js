import { reactive } from 'vue'
let getTable = null
export let pageData = reactive({
    currentPage:1,
    pageTotal:0,
    pageSizes:[10, 20, 30, 40],
    currentPageSize:10,
})

export const handleSizeChange = function(pageSize){
    pageData.currentPageSize = pageSize
    getTable && getTable()
}

export const handleCurrentChange = function(currentPage){
    pageData.currentPage = currentPage
    getTable && getTable()
}

export const registerGetDataMethod = function(method){
    getTable = method
}