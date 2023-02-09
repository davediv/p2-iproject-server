const { Configuration, OpenAIApi } = require('openai');
const { User, Log } = require('../models')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const axios = require('axios')
const ping = require('ping')
const fs = require('fs')


class Controller {

    // INDEX
    static async index(req, res, next) {

        try {
            res.status(200).json({
                message: 'Hah?'
            })
            
        } catch (err) {
            next(err)
        }
    }


    // TWITTER - GENERATE TWEET - DONE
    static async postTwtTweet(req, res, next) {

        try {
            let { keyword } = req.body
            console.log(keyword, '<<<<<<< keyword');
    
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
            console.log(resultTrim, '<<<<<<<<< resultTrim');

            // ADD LOG
            // let queryDB = await Log.create({
            //     UserId: req.user.id,
            //     platform: 'Twitter',
            //     prompt: 'Tweet : ' + keyword,
            // })
            // console.log(queryDB, '<<<<<<<<< queryDB');


            // GET LATEST LOGS
            // let logs = await Log.findAll()
            // console.log(logs, '<<<<<<<< logs');
        

            // REST
            res.status(200).json({
                result: resultTrim
            })
            
        } catch (err) {
            // console.log(err, '<<<<<<<<< ERR');
            next(err)
        }

    } // END OF STATIC


    // TWITTER - GENERATE HASHTAG - DONE
    static async postTwtHashtag(req, res, next) {

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
            next(err)
        }

    } // END OF STATIC


    // TWITTER - GENERATE QUOTE - DONE
    static async postTwtQuote(req, res, next) {

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
            // console.log(err, '<<<<<<<<< ERR');
            next(err)
        }

    } // END OF STATIC


    // TWITTER - GENERATE BIO - DONE
    static async postTwtBio(req, res, next) {

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
            // console.log(err, '<<<<<<<<< ERR');
            next(err)
        }

    } // END OF STATIC


    // TWITTER - GENERATE FUN FACT - DONE
    static async postTwtFact(req, res, next) {

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
            // console.log(err, '<<<<<<<<< ERR');
            next(err)
        }

    } // END OF STATIC


    // TWITTER - GENERATE ENGAGING QUESTION
    static async postTwtEngage(req, res, next) {

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
            // console.log(err, '<<<<<<<<< ERR');
            next(err)
        }

    } // END OF STATIC


    // REGISTER
    static async register(req, res, next) {

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
            // console.log(err);
            next(err)
        }
    } // END OF STATIC

    // LOGIN
    static async login(req, res, next) {
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
            // console.log(err);
            next(err)
        }
    }

    // USERNAME CHECKER
    static async usernameChecker(req, res, next) {

        try {
            console.log('MASUK USERNAME CHECKER');

            let result = {}
            let { username } = req.body
            let apipassword = process.env.CHECK_MARKS

            let { data } = await axios({
                url: `https://checkmarks.com/api/v1/username/${username}/account/davdiv/password/${apipassword}`,
                method: 'GET'
            })
            console.log(data, '<<<<<<<< data');

            data.forEach(el => {
                result[el.website] = el.status
            })
            console.log(result, '<<<<<<<<<< result');

            // 1 = AVAILABLE, 0 = TAKEN

            // RESP
            res.status(200).json(result)
            
        } catch (err) {
            // console.log(err);
            next(err)
        }

    } // END OF STATIC


    // DOWN CHECKER
    static async downChecker(req, res, next) {

        try {
            let result = {}
            // let hosts = ['twitter.com', 'facebook.com', 'instagram.com', 'tiktok.com'];
            let twitter = 'twitter.com'

            ping.sys.probe(twitter, function(isAlive) {
                
                result.twitter = isAlive

                // RESP
                res.status(200).json(result)
            });

        } catch (err) {
            // console.log(err);
            next(err)
        }


    } // END OF STATIC


    // TWITTER TRENDS
    static getTwitterTrends(req, res, next) {

        try {
            let twitterTrends = fs.readFileSync('./data/twitter-trends.txt', 'utf-8')

            let trends = twitterTrends.split('\n')

            // console.log(arr);

            res.status(200).json({trends})
            
        } catch (err) {
            console.log();
            next(err)
        }

    } // END OF STATIC


    // DALL-E - GENERATE IMAGE
    static async postImageDallE(req, res, next) {

        try {
            let { keyword } = req.body
            console.log(keyword, '<<<<<<<<<<<< keyword');
    
            // SETUP GPT-3 - text-davinci-003
            const configuration = new Configuration({
              apiKey: process.env.OPENAI_API_KEY,
            });
            const openai = new OpenAIApi(configuration);
    
            // SETUP PROMPT
            const response = await openai.createImage({
                prompt: keyword + ", hd, digital art",
                n: 1,
                size: "512x512",
              });
              console.log(response, '<<<<<<<<< response');
              
              let image_url = response.data.data[0].url;

            //   console.log(image_url);
    
            // ADD LOG
            // let postLog = await Log.create({
            //     // UserId: req.user.id,
            //     UserId: 1,
            //     platform: 'Twitter',
            //     prompt: 'Fact : ' + keyword,
            // })
            // console.log(postLog, '<<<<<<<<< postLog');


            // GET LATEST LOGS
            // let logs = await Log.findAll()
            // console.log(logs, '<<<<<<<< logs');
        

            // RESP
            res.status(200).json({
                result: image_url
            })
            
        } catch (err) {
            // console.log(err, '<<<<<<<<< ERR');
            next(err)
        }

    } // END OF STATIC

    

} // END OF CONTROLLER

module.exports = Controller