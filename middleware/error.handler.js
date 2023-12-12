function logErrors(err,req,res,next){
  console.log('[LOG  ERROR]');

  console.error(err);
  next(err);
}

function errorHandler(err,req,res,next){
  console.log('[ERROR HANDLER]');
  res.status(500).json({
    message:err.message,
    stack:err.stack
  })
}

module.exports = {
  logErrors,
  errorHandler }
