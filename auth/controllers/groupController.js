exports.groupedPeople = (req, res) => {
  try {
    const people = req.body;

    if (!Array.isArray(people)) {
      return res.status(400).json({ error: 'Invalid input format. Expected an array.' });
    }

    const grouped = people.reduce((acc, person) => {
      const { name, age, birthday } = person;
      if (!name || !age || !birthday) return acc;

      acc[name] = { age, birthday }; // overrides last entry if duplicate name
      return acc;
    }, {});

    res.json(grouped);
  } catch (err) {
    console.error('[groupedPeople] Internal Server Error:', err);
    res.status(500).json({ error: 'Server error' });
  }
};


