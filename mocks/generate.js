const faker = require('faker');

let database = { posts: []};

for(let i = 1; i<= 10; i++) {
  database.posts.push({
    id: i,
    title: faker.name.title(),
    content: faker.lorem.sentences(),
    loveIts: faker.datatype.number(),
    created_at: faker.date.recent()
  })
}

console.log(JSON.stringify(database))
