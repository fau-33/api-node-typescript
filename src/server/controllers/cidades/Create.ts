import type { Request, Response } from "express";

interface ICidade {
  nome: string;
}

// Definindo um tipo de objeto vazio
type EmptyObject = Record<string, never>;

export const Create = (req: Request<EmptyObject, unknown, ICidade>, res: Response) => {
  
  console.log(req.body);

  return res.send('Create!');
};