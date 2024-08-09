import express from 'express';
import { getHelpRequests, getHelpRequestById, createHelpRequest, updateHelpRequest, deleteHelpRequest } from './help-request-service';
import { isNotNullMW, isNumberMW } from '../middlewares';

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

router.get('/:id', isNumberMW, async (req, res) => {
  try {
    const { id } = req.params;
    const helpRequest = await getHelpRequestById(id);
    if (!helpRequest) {
      return res.status(404).send('Help Request not found');
    }
    res.json(helpRequest);
  } catch (err) {
    res.status(500).send('Server Error');
  }
});

router.post('/', isNotNullMW, async (req, res) => {
  try {
    const data = req.body;
    const newHelpRequest = await createHelpRequest(data);
    res.status(201).json(newHelpRequest);
  } catch (err) {
    res.status(500).send('Server Error');
  }
});

router.put('/:id',isNumberMW, isNotNullMW, async (req, res) => {
  try {
    const { id } = req.params;
    const update = req.body;
    const helpRequest = await updateHelpRequest(id, update);
    if (!helpRequest) {
      return res.status(404).send('Help Request not found');
    }
    res.json(helpRequest);
  } catch (err) {
    res.status(500).send('Server Error');
  }
});

router.delete('/:id', isNumberMW, async (req, res) => {
  try {
    const { id } = req.params;
    await deleteHelpRequest(id);
    res.status(204).send();
  } catch (err) {
    res.status(500).send('Server Error');
  }
});

export default router;
