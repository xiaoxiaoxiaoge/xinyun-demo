<script  setup>
import { getCurrentInstance, onMounted, reactive, ref, toRefs } from "vue";
import { RightOutlined, DownOutlined } from "@ant-design/icons-vue";
const data = reactive({
  form: {
    username: ''
  },
  queryParams: {
    pageNum: 1,
    pageSize: 10,
  } ,
});
const columns = [
{
    title: '商品条码',
    dataIndex: 'age',
    key: 'age',
    sorter: true,
  },
  {
    title: '商品代码',
    dataIndex: 'age',
    key: 'age',
    sorter: true,
  },
  {
    title: '速记码',
    dataIndex: 'address',
    key: 'address',
    sorter: true,
  },
  {
    title: '商品名称',
    key: 'tags',
    dataIndex: 'tags',
    sorter: true,
  },
  {
    title: '商品类型',
    dataIndex: 'code',
    key: 'code',
    sorter: true,
  },
  {
    title: '是否淘汰',
    dataIndex: 'age',
    key: 'age',
    sorter: true,
  },
  {
    title: '规格',
    dataIndex: 'address',
    key: 'address',
    sorter: true,
  },
  {
    title: '基本单位',
    key: 'tags',
    dataIndex: 'tags',
    sorter: true,
  },
  {
    title: 'Action',
    key: 'action',
    sorter: true,
  },
];

const queryData = params => {
  return [
    {
      key: '1',
      shopCode: 15,
      age: 32,
      address: 'New York No. 1 Lake Park',
      tags: ['nice', 'developer'],
      
    },
    {
      key: '2',
      age: 42,
      address: 'London No. 1 Lake Park',
      tags: ['loser'],
    },
    {
      key: '3',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
      tags: ['cool', 'teacher'],
    },
  ]
  // return axios.get('https://randomuser.me/api?noinfo', {
  //   params,
  // });
};
const state = reactive({
  selectedRowKeys: [],
  // Check here to configure the default column
  loading: false,
});
const onSelectChange = selectedRowKeys => {
  console.log('selectedRowKeys changed: ', selectedRowKeys);
  state.selectedRowKeys = selectedRowKeys;
};
const handlePageChange = (page, pageSize) => {
      // 页码改变时的处理函数
    }
const pagination = {
  // 分页配置
  pageSize: 10, // 每页显示的条数
  showSizeChanger: true, // 是否可以改变每页显示的条数
  pageSizeOptions: ['10', '20', '30', '40'], // 可选的每页显示条数
  showQuickJumper: true, // 是否可以快速跳转到指定页
  showTotal: total => `共 ${total} 条`, // 显示总条数和当前数据范围
  current: 1, // 当前页数
  total: 50, // 总条数
  onChange: handlePageChange // 页码改变时的回调函数
}

// const {
//   data: dataSource,
//   run,
//   loading,
//   current,
//   pageSize,
// } = usePagination(queryData, {
//   formatResult: res => res.data.results,
//   pagination: {
//     currentKey: 'page',
//     pageSizeKey: 'results',
//   },
// });

// const pagination = computed(() => ({
//   total: 200,
//   current: current.value,
//   pageSize: pageSize.value,
// }));



const handleData = [
  {
    key: '1',
    shopCode: 15,
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
    children:[
        {
          key: '3',
          age: 42,
          address: 'London No. 1 Lake Park',
          tags: ['loser'],
        },
      ]
  },
  {
    key: '2',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser'],
  },
  {
    key: '3',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
];
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
          <div class="oprations">
            <a-button type="primary" @click="handleQuery"  class=" mr-2 ml-4">搜索</a-button>
            <a-button @click="resetQuery">重置</a-button>
          </div>
          
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
          <a-dropdown-button @click="handleButtonClick">
            导入
            <template #overlay>
                <a-menu-item key="1">
                  <UserOutlined />
                  导入
                </a-menu-item>
            </template>
          </a-dropdown-button>
        </a-col>
        <a-col :span="1.5">
          <a-dropdown-button @click="handleButtonClick">
            导出
            <template #overlay>
                <a-menu-item key="1">
                  <UserOutlined />
                  导出
                </a-menu-item>
            </template>
          </a-dropdown-button>
        </a-col>
        <a-col :span="1.5">
          <a-dropdown-button @click="handleButtonClick">
            导出
            <template #overlay>
                <a-menu-item key="1">
                  <UserOutlined />
                  导出
                </a-menu-item>
            </template>
          </a-dropdown-button>
        </a-col>
        <a-col :span="1.5">
          <a-dropdown-button @click="handleButtonClick">
            批量淘汰
            <template #overlay>
                <a-menu-item key="1">
                  <UserOutlined />
                  批量淘汰
                </a-menu-item>
            </template>
          </a-dropdown-button>
        </a-col>
        <a-col :span="1.5">
          <a-button type="primary" plain  @click="handleImport" v-hasPermi="['server:list:add']">批量取消淘汰</a-button>
        </a-col>
        <a-col :span="1.5">
          <a-button type="primary" plain  @click="handleImport" v-hasPermi="['server:list:add']">批量更新速记码</a-button>
        </a-col>
        <a-col :span="1.5">
          <a-dropdown-button @click="handleButtonClick">
            批量修改
            <template #overlay>
                <a-menu-item key="1">
                  <UserOutlined />
                  批量修改
                </a-menu-item>
            </template>
          </a-dropdown-button>
        </a-col>
        <a-col :span="1.5">
          <a-button type="primary" plain  @click="handleImport" v-hasPermi="['server:list:add']">复制</a-button>
        </a-col>
        <a-col :span="1.5">
          <a-dropdown-button @click="handleButtonClick">
            更多
            <template #overlay>
                <a-menu-item key="1">
                  <UserOutlined />
                  其它
                </a-menu-item>
            </template>
          </a-dropdown-button>
        </a-col>
        <right-toolbar v-model:showSearch="showSearch" @queryTable="getList"></right-toolbar>
      </a-row>

      <a-table :columns="columns" :data-source="handleData" :pagination="pagination" :row-selection="{ selectedRowKeys: state.selectedRowKeys, onChange: onSelectChange }" >
        <!-- <template #headerCell="{ column }">
          
        </template> -->
        <template #expandIcon="props">
          <span v-if="props.record.children && props.record.children.length > 0">
            <div
              v-if="props.expanded"
              style="display: inline-block; margin-right: 10px"
              @click="
                (e) => {
                  props.onExpand(props.record, e)
                }
              "
            >
              <DownOutlined />
            </div>
            <div
              v-else
              style="display: inline-block; margin-right: 10px"
              @click="
                (e) => {
                  props.onExpand(props.record, e)
                }
              "
            >
              <RightOutlined />
            </div>
          </span>
          <span v-else style="margin-right: 22px"></span>
        </template>

        <template #bodyCell="{ column, record }">
          <!-- <template v-if="column.key === 'tags'">
            <span>
              <a-tag
                v-for="tag in record.tags"
                :key="tag"
                :color="tag === 'loser' ? 'volcano' : tag.length > 5 ? 'geekblue' : 'green'"
              >
                {{ tag.toUpperCase() }}
              </a-tag>
            </span>
          </template> -->
          <template v-if="column.key === 'action'">
            <span>
              <a-button type="primary" >删除</a-button>
            </span>
          </template>
        </template>
      </a-table>
  </div>
  
 
</template>
<style lang="less" scoped>
.oprations {
  text-align: right;
}
</style>