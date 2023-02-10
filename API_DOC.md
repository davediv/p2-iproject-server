# SosialAi API Documentation

## Endpoints :

List of available endpoints:

- `POST /twitter-tweet`
- `POST /twitter-hashtag`
- `POST /twitter-quote`
- `POST /twitter-bio`
- `POST /twitter-fact`
- `POST /twitter-engage`
- `POST /username-checker`
- `GET /down-checker`
- `GET /twitter-trends`
- `POST /image-dalle`
- `POST /register`
- `POST /login`

------------------------------------------------------------------------


## POST /twitter-tweet

Request:

- body:

```json
{
  "keyword": "string"
}
```


_Response (200 - SUCCESS)_

```json
{
    "result": "string",
}
```

## POST /twitter-hashtag

Request:

- body:

```json
{
  "keyword": "string"
}
```


_Response (200 - SUCCESS)_

```json
{
    "result": "string",
}
```


---

## POST /twitter-quote

Request:

- body:

```json
{
  "keyword": "string"
}
```


_Response (200 - SUCCESS)_

```json
{
    "result": "string",
}
```


---

## POST /twitter-bio

Request:

- body:

```json
{
  "keyword": "string"
}
```


_Response (200 - SUCCESS)_

```json
{
    "result": "string",
}
```


---

## POST /twitter-fact

Request:

- body:

```json
{
  "keyword": "string"
}
```


_Response (200 - SUCCESS)_

```json
{
    "result": "string",
}
```


---

## POST /twitter-engage

Request:

- body:

```json
{
  "keyword": "string"
}
```


_Response (200 - SUCCESS)_

```json
{
    "result": "string",
}
```


---

## POST /username-checker

Request:

- body:

```json
{
  "facebook": "integer",
  "twitter": "integer",
  "instagram": "integer",
  "snapchat": "integer",
  "youtube": "integer"
}
```


_Response (200 - SUCCESS)_

```json
{
    "result": "string",
}
```


---

## POST /down-checker

Request:

- body:

```json
{
  "twitter": "boolean"
}
```


_Response (200 - SUCCESS)_

```json
{
    "result": "string",
}
```


---

## POST /twitter-trends

Request:

- body:

```json
{
  "trends": "array"
}
```


_Response (200 - SUCCESS)_

```json
{
    "result": "string",
}
```


---

## POST /image-dalle

Request:

- body:

```json
{
  "keyword": "string"
}
```


_Response (200 - SUCCESS)_

```json
{
    "result": "string",
}
```


---