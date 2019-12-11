exports.getDashboard = (req, res) => {
    res.render('account/dashboard', {
      title: 'Laundry Machines',
      active: { dashboard: true },
      machines: [
          {
              name: "Downstairs Washer",
              session: {
                  user: '5df0b098c852be6a02be7138',
                  reserved: false,
                  reservedAt: new Date(),
                  timerStartedAt: new Date()
              }
          }
      ]
    });
  };
  