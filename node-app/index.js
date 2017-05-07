'use strict'

const datastore = require('@google-cloud/datastore')({
  projectId: process.env.DATASTORE_PROJECT_ID
});

var entity = {
  key: datastore.key(["Task", "sampleTask"]),
  data: {
    type: "Personal",
    done: false,
    priority: 4,
    description: "Learn Cloud Datastore"
  }
}

datastore.save(entity)
  .then(() => { console.log("Entity stored successfully! - " + JSON.stringify(entity)); })
  .catch((err) => { console.error("Entity store failed! " + JSON.stringify(err)); })
  .then(() => {
    const query = datastore.createQuery("Task");
    query.filter("done", "=", false);
    return datastore.runQuery(query);
  })
  .then((entities) => { console.info("Query succeeded! " + JSON.stringify(entities)); })
  .catch((err) => { console.info("Query succeeded! " + JSON.stringify(entities)); });
