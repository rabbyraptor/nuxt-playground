<template>
  <section class="container">
    <div>
      <h2>Write to Firestore:</h2>
      <div class="wr-button">
        <button @click="writeToFirestore" :disabled="writeSuccessful">
          <span>Write now</span>
        </button>
        <br />
        <span v-if="writeSuccessful" class="msg-success">Write was a success</span>
      </div>
      <h2>Read from Firestore:</h2>
      <div class="wr-button">
        <button @click="readFromFirestore">
          <span>Read now</span>
        </button>
        <br />
        <span v-if="readSuccessful" class="msg-success">Read was a success</span>
      </div>
      <h1>{{ fetchedData }}</h1>
      <div class="data-form">
        First name:
        <br />
        <input v-model="fetchedData.first" class="input-field" />
        <br />Last name:
        <br />
        <input v-model="fetchedData.last" class="input-field" />
        <br />Born:
        <br />
        <input v-model="fetchedData.born" class="input-field" />
        <br />
      </div>
    </div>
  </section>
</template>
<script>
import { fireDb } from "~/plugins/firebase.js";
export default {
  data() {
    return {
      writeSuccessful: false,
      readSuccessful: false,
      fetchedData: {}
    };
  },
  mounted() {
    if(1 == 0){
        fireDb
        .collection("users")
        .get()
        .then(snapshot => {
            snapshot.forEach(doc => {
            if (doc && doc.exists) {
                this.fetchedData = doc.data();
                console.log(doc.id, "=>", doc.data());
                this.readSuccessful = true;
            }
            });
        })
        .catch(err => {
            console.log("Error getting documents", err);
        });
    }
  },
  methods: {
    // Writing to the database
    async writeToFirestore() {
      let docRef = fireDb.doc("users/alovelace");
      let theData = this.fetchedData;
      try {
        await docRef.set(theData);
      } catch (e) {
        console.error(e);
      }
      this.fetchedData = theData;
      this.writeSuccessful = true;
    },
    // Reading from the database
    async readFromFirestore() {
      fireDb
        .collection("users")
        .get()
        .then(snapshot => {
          snapshot.forEach(doc => {
            if (doc && doc.exists) {
              this.fetchedData = doc.data();
              console.log(doc.id, "=>", doc.data());
              this.readSuccessful = true;
            }
          });
        })
        .catch(err => {
          console.log("Error getting documents", err);
        });
    }
  }
};
</script>
<style>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.wr-button {
  margin-bottom: 2em;
}
.data-form {
  margin-top: 2em;
}
.input-field {
  margin-bottom: 1.5em;
}
.msg-success {
  color: green;
}
</style>