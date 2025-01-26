<script setup lang="ts">
import TagFactory from '@/objects/nu/TagFactory'; // Import TagFactory

</script>

<template>
  <v-container>
    <v-row>
      <v-col>
        <h2>Hot Keys</h2>

        <NuTag :tag="TagFactory.create('toggle:tag drawer', { color: 'text', icon: 'mdi-keyboard-outline' })"
          :value="'t'" />
        <v-list>
          <v-list-item title="t" subtitle="Toggle 'Tag Drawer'">
            <template #title>
              <v-icon icon="mdi-keyboard" /> <code>t</code>
            </template>
          </v-list-item>
          <v-list-item title="f" subtitle="Open 'Focus Drawer'">
            <template #title>
              <v-icon icon="mdi-keyboard" /> <code>f</code>
            </template>
          </v-list-item>
          <v-divider />
          <v-list-item title="d" subtitle="Roll the Dice">
            <template #title>
              <v-icon icon="mdi-dice-multiple" /> <code>f</code>
            </template>
          </v-list-item>
        </v-list>
      </v-col>
    </v-row>
  </v-container>
</template>
