const mongoose = require("mongoose")
const Blog = require("./models/blog")
const blogs = [{
        author: "Nadeem",
        img: "https://images.unsplash.com/photo-1622398618380-f690b1530906?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDE2fHRvd0paRnNrcEdnfHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        content: "The hiring for this job will be online and the company will provide work from home/ deferred joining till current COVID-19 situation improves The hiring for this job will be online and the company will provide work from home/ deferred joining till current COVID-19 situation improves",
    },
    {
        author: "Karan",
        img: "https://images.unsplash.com/photo-1622398618380-f690b1530906?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDE2fHRvd0paRnNrcEdnfHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        content: "The hiring for this job will be online and the company will provide work from home/ deferred joining till current COVID-19 situation improves The hiring for this job will be online and the company will provide work from home/ deferred joining till current COVID-19 situation improves",
    },
    {
        author: "Kashish",
        img: "https://images.unsplash.com/photo-1622398618380-f690b1530906?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDE2fHRvd0paRnNrcEdnfHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        content: "The hiring for this job will be online and the company will provide work from home/ deferred joining till current COVID-19 situation improves The hiring for this job will be online and the company will provide work from home/ deferred joining till current COVID-19 situation improves",
    },
    {
        author: "Jatin",
        img: "https://images.unsplash.com/photo-1622398618380-f690b1530906?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDE2fHRvd0paRnNrcEdnfHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        content: "The hiring for this job will be online and the company will provide work from home/ deferred joining till current COVID-19 situation improves The hiring for this job will be online and the company will provide work from home/ deferred joining till current COVID-19 situation improves",
    },
]

const seedDB = async() => {
    await Blog.insertMany(blogs)
    console.log("DB seeded")

}

module.exports = seedDB;