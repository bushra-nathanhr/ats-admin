<template>
    <div class="topSmallCards flex_row justify-space-between">
      <v-card v-for="item in data" :key="item" color="card_bg" class="flat ma-0 pa-0 mx-2 px-3 py-2" elevation="0" style="max-width: 200px !important; height: 77px !important;
    max-height: 100% !important; border-radius: 10px !important; border: 0px solid #fff!important;" :style=" darkMood == true ? '' : 'border: 0.5px solid #E2E7F1 !important;'">
        <div class="" style="max-width: 200px !important; ">
          <label class="pl-2">{{ item.label }}</label>
          <v-select :items="item.items" :placeholder="item.placeholder" solo flat hide-details dense v-model="date">

          </v-select>
        </div>
      </v-card>
    </div>
</template>


<script>
import CustomInputContainer from '@/components/utils/CustomInputContainer.vue'

export default {
    components: { CustomInputContainer, },
    props: { data: Array },
    data() {
        return {
        }
    }

}
</script>

<style>

</style>