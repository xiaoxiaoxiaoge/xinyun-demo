<script setup>
  import { reactive, ref, toRefs } from 'vue';
  import { PlusCircleOutlined, DeleteOutlined } from "@ant-design/icons-vue";
  const data = reactive({
    form: {},
  });
  const { form } = toRefs(data);
  

  const queryData = ref(
    [
      {
          id: 1,
          code: 1,
          productWord: '0000002',
          productName: '匡威官方男鞋',
          productCode: '210000002',
          specify: '双',
          unit: '盒',
          num: '1.00',
          price: '13.3333',
          money: '13.3333',
          storeNum: '6.00',
          baseUnit: '盒'
      }
    ]
  )
  const columns = [
  {
    key: 'action',
  },
  {
    title: '序号',
    dataIndex: 'code',
    key: 'code',
  },
  {
    title: '商品代码',
    dataIndex: 'productWord',
    key: 'productWord',
    sorter: true,
  },
  {
    title: '商品名称',
    key: 'productName',
    dataIndex: 'productName',
    sorter: true,
  },
  {
    title: '商品条码',
    key: 'productCode',
    dataIndex: 'productCode',
    sorter: true,
  },
  {
    title: '商品规格',
    dataIndex: 'specify',
    key: 'specify',
    sorter: true,
  },
  {
    title: '库存单位',
    dataIndex: 'unit',
    key: 'unit',
    sorter: true,
  },
  {
    title: '数量',
    dataIndex: 'num',
    key: 'num',
    sorter: true,
    width: 120,
  },
  {
    title: '单价',
    dataIndex: 'price',
    key: 'price',
    sorter: true,
  },
  {
    title: '金额',
    key: 'money',
    dataIndex: 'money',
    sorter: true,
  },
  {
    title: '库存数量',
    key: 'storeNum',
    dataIndex: 'storeNum',
    sorter: true,
  },
  {
    title: '基本单位',
    key: 'baseUnit',
    dataIndex: 'baseUnit',
    sorter: true,
    fixed: 'right',
  }
];
const editingRecord = ref(null)

const totalNum = computed(() => {
  return queryData.value.reduce((total, record) => total - 0 + (record.num - 0 || 0), 0);
});

const totalMoney = computed(() => {
  return queryData.value.reduce((total, record) => Number(total) + (record.num * record.price || 0), 0);
});

function editNum(record) {
  editingRecord.value = record;
}

function stopEditing() {
  editingRecord.value = null;
}

const addRow = (record) => {
  queryData.value.push({ ...record, id: queryData.value.length + 1 });
}

const deleteRow = (row) => {
  queryData.value = queryData.value.filter(item => item.id !== row.id);
}

</script>

<template>
  <div class="simple-app-container relative" style="margin-bottom: 80px !important; min-height: calc(100vh - 180px)">
    <div class="px-2">
      <a-form
        ref="formRef"
        :model="form"
        name="basic"
        :label-col="{ span: 6 }"
        :wrapper-col="{ span: 16 }"
        autocomplete="off"
      >
        <a-row :gutter="16">
          <a-col class="gutter-row" :span="6">
            <a-form-item label="单据号" name="bills">
              <a-input v-model:value="form.productCode" placeholder="请输入商品编码" />
            </a-form-item>
          </a-col>
          <a-col class="gutter-row" :span="6">
            <a-form-item
              label="门店"
              name="shop"
              :rules="[{ required: true, message: '请选择门店!' }]"
            >
              <stock-bills
                v-model:value="form.shop"
                :only-final="false"
                placeholder="请选择商品类别"
              />
            </a-form-item>
          </a-col>
          <a-col class="gutter-row" :span="6">
            <a-form-item
              label="仓库"
              name="warehouse"
              :rules="[{ required: true, message: '请选择仓库!' }]"
            >
                <a-select v-model:value="form.warehouse" placeholder="请选择仓库">
                  <a-select-option value="1">合肥仓</a-select-option>
                </a-select>
            </a-form-item>
          </a-col>
          <a-col class="gutter-row" :span="6">
            <a-form-item label="业务员" name="salesman" :rules="[{ required: true, message: '请选择业务员!' }]">
                <a-select v-model:value="form.salesman" placeholder="请选择业务员">
                  <a-select-option value="1">张某某</a-select-option>
                </a-select>
            </a-form-item>
          </a-col>
          <a-col class="gutter-row" :span="6">
            <a-form-item
              label="调整时间"
              name="time"
              :rules="[{ required: true, message: '请选择调整时间!' }]"
            >
              <a-date-picker v-model:value="form.time" placeholder="请选择调整时间" />
            </a-form-item>
          </a-col>
          <a-col class="gutter-row" :span="6">
            <a-form-item
              label="调整原因"
              name="cause"
              :rules="[{ required: true, message: '请选择调整原因!' }]"
            >
                <stock-cause
                    v-model:value="form.cause"
                    :only-final="false"
                    placeholder="请选择调整原因"
                />
            </a-form-item>
          </a-col>
          <a-col class="gutter-row" :span="6">
            <a-form-item label="出入标记" name="sign" :rules="[{ required: true, message: '请输入出入标记!' }]">
              <a-input v-model:value="form.specification" placeholder="请输入出入标记" />
            </a-form-item>
          </a-col>
          <a-col class="gutter-row" :span="6">
            <a-form-item label="单据状态" name="status">
                <a-input v-model:value="form.specification" placeholder="请输入单据状态" />
            </a-form-item>
          </a-col>
          <a-col class="gutter-row" :span="6">
            <a-form-item
              label="部门"
              name="department"
              :rules="[{ required: true, message: '请选择商品部门!' }]"
            >
              <product-depatment
                v-model:value="form.department"
                :only-final="false"
                placeholder="请选择部门"
              />
            </a-form-item>
          </a-col>
          <a-col class="gutter-row" :span="6">
            <a-form-item label="备注" name="remark">
                <a-input v-model:value="form.specification" placeholder="请输入备注" />
            </a-form-item>
          </a-col>
        </a-row>
      </a-form>

      <a-row :gutter="10" class="mb-2">
        <a-col :span="1.5">
          <a-dropdown-button @click="handleButtonClick">
            批量添加
            <template #overlay>
                <a-menu-item key="1">
                  <UserOutlined />
                  批量添加
                </a-menu-item>
            </template>
          </a-dropdown-button>
        </a-col>
        <a-col :span="1.5">
          <a-button type="primary" plain  @click="handleImport" v-hasPermi="['server:list:add']">导出</a-button>
        </a-col>
        <a-col :span="1.5">
          <a-dropdown-button @click="handleButtonClick">
            更多操作
            <template #overlay>
                <a-menu-item key="1">
                  <UserOutlined />
                  更多操作
                </a-menu-item>
            </template>
          </a-dropdown-button>
        </a-col>
      </a-row>

        <a-table :columns="columns" :data-source="queryData"  :pagination="false" class="custom-table">
            <template #summary>
              <a-table-summary-row>
                <a-table-summary-cell :col-span="7" class="text-center font-bold">总合计：{{ queryData.length }}项</a-table-summary-cell>
                <a-table-summary-cell :col-span="2"  class=" font-bold">
                  <a-typography-text >
                    {{ totalNum.toFixed(2)  }}
                  </a-typography-text>
                </a-table-summary-cell>
                <a-table-summary-cell :col-span="3" class=" font-bold">
                  <a-typography-text>
                    {{ totalMoney.toFixed(4) }}
                  </a-typography-text>
                </a-table-summary-cell>
              </a-table-summary-row>
            </template>
            <template #bodyCell="{ column, record }">
                <template v-if="column.key === 'action'">
                    <span class=" text-[#0960bd]">
                        <PlusCircleOutlined class="mr-2" @click="() => addRow(record)"/>
                        <DeleteOutlined @click="() => deleteRow(record)"/>
                    </span>
                </template>
                <template v-else-if="column.key === 'num'">
                  <span v-if="!editingRecord || editingRecord.id !== record.id" @click="editNum(record)">
                    {{ record.num }}
                  </span>
                  <a-input-number
                    v-else
                    v-model:value="record.num"
                    @change="onNumChange(record)"
                    :min="0.1"
                    :step="0.01"
                    @blur="stopEditing"
                  />
                </template>
                <template v-else-if="column.key === 'money'">
                  <span>{{ (record.num * record.price).toFixed(4) }}</span>
                </template>
            </template>
        </a-table>
    </div>
    <div class=" fixed w-full right-0 bottom-0 h-16 bg-white flex items-center justify-center z-20">
      <a-button class=" mr-4">取消</a-button>
      <a-button class=" mr-4">保存模板</a-button>
      <a-button type="primary" class=" mr-4">保存</a-button>
      <a-button type="primary" class=" mr-4" @click="save">保存并新增</a-button>
      <a-button type="primary" class=" mr-4">保存并返回</a-button>
    </div>
  </div>
</template>
<style lang="less" scoped>
.simple-app-container{
  padding: 16px 0;
  :deep(.ant-table-wrapper table){
    height: calc(100vh - 450px);
    border-collapse: collapse;
  border-spacing: 0;
  }
  .custom-table {
    :deep(.ant-table-tbody) {
      min-height: calc(100vh - 500px); /* 设置最小高度，根据需要调整 */
    }
    :deep(.ant-table-tbody td) {
      height: 50px; /* 设置最小高度，根据需要调整 */
    }
  }
}

</style>
