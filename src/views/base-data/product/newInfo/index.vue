<script setup>
  import { ref, watch, onMounted, reactive } from 'vue';
  import TableList from './table-list.vue'
  
  //   表格


  // 表格

  const value1 = ref('1');
  const value2 = ref('1');
  const genData = ref([
    {
      key: '1',
      title: '所有',
      children: [
        {
          key: '2',
          title: '0213|热带水果',
        },
        {
          key: '3',
          title: '03|零食111',
        },
        {
          key: '4',
          title: '05054586|酒类配方',
        },
        {
          key: '5',
          title: '07446046|酿酒原料',
        },
        {
          key: '6',
          title: '10086|批发测试',
        },
        {
          key: '7',
          title: '1021920|酒水测试1',
        },
        {
          key: '8',
          title: '1022|批发商品',
        },
        {
          key: '9',
          title: '2001|WMS标品仓',
          children: [
            {
              key: '9-1',
              title: '2002|WMS标品0001',
            },
          ]
        },
        {
          key: '10',
          title: '2002|非WMS标品仓',
          children: [
            {
              key: '10-1',
              title: '2002|非WMS标品0001',
            },
          ]
        },
      ],
    },
  ]);

  const getParentKey = (key, tree) => {
    let parentKey;
    for (let i = 0; i < tree.length; i++) {
      const node = tree[i];
      if (node.children) {
        if (node.children.some((item) => item.key === key)) {
          parentKey = node.key;
        } else if (getParentKey(key, node.children)) {
          parentKey = getParentKey(key, node.children);
        }
      }
    }
    return parentKey;
  };

  const expandedKeys = ref(['1']);
  const searchValue = ref('');
  const autoExpandParent = ref(true);
  const gData = ref(genData);
  const onExpand = (keys) => {
    expandedKeys.value = keys;
    autoExpandParent.value = false;
  };

  // 监听 searchValue 的变化
  watch(searchValue, (value) => {
    const expanded = [];

    const searchTree = (tree) => {
      tree.forEach((node) => {
        if (node.title.indexOf(value) > -1) {
          const parentKey = getParentKey(node.key, gData.value);
          if (parentKey && !expanded.includes(parentKey)) {
            expanded.push(parentKey);
          }
        }
        if (node.children) {
          searchTree(node.children);
        }
      });
    };

    searchTree(genData.value);

    expandedKeys.value = expanded;
    autoExpandParent.value = true;
  });
</script>

<template>
  <page-wrapper content-full-height fixed-height>
    <div class="w-full h-full bg-white">
      <div class="w-[250px] float-left h-full p-2" style="border-right: 1px solid #efefef">
        <a-select
          ref="select"
          v-model:value="value1"
          class="w-full mb-2"
          @focus="focus"
          @change="handleChange"
        >
          <a-select-option value="1">商品档案</a-select-option>
        </a-select>
        <a-select
          ref="select"
          v-model:value="value2"
          class="w-full mb-2"
          @focus="focus"
          @change="handleChange"
        >
          <a-select-option value="1">商品类别</a-select-option>
        </a-select>

        <div>
          <a-input-search
            v-model:value="searchValue"
            style="margin-bottom: 8px"
            placeholder="代码|名称|速记码"
          />
          <a-tree
            :expanded-keys="expandedKeys"
            :auto-expand-parent="autoExpandParent"
            :tree-data="gData"
            @expand="onExpand"
          >
            <template #title="{ title }">
              <span v-if="title.indexOf(searchValue) > -1">
                {{ title.substring(0, title.indexOf(searchValue)) }}
                <span style="color: #f50">{{ searchValue }}</span>
                {{ title.substring(title.indexOf(searchValue) + searchValue.length) }}
              </span>
              <span v-else>{{ title }}</span>
            </template>
          </a-tree>
        </div>
      </div>
      <div class="w-[calc(100%-250px)] float-right p-4">
        <TableList />
      </div>
    </div>
  </page-wrapper>
</template>
<style lang="less" scoped>
  :deep(.vben-page-wrapper-content) {
    margin: 0;
  }
</style>
