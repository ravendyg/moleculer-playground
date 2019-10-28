// @ts-check
// the simpler the better
const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, '..', 'data');
const dataFile = path.join(dataDir, 'data.json');

if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir);
}
let data = [];
try {
  data = JSON.parse(fs.readFileSync(dataFile, { encoding: 'utf8' }));
} catch {}

module.exports = {
  getContacts(start, size) {
    const end = start + size;
    const res = data.slice(start, end);

    return {
      data: res,
      hasMore: end < data.length,
    };
  },
  createContact(name, email) {
    data.push({
      id: data.length + 1,
      name,
      email,
    });
    fs.writeFileSync(dataFile, JSON.stringify(data));
    return data.length - 1;
  },
};
