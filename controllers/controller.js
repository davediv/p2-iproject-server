const { Configuration, OpenAIApi } = require('openai');
const { User, Log } = require('../models')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')


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


    // TWITTER - GENERATE BIO - DONE
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


    // TWITTER - GENERATE FUN FACT - DONE
    static async postTwtFact(req, res) {

        try {
            let { keyword } = req.body
            console.log(keyword, '<<<<<<<<<<<< keyword');
    
            // SETUP GPT-3 - text-davinci-003
            const configuration = new Configuration({
              apiKey: process.env.OPENAI_API_KEY,
            });
            const openai = new OpenAIApi(configuration);
    
            // SETUP PROMPT
            const response = await openai.createCompletion({
              model: "text-davinci-003",
              prompt: `Tampilkan 1 fakta lucu tentang ${keyword}`,
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
            //     prompt: 'Fact : ' + keyword,
            // })
            // console.log(postLog, '<<<<<<<<< postLog');


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


    // TWITTER - GENERATE ENGAGING QUESTION
    static async postTwtEngage(req, res) {

        try {
            let { keyword } = req.body
            console.log(keyword, '<<<<<<<<<<<< keyword');
    
            // SETUP GPT-3 - text-davinci-003
            const configuration = new Configuration({
              apiKey: process.env.OPENAI_API_KEY,
            });
            const openai = new OpenAIApi(configuration);
    
            // SETUP PROMPT
            const response = await openai.createCompletion({
              model: "text-davinci-003",
              prompt: `Bikin 1 engaging questions tentang ${keyword}, dengan bahasa Indonesia, untuk post di Twitter.`,
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
            //     prompt: 'Fact : ' + keyword,
            // })
            // console.log(postLog, '<<<<<<<<< postLog');


            // GET LATEST LOGS
            let logs = await Log.findAll()
            console.log(logs, '<<<<<<<< logs');
        

            // RESP
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


    // REGISTER
    static async register(req, res) {

        try {
            const { name, email, password } = req.body
            let isPremium = false
            console.log(name, email, password, isPremium, '<<<<<<<<<< name, email, password, isPremium');
            
            const user = await User.create({ name, email, password, isPremium })
            console.log(user, '<<<<<<<<< user');
    
            // RESP
            res.status(201).json({
                id: user.id,
                name: user.name,
                email: user.email
            })
    
        } catch (err) {
            console.log(err);
            // next(err)
            res.status(401).json({
                message: err.errors[0].message
            })
        }
    } // END OF STATIC

    // LOGIN
    static async login(req, res) {
        try {

            const { email, password } = req.body
            console.log(email, password, '<<<<<<<<< email, password');
    
            // IF EMAIL IS EMPTY
            if(!email) {
                throw { name: 'INVALID_EMAIL' }
            }
    
            // IF PASSWORD IS EMPTY
            if(!password) {
                throw { name: 'INVALID_PASSWORD' }
            }
    
            // CHECK USER
            const findUser = await User.findOne({
                where: { email }
            })
            console.log(findUser, '<<<<<< findUser');
    
            // IF USER NOT FOUND
            if (!findUser) {
                throw { name: 'UNAUTHORIZED'}
            }
    
            // COMPARE ENCRYPTED PASSWORD
            const comparePassword = bcrypt.compareSync(password, findUser.password)
            console.log(comparePassword, '<<<<<<<<< comparePassword');

            // CHECK PASSWORD
            if (!comparePassword) {
                throw { name: 'UNAUTHORIZED'}
            }
    
            // GENERATE TOKEN
            const access_token = jwt.sign({id: findUser.id}, 'sosialMediaAi')
    
            // RESP
            res.status(200).json({
                name: findUser.name,
                email: findUser.email,
                isPremium: findUser.isPremium,
                access_token: access_token
            })
    
        } catch (err) {
            console.log(err);
            next(err)
        }
    }


} // END OF CONTROLLER

module.exports = Controller