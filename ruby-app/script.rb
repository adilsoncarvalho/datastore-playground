require 'google/cloud/datastore'
datastore = Google::Cloud::Datastore.new

task = datastore.entity "Task", "sampleTask" do |t|
  t["type"] = "Personal"
  t["done"] = false
  t["priority"] = 4
  t["description"] = "Learn Cloud Datastore"
end

datastore.save task

query = datastore.query("Task").where("done", "=", false)

tasks = datastore.run query

raise "oops" if tasks.count == 0

puts "Success"
