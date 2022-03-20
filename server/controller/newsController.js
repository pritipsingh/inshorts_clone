import { response } from "express"
import News from "../modal/news.js";

export const getNews = async (req, res) => {
  try{
    const size =  Number(req.query.size);
    const skip = Number(req.query.page);
    let data = await News.find({}).limit(size).skip(size * skip);

    res.status(200).json(data);
  }catch(err){
    res.status(500).json(err);
  }
}