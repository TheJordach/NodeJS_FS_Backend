const errorTemplates = (response, error,message) =>{
    return response.status(501).json({
        error:{
            message: message,
            status: error.status
        }
    })
}

module.exports = errorTemplates