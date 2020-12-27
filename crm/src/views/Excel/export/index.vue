<template>
  <div class="export_container">
    <el-table
      ref="multipleTable"
      :data="tableData"
      tooltip-effect="dark"
      style="width: 100%"
      @selection-change="handleSelectionChange"
      id="rebateSetTable"
    >
      <el-table-column type="selection" width="55"></el-table-column>
      <el-table-column label="日期" width="120">
        <template slot-scope="scope">{{ scope.row.date }}</template>
      </el-table-column>
      <el-table-column prop="name" label="姓名" width="120"></el-table-column>
      <el-table-column
        prop="address"
        label="地址"
        show-overflow-tooltip
      ></el-table-column>
    </el-table>
    <el-button @click="exportExcel">导出</el-button>
  </div>
</template>

<script>
import tableData from "../data";
export default {
  name: "export",
  data() {
    return {
      filename: "测试",
      tableData: tableData,
      multipleSelection: [], // 勾选的数据
    };
  },
  created() {},
  methods: {
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
    exportExcel() {
      import("@/utils/vendor/Export2Excel").then((excel) => {
        const tHeader = ["日期", "姓名", "地址"];
        const filterVal = Object.keys(this.tableData[0]);
        const list = this.multipleSelection;
        const data = this.formatJson(filterVal, list);
        excel.export_json_to_excel({
          header: tHeader,
          data,
          filename: this.filename || "excel-list",
          autoWidth: this.autoWidth,
        });
        this.downloadLoading = false;
      });
    },

    formatJson(filterVal, jsonData) {
      return jsonData.map((v) => filterVal.map((j) => v[j]));
    },
  },
};
</script>

<style lang="scss" scoped>
</style>