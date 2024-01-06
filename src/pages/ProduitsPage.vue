<template>
  <q-page padding class="q-mx-xl">
    <div class="row justify-center">
      <div class="col-9">
        <div class="text-center q-gutter-y-md">
          <div class="text-h3 text-weight-bold">
            Facile et gratuit. <br />
            Et construit pour tout le monde.
          </div>
          <div class="text-body1 text-grey">
            Lorem ipsum dolor sit amet consectetur. Adipiscing vulputate ut
            semper hendrerit ultricies in molestie id risus. Sem sed
            pellentesque elit.
          </div>

          <div class="row q-gutter-md justify-center">
            <q-btn
              color="black"
              size="md"
              outline
              icon="play_circle_filled"
              label="Regarder"
              no-caps
            />
            <q-btn color="primary" size="md" label="Télécharger" no-caps />
          </div>
        </div>
        <div class="row justify-between q-my-xl">
          <div class="col-md-5 col-sm-12 col-xs-12">
            <q-img
              src="~assets/Pic21.png"
              :ratio="1"
              spinner-color="primary"
              spinner-size="82px"
              width="25vw"
              height="40vh"
            />
          </div>
          <div
            class="col-md-6 col-sm-12 col-xs-12 column justify-center q-gutter-md text-body1"
          >
            <div class="text-primary q-mt-none text-h6">CHOISISSEZ NOUS</div>
            <div class="text-h4">
              Le titre de l'espace réservé est placé ici
            </div>
            <div class="text-grey">
              Fauteuil de direction ergonomique en cuir noir collé et rembourré
              en PVC
            </div>
            <q-separator />
            <div class="row q-gutter-x-xs" v-for="t in 3" :key="t">
              <q-img
                src="~assets/Group.svg"
                :ratio="1"
                spinner-color="primary"
                spinner-size="82px"
                width="20px"
                fit="contain"
              />
              <span> Obtenir une caractéristique aujourd'hui </span>
            </div>
          </div>
        </div>

        <div class="row justify-between q-my-xl q-py-xl">
          <div
            class="col-md-6 col-sm-12 col-xs-12 column justify-center q-gutter-md text-body1"
          >
            <div class="text-primary q-mt-none text-h6">CHOISISSEZ NOUS</div>
            <div class="text-h4">
              Le titre de l'espace réservé est placé ici
            </div>
            <div cclass="text-grey">
              Fauteuil de direction ergonomique en cuir noir collé et rembourré
              en PVC
            </div>
            <q-separator />
            <div class="row q-gutter-x-xs" v-for="t in 3" :key="t">
              <q-img
                src="~assets/Group.svg"
                :ratio="1"
                spinner-color="primary"
                spinner-size="82px"
                width="20px"
                fit="contain"
              />
              <span> Obtenir une caractéristique aujourd'hui </span>
            </div>
          </div>
          <div class="col-md-5 col-sm-12 col-xs-12">
            <q-img
              src="~assets/Pic22.png"
              :ratio="1"
              spinner-color="primary"
              spinner-size="82px"
              width="25vw"
              height="40vh"
            />
          </div>
        </div>
        <div class="row justify-between q-my-xl q-py-xl">
          <div
            class="col-md-5 col-sm-12 col-xs-12 q-gutter-md text-body1 q-my-md"
          >
            <div class="text-primary q-mt-none text-h5">FAQ’S</div>
            <div class="text-h5">Questions fréquemment posées</div>
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

<script setup lang="ts"></script>

<style scoped></style>
