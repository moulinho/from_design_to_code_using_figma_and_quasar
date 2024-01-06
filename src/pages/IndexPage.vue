<template>
  <q-page padding class="q-mx-xl">
    <div class="row justify-center">
      <div class="col-9">
        <div class="row justify-between">
          <div
            :class="
              $q.screen.gt.xs
                ? 'col-md-8  column justify-center q-gutter-y-md'
                : ' text-center q-gutter-y-md'
            "
          >
            <div
              :class="
                $q.screen.gt.xs
                  ? 'text-h3 text-weight-bold'
                  : 'text-h5 text-weight-bold'
              "
            >
              Gérez facilement toutes vos finances personnelles.
            </div>
            <div class="text-body1 text-grey">
              Ventura vous donne à la fois les bases et la flexibilité
              nécessaires pour développer vos capacités numériques et offrir une
              expérience client.
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
          <div v-if="$q.screen.gt.xs" class="col">
            <q-img
              src="~assets/unsplash_WVaR2DSNVQk.png"
              spinner-color="primary"
              spinner-size="82px"
              width="22vw"
              height="50vh"
            >
              <q-img
                src="~assets/Graph 1.png"
                spinner-color="primary"
                spinner-size="82px"
                width="11vw"
                class="relative-position shadow-10"
                style="bottom: -0.2rem; left: 2rem"
              />
            </q-img>
          </div>
        </div>

        <div class="row justify-between q-my-xl">
          <q-img
            src="~assets/Brand1.png"
            width="7vw"
            fit="contain"
            spinner-color="primary"
            spinner-size="82px"
            alt="partenar"
          />
          <q-img
            src="~assets/Brand2.png"
            width="7vw"
            fit="contain"
            spinner-color="primary"
            spinner-size="82px"
            alt="partenar"
          />
          <q-img
            src="~assets/Brand3.png"
            width="7vw"
            fit="contain"
            spinner-color="primary"
            spinner-size="82px"
            alt="partenar"
          />
          <q-img
            src="~assets/Brand4.png"
            width="7vw"
            fit="contain"
            spinner-color="primary"
            spinner-size="82px"
            alt="partenar"
          />
        </div>

        <div class="fonction-section text-center">
          <div class="title text-h6 text-primary">FONCTIONS</div>
          <div class="title text-h4 text-weight-bold q-my-lg">
            Nos dossiers spéciaux
          </div>

          <div class="row justify-evenly q-gutter-lg q-my-lg">
            <q-card
              flat
              bordered
              class="my-card col-md-3 text-center q-py-md"
              v-for="n in 5"
              :key="n"
            >
              <q-img
                src="~assets/Property1.png"
                spinner-color="primary"
                spinner-size="82px"
                width="2rem"
              />
              <q-card-section>
                <div class="text-h6">Our Changing Planet</div>
              </q-card-section>
              <q-card-section class="text-grey">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </q-card-section>
            </q-card>
          </div>
        </div>
        <div class="row justify-between q-my-xl">
          <div class="col-md-6 column justify-center q-gutter-md text-body1">
            <div class="text-primary q-mt-none text-h6">CHOISISSEZ NOUS</div>
            <div class="text-h4">Suivez vos paiements sans délai</div>
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
          <div class="col-md-5 col-sm-5 col-xs-12">
            <q-img
              src="~assets/Pic2.png"
              :ratio="1"
              spinner-color="primary"
              spinner-size="82px"
              fit="contain"
            />
          </div>
        </div>
        <div
          class="bg-primary text-h4 text-white text-center text-weight-regular q-pa-lg q-gutter-lg"
        >
          <span class="">
            Découvrez une nouvelle <br />façon de gérer vos finances
          </span>
          <div class="no-margin">
            <q-btn
              color="white"
              size="md"
              outline
              icon="play_circle_filled"
              label="Regarder"
              no-caps
            />
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script setup lang="ts"></script>
