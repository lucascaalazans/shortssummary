import cors from 'cors'
import express from 'express'

const app = expres()
app.use(cors())

app.listen(3333, () => console.log('Server is running on port 3333'))
