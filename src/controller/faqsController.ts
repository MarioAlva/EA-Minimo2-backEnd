import Faqs from '../model/Faqs';
import { Request, Response } from 'express';

const postFaq = async (req: Request, res: Response) => {
    const { Question, Answer, Likes, Date, User } = req.body;
    const newFaq = new Faqs({ Question, Answer, Likes, Date, User });
    const faqSaved = await newFaq.save();
    res.status(201).json(faqSaved);
}

const getall = async (req: Request, res: Response) => {
    const faqs = await Faqs.find().populate('User');
    res.json(faqs);
}

const getOne = async (req: Request, res: Response) => {
    const faqs = await Faqs.findById(req.params.id).populate('User');
    res.json(faqs);
}

const update = async (req: Request, res: Response) => {
    try {
        const faqs = await Faqs.findById(req.params.id);
        if (!faqs) {
            return res.status(404).send('Faqs not found');
        }
        await Faqs.findByIdAndUpdate
            (req.params.id, req.body);
        res.status(200).json({ status: 'Faqs updated' });
    } catch (error) {
        res.status(500).send('error');
    }
}

const remove = async (req: Request, res: Response) => {
    try {
        const faqs = await Faqs.findById(req.params.id);
        if (!faqs) {
            return res.status(404).send('Faqs not found');
        }
        await Faqs.findByIdAndDelete(req.params.id);
        res.status(200).json({ status: 'Faqs deleted' });
    } catch (error) {
        res.status(500).send(error);
    }
}

export default {
    postFaq,
    getall,
    getOne,
    update,
    remove
};