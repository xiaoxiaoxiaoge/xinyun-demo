<template>
  <div class="simple-app-container relative" style="margin-bottom: 80px!important">
    <div v-loading="loading" v-permission="['base-data:product:info:add']">
      <div class=" flex items-center justify-between mb-2">
        <div class=" flex items-center">
          <span class=" w-1 h-4 bg-[#0960bd] mr-2"></span>
          <span>基础属性</span>
        </div>
        <div>
          <a-button class=" mr-2">自动获取</a-button>
          <a-button type="primary">设置一品多码</a-button>
        </div>
      </div>
      <div class=" ml-8">
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
              <a-form-item
                label="商品编码"
                name="productCode"
              >
                <a-input v-model:value="form.productCode" placeholder="请输入商品编码"/>
              </a-form-item>
            </a-col>
            <a-col class="gutter-row" :span="6">
              <a-form-item
                label="商品类别"
                name="productCategory"
                :rules="[{ required: true, message: '请选择商品类别!' }]"
              >
                  <product-category-selector
                    v-model:value="form.productCategory"
                    :only-final="false"
                    placeholder="请选择商品类别"
                  />
              </a-form-item>
            </a-col>
            <a-col class="gutter-row" :span="6">
              <a-form-item
                label="商品代码"
                name="productWord"
                :rules="[{ required: true, message: '请输入商品代码!' }]"
              >
                <a-input v-model:value="form.productWord" placeholder="请输入商品代码"/>
              </a-form-item>
            </a-col>
            <a-col class="gutter-row" :span="6">
              <a-form-item
                label="商品条码"
                name="productBarCode"
              >
                <a-input v-model:value="form.productBarCode" placeholder="请输入商品条码"/>
              </a-form-item>
            </a-col>
            <a-col class="gutter-row" :span="6">
              <a-form-item
                label="商品名称"
                name="productName"
                :rules="[{ required: true, message: '请输入商品名称!' }]"
              >
                <a-input v-model:value="form.productName" placeholder="请输入商品名称"/>
              </a-form-item>
            </a-col>
            <a-col class="gutter-row" :span="6">
              <a-form-item
                label="速记码"
                name="productShortCode"
                :rules="[{ required: true, message: '请输入速记码!' }]"
              >
                <a-input v-model:value="form.productShortCode" placeholder="请输入速记码"/>
              </a-form-item>
            </a-col>
            <a-col class="gutter-row" :span="6">
              <a-form-item
                label="商品规格"
                name="specification"
              >
                <a-input v-model:value="form.specification" placeholder="请输入商品规格"/>
              </a-form-item>
            </a-col>
            <a-col class="gutter-row" :span="6">
              <a-form-item
                label="商品品牌"
                name="brand"
              >
                  <product-brand-selector
                    v-model:value="form.brand"
                    :request-params="{ available: true }"
                     placeholder="请选择商品品牌"
                  />
              </a-form-item>
            </a-col>
            <a-col class="gutter-row" :span="6">
              <a-form-item
                label="商品部门"
                name="department"
                :rules="[{ required: true, message: '请选择商品部门!' }]"
              >
                  <product-depatment
                    v-model:value="form.department"
                    :only-final="false"
                    placeholder="请选择商品部门"
                  />
              </a-form-item>
            </a-col>
            <a-col class="gutter-row" :span="6">
              <a-form-item
                label="商品标签"
                name="productTag"
              >
              <product-property-selector
                    v-model:value="form.productTag"
                    :request-params="{ available: true }"
                    placeholder="请选择商品标签"
                  />
              </a-form-item>
            </a-col>
            <a-col class="gutter-row" :span="6">
              <a-form-item
                label="经营范围"
                name="scope"
              >
                <product-scope
                    v-model:value="form.scope"
                    :request-params="{ available: true }"
                    placeholder="请选择经营范围"
                  />
              </a-form-item>
            </a-col>
            <a-col class="gutter-row" :span="6">
              <a-form-item
                label="商品产地"
                name="place"
              >
                <a-input v-model:value="form.place" placeholder="请输入商品产地"/>
              </a-form-item>
            </a-col>

            <a-col class="gutter-row" :span="6">
              <a-form-item
                label="税收编码"
                name="revenue"
              >
                <product-range-selector
                    v-model:value="form.revenue"
                    :request-params="{ available: true }"
                    placeholder="请输入税收编码"
                  />
              </a-form-item>
            </a-col>

            <a-col class="gutter-row" :span="6">
              <a-form-item
                label="有效天数"
                name="validDate"
              >
                <a-input v-model:value="form.validDate" placeholder="请输入有效天数"/>
              </a-form-item>
            </a-col>

            <a-col class="gutter-row" :span="6">
              <a-form-item
                label="商品类型"
                name="productType"
                :rules="[{ required: true, message: '请选择商品类型!' }]"
              >
                <product-type
                    v-model:value="form.productType"
                    :request-params="{ available: true }"
                     placeholder="请选择商品类型"
                  />
              </a-form-item>
            </a-col>

            <a-col class="gutter-row" :span="6">
              <a-form-item
                label="进项税率%"
                name="intoRate"
              >
                <a-select v-model:value="form.intoRate" placeholder="请选择进项税率">
                  <a-select-option value="shanghai">1</a-select-option>
                  <a-select-option value="beijing">2</a-select-option>
                </a-select>
              </a-form-item>
            </a-col>
            <a-col class="gutter-row" :span="6">
              <a-form-item
                label="销项税率%"
                name="outRate"
              >
                <a-select v-model:value="form.outRate" placeholder="请选择销项税率">
                  <a-select-option value="shanghai">1</a-select-option>
                  <a-select-option value="beijing">2</a-select-option>
                </a-select>
              </a-form-item>
            </a-col>
            <a-col class="gutter-row" :span="6">
              <a-form-item
                label="是否称重"
                name="weight"
              >
                <a-switch v-model:checked="form.weight" />
              </a-form-item>
            </a-col>
            <a-col class="gutter-row" :span="6">
              <a-form-item
                label="成本核算方式"
                name="cost"
                :rules="[{ required: true, message: '请选择成本核算方式!' }]"
              >
                <a-select v-model:value="form.cost" placeholder="请选择成本核算方式">
                  <a-select-option value="shanghai">加权平均法</a-select-option>
                </a-select>
              </a-form-item>
            </a-col>
            <a-col class="gutter-row" :span="6">
              <a-form-item
                label="经营方式"
                name="manage"
                :rules="[{ required: true, message: '请选择成本经营方式!' }]"
              >
                <a-select v-model:value="form.manage" placeholder="请选择经营方式">
                  <a-select-option value="shanghai">购销</a-select-option>
                </a-select>
              </a-form-item>
            </a-col>
            <a-col class="gutter-row" :span="6">
              <a-form-item
                label="联营扣率%"
                name="deduct"
              >
                <a-input v-model:value="form.deduct" placeholder="请输入联营扣率"/>
              </a-form-item>
            </a-col>
            <a-col class="gutter-row" :span="6">
              <a-form-item
                label="供应商"
                name="supplier"
              >
                <product-range-selector
                    v-model:value="form.supplier"
                    :request-params="{ available: true }"
                     placeholder="请选择供应商"
                  />
              </a-form-item>
            </a-col>
            <a-col class="gutter-row" :span="6">
              <a-form-item
                label="约定价"
                name="appoint"
              >
                <a-input v-model:value="form.appoint" placeholder="请输入约定价"/>
              </a-form-item>
            </a-col>


          </a-row>
        </a-form>
      </div>

      <div class=" flex items-center w-full mb-2">
        <span class=" w-1 h-4 bg-[#0960bd] mr-2"></span>
        <span>基础属性</span>
      </div>

      <div class=" ml-8">
        <a-form
          :model="formUnit"
          ref="formUnitRef"
          name="basic"
          :label-col="{ span: 6 }"
          :wrapper-col="{ span: 16 }"
          autocomplete="off"
          
        >
          <a-row :gutter="16">
            <a-col class="gutter-row" :span="8">
              <a-form-item
                label="基本单位分组"
                name="unitGroup"
                :rules="[{ required: true, message: '请选择基本单位分组!' }]"
              >
                <product-unit-group
                  v-model:value="formUnit.unitGroup"
                  :only-final="false"
                  placeholder="请选择基本单位分组"
                  @update:value="selectCategory"
                />
              </a-form-item>
            </a-col>
            <a-col class="gutter-row" :span="6">
              <a-form-item
                label="基本单位"
                name="unit"
                :rules="[{ required: true, message: '请选择基本单位!' }]"
              >
                <product-unit
                  v-model:value="formUnit.unit"
                  :only-final="false"
                  placeholder="请选择基本单位"
                  @update:value="selectCategory"
                />
              </a-form-item>
            </a-col>
          </a-row>
        </a-form>

        <a-form
          :model="formData"
          ref="formUnitBaseRef"
          name="basic"
          layout="inline"
          autocomplete="off"
          :label-col="{ span: 8 }"
          class="unit"
          
        >
          <a-row gutter="16">
            <a-col :span="24">
              <div class="form-row">
                <a-form-item label="采购单位" required class=" w-[20%]" :name="['purchase', 'unit']" :rules="[{ required: true, message: '请选择采购单位!' }]">
                  <a-select v-model:value="formData.purchase.unit" placeholder="请选择采购单位">
                    <a-select-option value="瓶">瓶</a-select-option>
                    <a-select-option value="箱">箱</a-select-option>
                  </a-select>
                </a-form-item>
                <span>=</span>
                <a-form-item 
                :name="['purchase', 'rate']"  
                :rules="[{ required: true, message: '请输入基本单位!' }]" class=" w-[20%]">
                  <a-input v-model:value="formData.purchase.rate" placeholder="1.00" class=" h-8"  suffix="基本单位" />
                </a-form-item>
                
              </div>
            </a-col>

            <a-col :span="24">
              <div class="form-row">
                <a-form-item label="配送单位" required class=" w-[20%]" :name="['delivery', 'unit']">
                  <a-select v-model:value="formData.delivery.unit"   placeholder="请选择配送单位" :rules="[{ required: true, message: '请选择配送单位!' }]">
                    <a-select-option value="瓶">瓶</a-select-option>
                    <a-select-option value="箱">箱</a-select-option>
                  </a-select>
                </a-form-item>
                <span>=</span>
                <a-form-item 
                  :name="['delivery', 'rate']"
                  :rules="[{ required: true, message: '请输入基本单位!' }]" class=" w-[20%]">
                  <a-input v-model:value="formData.delivery.rate" :rules="[{ required: true, message: '请输入基本单位!' }]" class=" h-8" placeholder="1.00"   suffix="基本单位" />
                </a-form-item>
                
              </div>
            </a-col>

            <a-col :span="24">
              <div class="form-row">
                <a-form-item label="库存单位" required class=" w-[20%]" :name="['inventory', 'unit']">
                  <a-select v-model:value="formData.inventory.unit" placeholder="请选择库存单位"  :rules="[{ required: true, message: '请选择库存单位!' }]">
                    <a-select-option value="瓶">瓶</a-select-option>
                    <a-select-option value="箱">箱</a-select-option>
                  </a-select>
                </a-form-item>
                <span>=</span>
                <a-form-item 
                  :name="['inventory', 'rate']"
                  :rules="[{ required: true, message: '请输入基本单位!' }]" class=" w-[20%]">
                  <a-input v-model:value="formData.inventory.rate" :rules="[{ required: true, message: '请输入基本单位!' }]" class=" h-8" placeholder="1.00"  suffix="基本单位" />
                </a-form-item>
                
              </div>
            </a-col>

            <a-col :span="24">
              <div class="form-row">
                <a-form-item label="批发单位" required class=" w-[20%]"  :name="['wholsale', 'unit']">
                  <a-select v-model:value="formData.wholsale.unit" placeholder="请选择批发单位"  :rules="[{ required: true, message: '请选择批发单位!' }]">
                    <a-select-option value="瓶">瓶</a-select-option>
                    <a-select-option value="箱">箱</a-select-option>
                  </a-select>
                </a-form-item>
                <span>=</span>
                <a-form-item 
                  :name="['wholsale', 'rate']"
                  :rules="[{ required: true, message: '请输入基本单位!' }]" class=" w-[20%]">
                  <a-input v-model:value="formData.wholsale.rate" :rules="[{ required: true, message: '请输入基本单位!' }]"  class=" h-8" placeholder="1.00"  suffix="基本单位" />
                </a-form-item>
              </div>
            </a-col>

            <a-col :span="24">
              <div class="form-row">
                <a-form-item label="辅助单位" class=" w-[20%]" :name="['assist', 'unit']">
                  <a-select v-model:value="formData.assist.unit" placeholder="请选择辅助单位">
                    <a-select-option value="请选择辅助单位">请选择辅助单位</a-select-option>
                    <a-select-option value="瓶">瓶</a-select-option>
                    <a-select-option value="箱">箱</a-select-option>
                  </a-select>
                </a-form-item>
                <span>=</span>
                <a-form-item 
                  :name="['assist', 'rate']" class=" w-[20%]">
                  <a-input v-model:value="formData.assist.rate" :rules="[{ required: true, message: '请输入基本单位!' }]"  class=" h-8" placeholder="1.00"  suffix="基本单位" />
                </a-form-item>
              </div>
            </a-col>
          </a-row>
        </a-form>
      </div>
    </div>
    <div class=" fixed w-full right-0 bottom-0 h-16 bg-white flex items-center justify-center">
      <a-button class=" mr-4">取消</a-button>
      <a-button class=" mr-4">保存模板</a-button>
      <a-button type="primary" class=" mr-4">保存</a-button>
      <a-button type="primary" class=" mr-4" @click="save">保存并新增</a-button>
      <a-button type="primary" class=" mr-4">保存并返回</a-button>
    </div>
  </div>
</template>
<script setup>
import {  reactive, ref, toRefs } from "vue";
import { useAppStore } from '/@/store/modules/app';
import { message } from "ant-design-vue";
import { useRouter } from 'vue-router';
const router = useRouter();
  const appStore = useAppStore();
const formRef = ref()
const formUnitRef = ref()
const formUnitBaseRef = ref()
  const data = reactive({
    form: {},
    formUnit: {
      unitGroup: 1,
    },
    formData: {
      purchase: {
        unit: '',
        rate: '',
      },
      delivery: {
        unit: '',
        rate: '',
      },
      inventory: {
        unit: '',
        rate: '',
      },
      wholsale: {
        unit: '',
        rate: '',
      },
      assist: {
        unit: '',
        rate: '',
      },
    }
  });
  const { form, formUnit, formData } = toRefs(data);


  const save = async () => {
    await formRef.value.validateFields();
    await formUnitRef.value.validateFields();
    await formUnitBaseRef.value.validateFields();
    const queryData = {
        key: appStore.queryData.length + 1,
        productCode: '3100009',
        productWord: '6902083897765',
        productShortCode: 'WHHYYKX',
        productName: '娃哈哈营养快线',
        productType: '碳酸饮料',
        productCategory: '标准商品',
        out: 1,
        specification: '双',
        unit: '盒'
    }
    appStore.setQueryData(queryData)
    message.success('保存并新建成功')
    router.push('/product/info')
  }
  // const autoGet = async () => {
  //   form.value = {
  //       "productCategory": "1831907005967765504",
  //       "productWord": "6902083897765",
  //       "productBarCode": "3100009",
  //       "productName": "娃哈哈营养快线",
  //       "productShortCode": "WHHYYKX",
  //       "department": '1',
  //       "productType": '标准商品',
  //       "cost": "shanghai",
  //       "manage": "shanghai",
  //       "scope": 1
  //   }
  //   formUnit.value = {
  //     "unitGroup": "1001",
  //     "unit": "1831927425206980608"
  //   }
  //   formData.value = {
  //       "purchase": {
  //           "unit": "瓶",
  //           "rate": "1.00"
  //       },
  //       "delivery": {
  //           "unit": "瓶",
  //           "rate": "1.00"
  //       },
  //       "inventory": {
  //           "unit": "瓶",
  //           "rate": "1.00"
  //       },
  //       "wholsale": {
  //           "unit": "瓶",
  //           "rate": "1.00"
  //       },
  //       "assist": {
  //           "unit": "",
  //           "rate": ""
  //       }
  //   }
  // }

  const selectCategory = (val) => {
    console.log(val)
  }
  
</script>
<style lang="less" scoped>
.simple-app-container{
  .ant-form-item{
    margin-bottom: 16px;
  }
  .form-row {
    display: flex;
    align-items: center;
    margin: 10px 0;
  }

  .form-row span {
    margin: 0 10px;
    line-height: 32px;
  }
  .unit{
    .ant-form-item{
      margin-bottom: 0;
    }
  }
}
</style>
