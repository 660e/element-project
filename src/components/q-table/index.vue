<script setup lang="ts">
import type { CSSProperties } from 'vue';

defineProps<{
  class?: string | string[] | Record<string, boolean>;
  style?: string | CSSProperties;
}>();

const tableRef = ref();

onMounted(() => {
  console.log(tableRef.value);
});
</script>

<template>
  <div :class="$props.class" :style="$props.style">
    <div>header</div>

    <el-table v-bind="$attrs" ref="tableRef">
      <template v-for="(_, name) in $slots" #[name]="scope">
        <slot v-bind="scope || {}" :name="name"></slot>
      </template>
    </el-table>

    <div>footer</div>
  </div>
</template>
