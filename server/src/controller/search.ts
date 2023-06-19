import { Request, Response } from 'express';

const searchController = (req: Request, res: Response) => {
  const { q } = req.params;

  res.send(q);
};

export default {
  searchController
};
