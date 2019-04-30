<template>
  <section>
    <div>
      About
    </div>
  </section>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'About',
  components: {},
  data() {
    return {
      hideNavScroll: false,
      cachedQuery: {},
      renderReady: false,
      colorx: 'success',
    };
  },
  computed: {
    ...mapGetters([]),
  },
  watch: {},
  async beforeMount() {
    // if (this.$route.name === "DashboardRootPage")
    //   this.$router.replace({ name: "Dashboard.Articles" });
    // await this.fetchUserPreferences();
    this.renderReady = true;
  },
  methods: {
    ...mapActions([]),
  },
};
</script>

<style lang="scss">
</style>
