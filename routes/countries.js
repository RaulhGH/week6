const express = require('express');
const router = express.Router();
const data = require('../data/countries.json');

router.get('/', (req, res) => {
    res.status(200).json(data);
});

router.get('/:countryId', (req, res) => {
    const requestedCountryId = req.params.countryId;
    const country = data.countries.find(countryInData => 
        countryInData.id.toString() === requestedCountryId
    );

    if (!country) {
        return res.status(404).json({ error: 'Country not found' });
    }

    res.status(200).json(country);
});

module.exports = router;
