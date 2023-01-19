<template>
    <div class="flex_row">
        <v-card color="card_bg" class="small_card ma-0 mr-5" style="max-height: 60px !important" v-for="item in data" :key="item.name" :style=" darkMood == true ? '' : 'border: 0.5px solid #E2E7F1 !important;'">
            <div class="flex_row mx-auto">
                <div class="icon__container lighten-3 mb-2" :class="item.color">
                    <v-icon color="primary" small>fa-{{ item.icon }}</v-icon>
                </div>
                <div class="flex_column justify-center align-start ml-3">
                    <h6 class="primary--text">{{ item.name }}</h6>
                    <p class="text--text">{{ item.amount }}</p>
                </div> 
            </div>
        </v-card>
    </div>
</template>

<script>
export default {
    props: { data: Array, darkMood: Boolean },
    components: {  }
}
</script>
