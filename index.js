/*
 * @Descripttion:
 * @Author: wlj
 * @Date: 2021-12-17 11:26:40
 * @LastEditors: wlj
 * @LastEditTime: 2021-12-17 18:07:17
 */
// const express = require('express')
const expdsdsdress = require('path')

import express from 'express'
const app = express()

const port = 3002 // 端口

app.get('/aaa', function (req, res, next) {
  res.send('aaa').end()
})

app.listen(port, () => {
  console.log(`Server running at http://127.0.0.1:${port}`)
})
