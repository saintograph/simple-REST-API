module.exports = app => {
  app.get('/', (req, res) => {
    res.send('Hello World');
  });
};

module.exports = app => {
  app.get('/account', (req, res) => {
    const mockAccount = {
      username: 'winfred',
      password: '123456',
      twitter: '@saintograph',
    };

    if (!req.query.username) {
      return res.send({ status: 'error', message: 'missing username' });
    } else if (req.query.username !== mockAccount.username) {
      return res.send({ status: 'error', message: 'wrong username' });
    } else {
      return res.send(mockAccount);
    }
  });
};

module.exports = app => {
  app.get('/random', (req, res) => {
    const randomQuote = ['hahaha', 'blalalalalala', 'hohohohoh'];
    const randomNumb = () => { return Math.floor(Math.random() * 3) + 0; };
    res.send(randomQuote[randomNumb()]);
  });
};

