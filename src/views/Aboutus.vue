<template>
  <div class="about">
    <h1>{{ message }}</h1>
    <ul>
      <li v-for="num in itemIndex" :key="num">{{ num }}</li>
      <li v-for="item in list" :key="item">{{ item }}</li>
      <li v-for="(item, id) in list2" :key="id">{{ item.title }}</li>
      <button @click="add">加入</button>
      <li v-for="item in list2" :key="item.id">
        <a
          :href="item.link"
          :style="{
            color: item.color
          }"
        >
          {{ item.title }}
        </a>
      </li>
      <li>list有{{ list2.length }}個</li>
      <li>list有{{ count }}個</li>
      <li v-for="item in list2" :key="item.id">
        <template v-if="item.show">
          <a
            :href="item.link"
            :style="{
              color: item.color
            }"
          >
            {{ item.title }}
          </a>
        </template>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: '我是大帥哥',
      itemIndex: 2,
      list: ['Sakura', 'is', 'fearnot'],
      list2: [
        {
          id: 1,
          title: 'Kazuha',
          color: '#ddd',
          show: false,
          link: 'https://google.com'
        },
        {
          id: 2,
          title: 'Le seerafim',
          color: '#eee',
          show: true,
          link: 'https://google.com'
        }
      ]
    }
  },
  computed: {
    count() {
      return this.list2.length
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
