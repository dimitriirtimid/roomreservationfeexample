import fs from 'fs'

fs.copyFile('src/data/db-template.json', 'src/data/db.json', (err) => {
  if (err) {
    console.error('Error copying file:', err)
  } else {
    console.log('db-template.json was copied to db.json')
  }
})
