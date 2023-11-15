//Este archivo acaba en .mts, porque transforma un archivo en un módulo
// 📓FETCHING DE DATOS EN TYPESCRIPT

const API_URL = "https://api.github.com/search/repositories?q=javascript"

const response = await fetch(API_URL)