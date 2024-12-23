<template>
  <v-container>
    <h1>Timelines</h1>
    <v-row>
      <v-col>
        <v-timeline direction="horizontal" line-thickness="4px" line-inset="2px" truncate-line="both" icon-color="red"
          dot-color="transparent">
          <v-timeline-item icon="mdi-sword">
            <template v-slot:icon>
              <v-avatar :image="PersonaAvatar" rounded="sm"></v-avatar>
            </template>
            <template v-slot:opposite>
              <TagList noLabel />
            </template>
            <div class="text-h6"><router-link to="/">You wake up on a Monday.

                <v-img :src="storyImage" alt="A glowing green portal" aspect-ratio="1" cover max-height="120"
                  rounded="lg"></v-img></router-link>
            </div>
          </v-timeline-item>

          <v-timeline-item>
            <template v-slot:opposite>
              Opposite content
            </template>
            <div>
              <div class="text-h6">Content title</div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore
                magna aliqua.
              </p>
            </div>
          </v-timeline-item>

          <v-timeline-item>
            <template v-slot:opposite>
              Opposite content
            </template>
            <div>
              <div class="text-h6">Content title</div>
              <p>
              </p>
            </div>
          </v-timeline-item>
        </v-timeline>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import TagList from '@/components/TagList.vue';
import storyImage from '@/assets/stories/gallery/001.png'
import PersonaAvatar from '@/assets/images/avatars/jenny-everywhere-avatar-13.png';


</script>

<style></style>
