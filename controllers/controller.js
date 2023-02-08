const { Configuration, OpenAIApi } = require('openai');
const { User, Log } = require('../models')


class Controller {

    // INDEX
    static async index(req, res) {

        try {
            res.status(200).json({
                message: 'Hah?'
            })
            
        } catch (error) {
            res.status(500).json({
                error: 'Error brooo'
            })
        }
    }


    // TWITTER - GENERATE TWEET - DONE
    static async postTwtTweet(req, res) {

        try {
            let keyword = req.body.keyword
            // console.log(keyword);
    
            // SETUP GPT-3
            const configuration = new Configuration({
              apiKey: process.env.OPENAI_API_KEY,
            });
            const openai = new OpenAIApi(configuration);
    
            // SETUP PROMPT
            const response = await openai.createCompletion({
              model: "text-davinci-003",
              prompt: `Bikin Twitter post tentang ${keyword}, menggunakan bahasa indonesia, dengan hashtag yang sesuai.`,
              temperature: 0.9,
              max_tokens: 150,
              top_p: 1,
              frequency_penalty: 0,
              presence_penalty: 0.6,
              stop: [" Human:", " AI:"],
            });
            // console.log(response, '<<<<<<<<< response');
    
            // TRIM RESULT
            let resultTrim = response.data.choices[0].text.trim()
            // console.log(resultTrim, '<<<<<<<<< resultTrim');

            // ADD LOG
            // let queryDB = await Log.create({
            //     UserId: req.user.id,
            //     platform: 'Twitter',
            //     prompt: 'Tweet : ' + keyword,
            // })
            // console.log(queryDB, '<<<<<<<<< queryDB');


            // GET LATEST LOGS
            let logs = await Log.findAll()
            // console.log(logs, '<<<<<<<< logs');
        

            // REST
            res.status(200).json({
                result: resultTrim,
                log: logs
            })
            
        } catch (err) {
            // console.log(err, '<<<<<<<<< ERR');
            res.status(500).json({
                error: 'xxxxx'
            })
        }

    } // END OF STATIC


    // TWITTER - GENERATE HASHTAG - DONE
    static async postTwtHashtag(req, res) {

        try {
            let keyword = req.body.keyword
            // console.log(keyword);
    
            // SETUP GPT-3 - text-davinci-003
            const configuration = new Configuration({
              apiKey: process.env.OPENAI_API_KEY,
            });
            const openai = new OpenAIApi(configuration);
    
            // SETUP PROMPT
            const response = await openai.createCompletion({
              model: "text-davinci-003",
              prompt: `Bikin 10 Twitter hashtag tentang ${keyword}, yang sedang trend dalam bahasa Indonesia.`,
              temperature: 0.9,
              max_tokens: 150,
              top_p: 1,
              frequency_penalty: 0,
              presence_penalty: 0.6,
              stop: [" Human:", " AI:"],
            });
            // console.log(response, '<<<<<<<<< response');
    
            // TRIM RESULT
            let resultTrim = response.data.choices[0].text.trim()
            // console.log(resultTrim, '<<<<<<<<< resultTrim');

            // ADD LOG
            // let queryDB = await Log.create({
            //     UserId: req.user.id,
            //     platform: 'Twitter',
            //     prompt: 'Hashtag : ' + keyword,
            // })
            // console.log(queryDB, '<<<<<<<<< queryDB');


            // GET LATEST LOGS
            let logs = await Log.findAll()
            // console.log(logs, '<<<<<<<< logs');
        

            // REST
            res.status(200).json({
                result: resultTrim,
                log: logs
            })
            
        } catch (err) {
            // console.log(err, '<<<<<<<<< ERR');
            res.status(500).json({
                error: 'xxxxx'
            })
        }

    } // END OF STATIC


    // TWITTER - GENERATE QUOTE - DONE
    static async postTwtQuote(req, res) {

        try {
            let keyword = req.body.keyword
            console.log(keyword);
    
            // SETUP GPT-3 - text-davinci-003
            const configuration = new Configuration({
              apiKey: process.env.OPENAI_API_KEY,
            });
            const openai = new OpenAIApi(configuration);
    
            // SETUP PROMPT
            const response = await openai.createCompletion({
              model: "text-davinci-003",
              prompt: `Bikin quote tentang ${keyword}, yang menarik, dalam bahasa Indonesia, untuk post di Twitter`,
              temperature: 0.9,
              max_tokens: 150,
              top_p: 1,
              frequency_penalty: 0,
              presence_penalty: 0.6,
              stop: [" Human:", " AI:"],
            });
            console.log(response, '<<<<<<<<< response');
    
            // TRIM RESULT
            let resultTrim = response.data.choices[0].text.trim()
            console.log(resultTrim, '<<<<<<<<< resultTrim');

            // ADD LOG
            // let queryDB = await Log.create({
            //     UserId: req.user.id,
            //     platform: 'Twitter',
            //     prompt: 'Hashtag : ' + keyword,
            // })
            // console.log(queryDB, '<<<<<<<<< queryDB');


            // GET LATEST LOGS
            let logs = await Log.findAll()
            console.log(logs, '<<<<<<<< logs');
        

            // REST
            res.status(200).json({
                result: resultTrim,
                log: logs
            })
            
        } catch (err) {
            console.log(err, '<<<<<<<<< ERR');
            res.status(500).json({
                error: 'xxxxx'
            })
        }

    } // END OF STATIC


    // TWITTER - GENERATE BIO
    static async postTwtBio(req, res) {

        try {
            let { name, job, vibe } = req.body
            console.log(name, job, vibe);
    
            // SETUP GPT-3 - text-davinci-003
            const configuration = new Configuration({
              apiKey: process.env.OPENAI_API_KEY,
            });
            const openai = new OpenAIApi(configuration);
    
            // SETUP PROMPT
            const response = await openai.createCompletion({
              model: "text-davinci-003",
              prompt: `Bikin Twitter bio, nama : ${name}, pekerjaan: ${job}, dengan deskripsi yang ${vibe}, dalam bahasa Indonesia, tidak menggunakan hashtag.`,
              temperature: 0.9,
              max_tokens: 150,
              top_p: 1,
              frequency_penalty: 0,
              presence_penalty: 0.6,
              stop: [" Human:", " AI:"],
            });
            console.log(response, '<<<<<<<<< response');
    
            // TRIM RESULT
            let resultTrim = response.data.choices[0].text.trim()
            console.log(resultTrim, '<<<<<<<<< resultTrim');

            // ADD LOG
            // let postLog = await Log.create({
            //     // UserId: req.user.id,
            //     UserId: 1,
            //     platform: 'Twitter',
            //     prompt: 'Bio : ' + name + job + vibe,
            // })
            // console.log(postLog, '<<<<<<<<< postLog');


            // GET LATEST LOGS
            // let logs = await Log.findAll()
            // console.log(logs, '<<<<<<<< logs');
        

            // REST
            res.status(200).json({
                result: resultTrim,
                log: postLog
            })
            
        } catch (err) {
            console.log(err, '<<<<<<<<< ERR');
            res.status(500).json({
                error: 'xxxxx'
            })
        }

    } // END OF STATIC



} // END OF CONTROLLER

module.exports = Controller