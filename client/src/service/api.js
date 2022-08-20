import axios from 'axios';


const URL = "https://inshorts-pri.herokuapp.com/news"

export const getNews = async (page, size = 5) => {
  try{
    return await axios.get(`${URL}/news?page=${page}&size=${size}`);
  }catch(error){
    console.log("Error while calling getNews API", error )
  }
}
