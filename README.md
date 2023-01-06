## Github-backup Services

api_url : `http://100045.pythonanywhere.com/`

##### Repository-backup services

*Post* to `/backup/repositoryClone/`
- Register the github repository
- Get webhook link in response

Request body 
```json
{
    "repository_name": "<repository_name>",
    "repository_url" :"<repository_url>" 
}
```
Response-200
```json
{
    "inserted_id":"<inserted_data>",
    "status":"<{repository_name} has been clonned .>",
    "webhook_link":"<https://100045.pythonanywhere.com/backup/{repository_name}/>"
}
```
Response-500
```json
{
    "status":"<{repository_name} was not clonned .>"
}
```

##### Backup-report services

*GET* `/reports/get-respository-reports/`
- Get all the repository that has been registered for backup process

Response-200
```json
{
    "info": "<Repository Reports>"
}
```

Response-400
```json
{
    "info": "toodles!!"
}
```
*GET* `/reports/get-backup-reports/`
- Get the backup reports of repository

Response-200
```json
{
    "repository_names":"<repository_names>",
    "zip_file_names":"<zip_file_names>"
}
```

Response-400
```json
{
    "info": "toodles!!"
}
```