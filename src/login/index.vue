<script setup lang="ts">
import type { FormInstance, FormRules } from 'element-plus';

import AppearanceComponent from '@/layouts/components/appearance.vue';

interface IModel {
  username: string;
  password: string;
}

const loading = ref(false);
const formRef = ref<FormInstance>();
const model = ref<IModel>({
  username: 'username',
  password: 'password',
});
const rules: FormRules<IModel> = {
  username: [{ required: true, trigger: 'blur' }],
  password: [{ required: true, trigger: 'blur' }],
};

const router = useRouter();
const login = () => {
  loading.value = true;
  formRef.value?.validate((valid) => {
    if (valid) setTimeout(() => router.push({ name: 'home' }), 1000);
  });
};
</script>

<template>
  <div class="h-screen flex justify-center items-center">
    <div class="fixed top-2 right-2">
      <appearance-component />
    </div>
    <el-form
      ref="formRef"
      :model="model"
      :rules="rules"
      :disabled="loading"
      class="w-60 p-4 rounded border border-neutral-200 dark:border-neutral-800"
    >
      <el-form-item prop="username">
        <el-input v-model="model.username" placeholder="Username">
          <template #prefix>
            <el-icon><i-ep-user /></el-icon>
          </template>
        </el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input v-model="model.password" placeholder="Password" type="password">
          <template #prefix>
            <el-icon><i-ep-lock /></el-icon>
          </template>
        </el-input>
      </el-form-item>
      <el-button type="primary" class="w-full" :loading="loading" @click="login">Sign in</el-button>
    </el-form>
  </div>
</template>
