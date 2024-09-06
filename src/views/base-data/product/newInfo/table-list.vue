<script  setup>
import { getCurrentInstance, onMounted, reactive, ref, toRefs } from "vue";
const data = reactive({
  form: {
    username: ''
  },
  queryParams: {
    pageNum: 1,
    pageSize: 10,
  } ,
});
const { queryParams, form } = toRefs(data);
</script>

<template>
  <div>
    <a-form
      :model="form"
      name="basic"
      :label-col="{ span: 8 }"
      :wrapper-col="{ span: 16 }"
      autocomplete="off"
      
    >
      <a-row :gutter="16">
        <a-col class="gutter-row" :span="8">
          <a-form-item
            label="关键字"
            name="关键字"
          >
            <a-input v-model:value="form.username" />
          </a-form-item>
        </a-col>
        <a-col class="gutter-row" :span="8">
          <a-form-item
            label="商品品牌"
            name="商品品牌"
          >
            <a-input v-model:value="form.username" />
          </a-form-item>
        </a-col>
        <a-col class="gutter-row" :span="8">
          <a-form-item
            label="商品部门"
            name="商品部门"
          >
            <a-input v-model:value="form.username" />
          </a-form-item>
        </a-col>
        <a-col class="gutter-row" :span="8">
          <a-form-item
            label="商品标签"
            name="商品标签"
          >
            <a-input v-model:value="form.username" />
          </a-form-item>
        </a-col>
        <a-col class="gutter-row" :span="8">
          <a-form-item
            label="经营范围"
            name="经营范围"
          >
            <a-input v-model:value="form.username" />
          </a-form-item>
        </a-col>
        <a-col class="gutter-row" :span="8">
          <a-form-item class="oprations">
            <a-button type="primary" @click="handleQuery"  class=" mr-2 ml-4">搜索</a-button>
            <a-button @click="resetQuery">重置</a-button>
          </a-form-item>
          
        </a-col>
      </a-row>
    </a-form>
    <a-row :gutter="10" class="mb8">
        <a-col :span="1.5">
          <a-button type="primary" plain  @click="()=>handleSetting()" v-hasPermi="['server:list:add']">新增</a-button>
        </a-col>
        <a-col :span="1.5">
          <a-button type="primary" plain  @click="handleImport" v-hasPermi="['server:list:add']">批量删除</a-button>
        </a-col>
        <a-col :span="1.5">
          <a-button type="warning" plain icon="Download"
            v-hasPermi="['system:post:export']">导入</a-button>
        </a-col>
        <a-col :span="1.5">
          <a-button type="warning" plain icon="Download"
            v-hasPermi="['system:post:export']">导出</a-button>
        </a-col>
        <right-toolbar v-model:showSearch="showSearch" @queryTable="getList"></right-toolbar>
      </a-row>
  </div>
  
 
</template>
<style lang="less" scoped>
.oprations {
  :deep(.a-form-item__content) {
    justify-content: flex-end
  }
}
</style>