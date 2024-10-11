<script setup lang="ts">
const tableData = [
  {
    date: '2016-05-03',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-02',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-04',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
];

const tableRef = ref();

onMounted(() => {
  console.log(tableRef.value);
  console.log(tableRef.value.$el);
});
</script>

<template>
  <q-page>
    <div class="h-full p-2">
      <q-table ref="tableRef" :data="tableData" class="bg-red-500" style="color: blue" border>
        <el-table-column prop="date" label="Date" />
        <el-table-column prop="name" label="Name" />
        <el-table-column prop="address" label="Address" />
      </q-table>
    </div>
  </q-page>
</template>
