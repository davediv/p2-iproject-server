# Hacktiv Heroes API Documentation

## Models :

_User_

```
- name : string
- email : string, required, unique, email
- password : string, required
```

_Log_

```
- UserId : string, required
- platform : string, required
- prompt : string, required
```


## Endpoints :

List of available endpoints:

- `POST /register`
- `POST /login`

Routes below need authentication:

- `GET /heroes`
- `POST /myheroes/:heroId`
- `GET /myheroes`

Routes below need authentication & authorization:

- `PATCH /myheroes/:id`

------------------------------------------------------------------------


## POST /twitter-tweet

Request:

- body:

```json
{
  "keyword": "string"
}
```


_Response (201 - Created)_

```json
{
    "result": "string",
    "log": "string"
}
```

_Response (400 - Bad Request)_

```json
{
  "error": "xxxxxx"
}


---

_Response (400 - Bad Request)_

```json
{
  "message": "Email is required"
}
OR
{
  "message": "Invalid email format"
}
OR
{
  "message": "Email must be unique"
}
OR
{
  "message": "Password is required"
}
```

---