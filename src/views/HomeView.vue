<template>
  <!-- 弹窗提示 -->
  <div>
    <div class="box">🔔 {{ billboard.content }}</div>
    <div class="columns">
      <div class="column is-three-quarters">
        <TopicList></TopicList>
      </div>
      <div class="column">
        <CardBar></CardBar>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { getBillboard } from "@/api/billboard";
import CardBar from "./card/CardBar.vue";
import PostList from "./post/index.vue";

export default {
  name: "HomeView",
  components: { CardBar, TopicList: PostList },
  data() {
    return {
      billboard: {
        content: "",
      },
    };
  },
  created() {
    this.fetchBillboard();
  },
  methods: {
    async fetchBillboard() {
      getBillboard().then((value) => {
        const { data } = value;
        this.billboard = data;
      });
    },
  },
};
</script>
