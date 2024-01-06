<template>
  <q-page padding class="q-mx-xl">
    <div class="row justify-center">
      <div class="col-9 q-gutter-y-xl">
        <div class="text-center q-gutter-y-lg">
          <div
            :class="
              $q.screen.gt.xs
                ? 'text-h3 text-weight-bold'
                : 'text-h5 text-weight-bold'
            "
          >
            En solo, en agence ou en équipe,<br />
            nous avons ce qu'il vous faut.
          </div>
          <div class="text-body1 text-grey">
            Lorem ipsum dolor sit amet consectetur. Adipiscing vulputate ut
          </div>
        </div>

        <div class="row justify-between q-py-lg q-gutter-lg">
          <q-card class="my-card q-pa-md flat col-md-5 col-sm-5 col-xs-12">
            <q-card-section>
              <q-chip color="" text-color=""> PERSONNEL </q-chip>
            </q-card-section>
            <q-card-section horizontal class="items-baseline">
              <div class="text-h4">6000 xof</div>
              <div class="">/Mois</div>
            </q-card-section>
            <q-card-section class="text-h6">
              Un plan parfait pour les débutants
            </q-card-section>
            <q-card-section class="text-grey">
              Un compte gratuit vous donne accès à des fonctionnalités
              exclusives de Polka et à la gestion de projets.
            </q-card-section>
            <q-card-section class="row q-gutter-x-xs" v-for="t in 3" :key="t">
              <q-img
                src="~assets/Group.svg"
                :ratio="1"
                spinner-color="primary"
                spinner-size="82px"
                width="20px"
                fit="contain"
              />
              <span> Tick value goes here </span>
            </q-card-section>
            <q-card-section
              class="row q-gutter-x-xs text-grey"
              v-for="t in 2"
              :key="t"
            >
              <q-icon name="close" />
              <span> Tick value goes here </span>
            </q-card-section>
            <q-card-section horizontal class="justify-center">
              <q-btn outline label="Démarrer" class="col-8" no-caps />
            </q-card-section>
          </q-card>

          <q-card class="my-card q-pa-md col-md-5 col-sm-5 col-xs-12">
            <q-card-section>
              <q-chip color="" text-color=""> EQUIPES </q-chip>
            </q-card-section>
            <q-card-section horizontal class="items-baseline">
              <div class="text-h4">15000 xof</div>
              <div class="">/Mois</div>
            </q-card-section>
            <q-card-section class="text-h6">
              Un plan parfait pour les équipes
            </q-card-section>
            <q-card-section class="text-grey">
              Un compte gratuit vous donne accès à des fonctionnalités
              exclusives de Polka et à la gestion de projets.
            </q-card-section>
            <q-card-section class="row q-gutter-x-xs" v-for="t in 5" :key="t">
              <q-img
                src="~assets/Group.svg"
                :ratio="1"
                spinner-color="primary"
                spinner-size="82px"
                width="20px"
                fit="contain"
              />
              <span> Tick value goes here </span>
            </q-card-section>

            <q-card-section horizontal class="justify-center">
              <q-btn color="primary" no-caps label="Démarrer" class="col-8" />
            </q-card-section>
          </q-card>
        </div>

        <div class="row justify-between q-gutter-lg">
          <div class="col-md-5 q-gutter-md text-body1">
            <div class="text-primary q-mt-none text-h6">FAQ’S</div>
            <div class="text-h5">Frequently Asked Questions</div>
          </div>
          <div class="col-md-6 column q-gutter-y-sm">
            <q-expansion-item
              class="bg-primary shadow-1 overflow-hidden"
              expand-icon-class="text-white"
              header-class="text-white"
              style="border-radius: 30px"
              label="Ajoutez ici les questions les plus fréquemment posées"
              v-for="(item, index) in 5"
              :key="index"
            >
              <q-card>
                <q-card-section>
                  Lorem ipsum dolor sit amet consectetur. Feugiat donec aliquam
                  vel phasellus eu quis aliquam in.
                </q-card-section>
              </q-card>
            </q-expansion-item>
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  setup() {
    return {};
  },
});
</script>

<style scoped></style>
