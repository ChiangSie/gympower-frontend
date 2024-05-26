<template>
  <div class="about">
    <h1>{{ message }}</h1>

    <ul>
      <li v-for="num in itemIndex" :key="num">{{ num }}</li>
      <li v-for="item in list" :key="item">{{ item }}</li>
      <li v-for="(item, id) in list2" :key="id">{{ item.title }}</li>
      <button @click="add">加入</button>
      <li v-for="item in list2" :key="item.id">
        <p :style="{ color: item.color }">
          {{ item.title }}
        </p>
      </li>
      <li>list有{{ list.length }}</li>
      <li>list有{{ count }}</li>
      <li v-for="item in list" :key="item.id">
        <template>
          <a v-if="item.show" :href="item.link" :style="{ color: 'item.color' }">{{
            item.title
          }}</a>
        </template>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: '我是嘎啦嘎拉',
      itemIndex: 2,
      list: ['Sakura', 'is', 'fearnot'],
      list2: [
        {
          id: 1,
          title: 'Kazuha',
          color: '#ddd'
        },
        {
          id: 2,
          title: 'Le seerafim',
          color: '#eee'
        }
      ]
    }
  },
  computed: {
    count() {
      return this.list.length
    }
  },
  methods: {
    add() {
      this.itemIndex += 1
      this.list2.push({
        id: this.itemIndex,
        title: `test${this.itemIndex}`
      })
    }
  }
}
</script>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
