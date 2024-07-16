import express from 'express';
import { getHelpRequests, updateHelpRequest } from '../help requests/help-reqest-service';

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const filter = req.query;
    const helpRequests = await getHelpRequests(filter);
    res.json(helpRequests);
  } catch (err) {
    res.status(500).send('Server Error');
  }
});

router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const update = req.body;
    const helpRequest = await updateHelpRequest(id, update);
    res.json(helpRequest);
  } catch (err) {
    res.status(500).send('Server Error');
  }
});

export default router;
