<template>
  <q-layout view="hHh lpR fff">
    <q-header elevated class="bg-white text-black q-pa-md">
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
          v-if="$q.screen.lt.sm"
        />

        <q-toolbar-title
          v-if="$q.screen.gt.xs"
          class="col row items-center text-h6"
        >
          <q-btn flat to="/">
            <q-img
              src="~assets/Logo1.png"
              :ratio="1"
              spinner-color="primary"
              spinner-size="82px"
              width="138px"
              height="32px"
            />
          </q-btn>
          <div class="col row q-mx-xl">
            <q-tabs v-model="tab" no-caps active-color="primary">
              <q-route-tab
                name="Produits"
                label="Produits"
                to="/produits"
                exact
              />
              <q-route-tab name="Apps" label="Apps" to="/apps" exact />
              <q-route-tab name="Blog" label="Blog" to="/blogs" exact />
              <q-route-tab name="Prix" label="Prix" to="/prix" exact />
            </q-tabs>
          </div>
        </q-toolbar-title>

        <div
          v-if="$q.screen.gt.xs"
          class="col-md-3 col-sm-4 col-xs-12 row q-gutter-lg justify-end"
        >
          <q-btn
            color="black"
            size="md"
            outline
            icon="play_circle_filled"
            label="Regarder"
            no-caps
            class="col-md-5 col-sm-7 col-xs-12"
          />

          <q-btn
            color="primary"
            size="md"
            label="Télécharger"
            no-caps
            class="col-md-5 col-sm-7 col-xs-12"
          />
        </div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      class="text-body1 q-pa-md"
    >
      <q-item class="items-center justify-between">
        <q-item-section top avatar>
          <q-img
            src="~assets/Logo1.png"
            :ratio="1"
            spinner-color="primary"
            spinner-size="82px"
            width="138px"
            height="32px"
          />
        </q-item-section>
        <q-item-section side top>
          <q-icon name="close" @click="toggleLeftDrawer" />
        </q-item-section>
      </q-item>

      <q-item clickable v-ripple class="justify-center" to="/produits">
        <q-item-section>
          <q-item-label>Produits</q-item-label>
        </q-item-section>
      </q-item>
      <q-item clickable v-ripple class="justify-center" to="/apps">
        <q-item-section>
          <q-item-label>Apps</q-item-label>
        </q-item-section>
      </q-item>

      <q-item clickable v-ripple class="justify-center" to="/blogs">
        <q-item-section>
          <q-item-label>Blog</q-item-label>
        </q-item-section>
      </q-item>

      <q-item clickable v-ripple class="justify-center" to="/prix">
        <q-item-section>
          <q-item-label>Prix</q-item-label>
        </q-item-section>
      </q-item>
    </q-drawer>

    <q-footer class="bg-grey-1 text-black q-py-md">
      <div class="row justify-center">
        <div class="col-9 row justify-between q-gutter-lg">
          <q-list class="col-md-2 col-sm-2 col-xs-12">
            <q-item clickable v-ripple>
              <q-item-section>
                <q-img
                  src="~assets/Logo1.png"
                  :ratio="1"
                  spinner-color="primary"
                  spinner-size="82px"
                  width="138px"
                  height="32px"
              /></q-item-section>
            </q-item>

            <q-item clickable v-ripple>
              <q-item-section>
                <q-item-label>
                  Lorem ipsum dolor sit amet consectetur. Leo urna eu
                </q-item-label>
              </q-item-section>
            </q-item>
            <q-item>
              <q-item-section top avatar>
                <q-avatar color="primary" text-color="white" icon="facebook" />
              </q-item-section>
              <q-item-section top avatar>
                <q-avatar color="primary" text-color="white" icon="linkedin" />
              </q-item-section>
              <q-item-section top avatar>
                <q-avatar color="primary" text-color="white" icon="X" />
              </q-item-section>
            </q-item>
          </q-list>

          <q-list class="col-md-2 col-sm-2 col-xs-12">
            <q-item>
              <q-item-section class="text-weight-bold"
                >Entreprise</q-item-section
              >
            </q-item>
            <q-item>
              <q-item-section class="">Produits</q-item-section>
            </q-item>
            <q-item>
              <q-item-section class="">Apps</q-item-section>
            </q-item>
            <q-item>
              <q-item-section class="">Blogs</q-item-section>
            </q-item>
          </q-list>

          <q-list>
            <q-item>
              <q-item-section class="text-weight-bold"
                >Ressources</q-item-section
              >
            </q-item>
            <q-item>
              <q-item-section class="">Template</q-item-section>
            </q-item>
            <q-item>
              <q-item-section class="">Invoice</q-item-section>
            </q-item>
            <q-item>
              <q-item-section class="">Fonctionnalité</q-item-section>
            </q-item>
            <q-item>
              <q-item-section class="">Fonctionnalité</q-item-section>
            </q-item>
          </q-list>

          <q-list class="col-md-3 col-sm-3 col-xs-12">
            <q-item>
              <q-item-section class="text-weight-bold">
                Rejoignez notre NewsLetter
              </q-item-section>
            </q-item>
            <q-item>
              <q-item-section class="">
                <q-input
                  v-model="email"
                  outlined
                  type="text"
                  placeholder="Votre adresse e-mail"
                />
              </q-item-section>
            </q-item>
            <q-item>
              <q-item-section class="">
                *Vous recevrez des mises à jour hebdomadaires pour une meilleure
                gestion de vos finances.
              </q-item-section>
            </q-item>
          </q-list>
        </div>
      </div>
    </q-footer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import EssentialLink, {
  EssentialLinkProps,
} from 'components/EssentialLink.vue';
let tab = ref('Produits');
let email = ref();
const essentialLinks: EssentialLinkProps[] = [
  {
    title: 'Docs',
    caption: 'quasar.dev',
    icon: 'school',
    link: 'https://quasar.dev',
  },
  {
    title: 'Github',
    caption: 'github.com/quasarframework',
    icon: 'code',
    link: 'https://github.com/quasarframework',
  },
  {
    title: 'Discord Chat Channel',
    caption: 'chat.quasar.dev',
    icon: 'chat',
    link: 'https://chat.quasar.dev',
  },
  {
    title: 'Forum',
    caption: 'forum.quasar.dev',
    icon: 'record_voice_over',
    link: 'https://forum.quasar.dev',
  },
  {
    title: 'Twitter',
    caption: '@quasarframework',
    icon: 'rss_feed',
    link: 'https://twitter.quasar.dev',
  },
  {
    title: 'Facebook',
    caption: '@QuasarFramework',
    icon: 'public',
    link: 'https://facebook.quasar.dev',
  },
  {
    title: 'Quasar Awesome',
    caption: 'Community Quasar projects',
    icon: 'favorite',
    link: 'https://awesome.quasar.dev',
  },
];

const leftDrawerOpen = ref(false);

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value;
}
</script>
