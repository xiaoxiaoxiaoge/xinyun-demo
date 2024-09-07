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
          title: '热带水果',
        },
        {
          key: '3',
          title: '稀有水果',
        },
        {
          key: '4',
          title: '热销水果',
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
      <div class="w-[200px] float-left h-full p-2" style="border-right: 1px solid #efefef">
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
      <div class="w-[calc(100%-200px)] float-right p-4">
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
