<template>
  <q-page padding class="q-mx-xl">
    <div class="row justify-center">
      <div class="col-9">
        <div class="row justify-between">
          <div class="column">
            <div class="text-h3 text-weight-bold">Blog</div>
            <q-btn-dropdown label="Tous les articles" flat no-caps>
              <q-list>
                <q-item clickable v-close-popup>
                  <q-item-section>
                    <q-item-label>Photos</q-item-label>
                  </q-item-section>
                </q-item>
              </q-list>
            </q-btn-dropdown>
          </div>
          <div class="col-md-4 col-sm-4 col-xs-12 text-body1 text-grey">
            <q-input v-model="search" outlined label="Recherche...">
              <template v-slot:append>
                <q-icon name="search" />
              </template>
            </q-input>
          </div>
        </div>
        <div
          class="row justify-between"
          v-for="(item, index) in 3"
          :key="index"
        >
          <div class="col-md-5 col-sm-5 col-xs-12">
            <q-img
              src="~assets/Pic26.svg"
              :ratio="1"
              spinner-color="primary"
              spinner-size="82px"
              fit="contain"
            />
          </div>
          <div
            class="col-md-6 col-sm-6 col-xs-12 column justify-center q-gutter-lg text-body1"
          >
            <div class="q-mt-none text-h6">THEME</div>
            <div class="text-h4">Le titre du blog va ici</div>
            <div class="text-grey">
              Fauteuil de direction ergonomique en cuir noir collé et rembourré
              en PVC
            </div>
            <div class="">00 Month 2022</div>
          </div>
        </div>
        <div class="text-center q-my-lg">
          <q-btn color="primary" outline label="En savoir plus" no-caps />
        </div>
      </div>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import { ref } from 'vue';

let search = ref('');
</script>

<style scoped></style>
