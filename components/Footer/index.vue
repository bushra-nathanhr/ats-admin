<template>
    <v-row class="footer">
      <v-col sm="12" md="12" lg="12" id="footer" style="min-height: 350px;">
        <v-card color="card_bg"  id="card">
          <v-card-text id="card-text" class="flex_row align-center justify-space-between px-5">
            <div class="flex_column align-center justify-center">
              <div class="flex_row align-center justify-space-around">
                <v-btn class="mx-2" icon><FacebookIcon /></v-btn>
                <v-btn class="mx-2" icon><InstaIcon /></v-btn>
                <v-btn class="mx-2" icon><LinkedInIcon /></v-btn>
                <v-btn class="mx-2" icon><FacebookIcon /></v-btn>
              </div>
              <p class="text--text pt-2">© Nathan Digital, all rights reserved.</p>
            </div>
            <div class="flex_column align-center justify-center">
              <NathanDigitalDarkLogo class="" />
              <p class="text--text pt-2">Accounting Software</p>
            </div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
</template>

<script>
import NathanDigitalDarkLogo from '@/assets/images/nathandigital-dark-logo.svg'
import FacebookIcon from '@/assets/images/icons/fb-icon.svg'
import LinkedInIcon from '@/assets/images/icons/linkedin-icon.svg'
import InstaIcon from '@/assets/images/icons/insta-icon.svg'

export default {
  components : { NathanDigitalDarkLogo, FacebookIcon, LinkedInIcon, InstaIcon },
    data: () => ({}),
}
</script>

<style>

</style>