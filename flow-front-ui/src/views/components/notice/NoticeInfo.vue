<template>
  <Card title="通知公告" v-bind="$attrs" bodyStyle="padding-top:0;">
    <template #extra>
      <a-button type="link" size="small">更多</a-button>
    </template>
    <List item-layout="horizontal" :data-source="items">
      <template #renderItem="{ item }">
        <ListItem class="custom-list-item">
          <template #actions>
            <span class="">{{ item.date }}</span>
          </template>
          <div class="content">
            <a href="/" :title="item.title">
              {{ item.title }}
            </a>
          </div>
        </ListItem>
      </template>
    </List>
  </Card>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';

  import { Card, List } from 'ant-design-vue';
  import { Icon } from '/@/components/Icon';

  export default defineComponent({
    props:{
      dataSource: Array
    },
    components: { Card, List, ListItem: List.Item, ListItemMeta: List.Item.Meta, Icon },
    setup(props) {
      return { items: props.dataSource };
    },
  });
</script>
<style lang="less">
  .custom-list-item{
    .content{
      overflow: hidden;
      -ms-text-overflow: ellipsis;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .ant-list-item-action{
      margin-left:4px;
    }
    .ant-list-item-meta-title{
      a{
        overflow:hidden; /*溢出的部分隐藏*/
        white-space: nowrap; /*文本不换行*/
        text-overflow:ellipsis;
        width: 100%;
      }
    }
  }
</style>
