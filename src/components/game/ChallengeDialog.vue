<template>
  <v-dialog scrim="#000000" max-width="600px">

    <v-row>
      <v-col>

        <v-card>
          <v-card-title>Create challenge</v-card-title>
          <v-divider></v-divider>
          <v-card-item>
            <v-label>Title:</v-label>
            <v-row>
              <v-col>
                <v-text-field v-model="challenge.name" density="compact"></v-text-field>
              </v-col>
            </v-row>
            <v-label><v-tag icon="$challenge" label="Challenge Rating:"></v-tag></v-label>
            <v-row>
              <v-col class="d-flex justify-space-around">
                <v-btn-toggle v-for="i in challenge.max" :key="i" v-model="challenge.rating" density="compact"
                  mandatory>
                  <v-btn :icon="`mdi-numeric-${i}-box`" variant="plain" :value="i" color="warning"></v-btn>
                </v-btn-toggle>
              </v-col>
            </v-row>
          </v-card-item>
        </v-card>


      </v-col>
      <v-col>

        <v-card>
          <v-card-title>{{ challenge.name }}</v-card-title>
          <v-card-item>
            <v-divider>
              <v-tag icon="$challenge" label="Challenge Rating"></v-tag>: {{ challenge.rating }}</v-divider>
            <v-row>
              <v-col>
                <v-item-group class="d-flex justify-space-around ma-2">
                  <v-icon v-for="i in challenge.max" :key="i" :disabled="i > challenge.rating"
                    :icon="challenge.rating < i ? 'mdi-circle-small' : '$d20'"
                    :color="i > challenge.rating ? 'grey' : 'warning'" variant="text"></v-icon>
                </v-item-group>
              </v-col>
            </v-row>
            <v-divider><v-tag icon="$d20" label="Assign Abilities"></v-tag></v-divider>
            <v-row>
              <v-col>
                <v-tag icon="$sta-attribute" label="Attribute:"></v-tag>
              </v-col>
              <v-col>
                <v-tag icon="$sta-department" label="Department:"></v-tag>
              </v-col>
            </v-row>
          </v-card-item>

        </v-card>
      </v-col>
    </v-row>
  </v-dialog>
</template>

<script setup lang="ts">
import { ref } from 'vue'


class Challenge {
  protected _id: string
  protected _title: string
  protected _rating: number
  protected _maxRating: number = 8

  constructor(title: string = 'Challenge', rating: number = 1) {
    this._title = title
    this._id = title.toLowerCase().replace(/\s/g, '-')
    this._rating = rating
  }

  get id() {
    return this._id
  }

  get name() {
    return this._title
  }

  get rating() {
    return this._rating
  }

  get max() {
    return this._maxRating
  }

  set rating(rating: number) {
    console.log(rating)
    this._rating = rating
  }

  set name(name: string) {
    this._title = name

  }
}

const challenge = ref(new Challenge())



</script>
