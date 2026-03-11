#**Audio Upload API**#

A simple REST API for uploading audio files and accessing them through a public URL.

This project demonstrates a basic file upload service built with Node.js and Express. Uploaded audio files are stored on the server and can be accessed via a generated link.

##**Features:**##
- Upload audio files using multipart/form-data
- Automatically generate unique file names
- Serve uploaded audio files through a public URL
- File size limit (10MB)
- Accepts audio files only
- Basic error handling

##**Tech Stack:**##
- Node.js
- Express.js
- Multer
- Railway (deployment)

##**API Endpoint:**##
###**Upload Audio**###
**POST /upload**
Uploads an audio file to the server.
**Request**
Body type: form-data
|Field|Type|Required|Description|
|audio|File|Yes|Audio file to upload|
**Example Request**
Using Postman.
**Response**
Success response:
```
{
  "message": "Uploaded success",
  "file": "filename.m4a",
  "url": "https://your-domain/upload/filename.m4a"
}
```
Error Response:
```
{
  "error": "Only audio files allowed"
}
```
##**Deployment**##
This project can be deployed using platforms such as Railway.
After deployment, the API will be accessible via a public domain.

##**Note**##
This project is intended for learning and portfolio purposes.






